import type { DnsResult, Finding } from '@/types/scanner';

const DOH = 'https://cloudflare-dns.com/dns-query';

async function doh(name: string, type: string): Promise<Array<{ data: string; TTL: number }>> {
  try {
    const res = await fetch(`${DOH}?name=${encodeURIComponent(name)}&type=${encodeURIComponent(type)}`, {
      headers: { Accept: 'application/dns-json' },
    });
    if (!res.ok) return [];
    const json = await res.json();
    return (json.Answer ?? []).map((r: { data: string; TTL: number }) => ({ data: r.data, TTL: r.TTL }));
  } catch {
    return [];
  }
}

const DKIM_SELECTORS = [
  'default', 'google', 'mail', 'dkim', 'k1', 'k2',
  'selector1', 'selector2', 'smtp', 'email', 's1', 's2',
];

export async function scanDNS(domain: string): Promise<{ result: DnsResult; findings: Finding[] }> {
  const [aRecs, aaaaRecs, mxRecs, nsRecs, txtRecs, dmarcRecs, dsRecs] = await Promise.all([
    doh(domain, 'A'),
    doh(domain, 'AAAA'),
    doh(domain, 'MX'),
    doh(domain, 'NS'),
    doh(domain, 'TXT'),
    doh(`_dmarc.${domain}`, 'TXT'),
    doh(domain, 'DS'),
  ]);

  const dkimResults = await Promise.all(
    DKIM_SELECTORS.map(s => doh(`${s}._domainkey.${domain}`, 'TXT')),
  );
  const foundSelectors = DKIM_SELECTORS.filter((_, i) => dkimResults[i].length > 0);

  const unquote = (s: string) => s.replace(/^"|"$/g, '').replace(/"\s*"/g, '');
  const txtValues = txtRecs.map(r => unquote(r.data));
  const spfRecord = txtValues.find(t => t.startsWith('v=spf1'));
  const dmarcRaw = dmarcRecs.find(r => r.data.includes('v=DMARC1'));
  const dmarcRecord = dmarcRaw ? unquote(dmarcRaw.data) : undefined;

  const result: DnsResult = {
    ipv4: aRecs.map(r => r.data),
    ipv6: aaaaRecs.map(r => r.data),
    nameservers: nsRecs.map(r => r.data.replace(/\.$/, '')),
    mxRecords: mxRecs.map(r => r.data),
    txtRecords: txtValues,
    hasSPF: !!spfRecord,
    spfRecord,
    hasDMARC: !!dmarcRecord,
    dmarcRecord,
    hasDKIM: foundSelectors.length > 0,
    dkimSelectors: foundSelectors,
    hasDNSSEC: dsRecs.length > 0,
  };

  const findings: Finding[] = [];

  if (!result.hasSPF) {
    findings.push({
      id: 'dns-missing-spf',
      module: 'DNS / Email Security',
      severity: 'high',
      title: 'Missing SPF Record',
      description: 'No SPF record found. Attackers can forge emails claiming to be from this domain (email spoofing).',
      remediation: 'Add TXT record: v=spf1 include:_spf.<mailprovider>.com ~all',
      reference: 'https://www.rfc-editor.org/rfc/rfc7208',
    });
  } else if (spfRecord?.includes('+all')) {
    findings.push({
      id: 'dns-spf-plus-all',
      module: 'DNS / Email Security',
      severity: 'critical',
      title: 'SPF Record Uses +all — Permits Any Sender',
      description: '+all allows any server on the internet to send mail as this domain, completely defeating SPF.',
      evidence: spfRecord,
      remediation: 'Replace +all with ~all (soft fail) or -all (hard fail)',
    });
  }

  if (!result.hasDMARC) {
    findings.push({
      id: 'dns-missing-dmarc',
      module: 'DNS / Email Security',
      severity: 'high',
      title: 'Missing DMARC Record',
      description: 'No DMARC policy found. Mail receivers cannot enforce SPF/DKIM alignment or quarantine spoofed mail.',
      remediation: 'Add TXT at _dmarc.domain.com: v=DMARC1; p=quarantine; rua=mailto:dmarc@domain.com',
      reference: 'https://www.rfc-editor.org/rfc/rfc7489',
    });
  } else if (dmarcRecord?.includes('p=none')) {
    findings.push({
      id: 'dns-dmarc-none',
      module: 'DNS / Email Security',
      severity: 'medium',
      title: 'DMARC Policy is p=none (Monitor Only)',
      description: 'DMARC is in report-only mode. Spoofed emails are not quarantined or rejected.',
      evidence: dmarcRecord,
      remediation: 'Graduate to p=quarantine then p=reject after reviewing DMARC aggregate reports.',
    });
  }

  if (!result.hasDKIM) {
    findings.push({
      id: 'dns-missing-dkim',
      module: 'DNS / Email Security',
      severity: 'medium',
      title: 'DKIM Not Detected',
      description: 'No DKIM public key found for common selectors. Email integrity and authenticity cannot be cryptographically verified.',
      remediation: 'Configure DKIM signing in your mail provider and publish the TXT record at <selector>._domainkey.domain.com.',
    });
  }

  if (!result.hasDNSSEC) {
    findings.push({
      id: 'dns-no-dnssec',
      module: 'DNS / Email Security',
      severity: 'low',
      title: 'DNSSEC Not Configured',
      description: 'DNS responses are not cryptographically signed, making DNS cache poisoning attacks possible.',
      remediation: 'Enable DNSSEC through your domain registrar and validate with your DNS provider.',
      reference: 'https://www.icann.org/resources/pages/dnssec-what-is-it-why-important-2019-03-20-en',
    });
  }

  if (result.nameservers.length === 1) {
    findings.push({
      id: 'dns-single-ns',
      module: 'DNS / Email Security',
      severity: 'medium',
      title: 'Single Nameserver (Single Point of Failure)',
      description: 'Only one authoritative nameserver detected. A single failure makes the domain unresolvable.',
      remediation: 'Add at least two geographically distributed nameservers.',
    });
  }

  return { result, findings };
}
