import type { VirusTotalResult, UrlScanResult, SecurityHeader, Finding, Severity } from '@/types/scanner';

// ─── VirusTotal ──────────────────────────────────────────────────────────────

export async function checkVirusTotal(
  domain: string,
  apiKey: string,
): Promise<{ result: VirusTotalResult | null; findings: Finding[] }> {
  if (!apiKey) return { result: null, findings: [] };

  try {
    const controller = new AbortController();
    const tid = setTimeout(() => controller.abort(), 15000);

    const res = await fetch(`https://www.virustotal.com/api/v3/domains/${encodeURIComponent(domain)}`, {
      headers: { 'x-apikey': apiKey },
      signal: controller.signal,
    });
    clearTimeout(tid);

    if (!res.ok) return { result: null, findings: [] };

    const json = await res.json();
    const attrs = json.data?.attributes ?? {};
    const stats = attrs.last_analysis_stats ?? {};
    const cats = attrs.categories ?? {};

    const total = (Object.values(stats) as number[]).reduce((a, b) => a + b, 0);

    const result: VirusTotalResult = {
      malicious: stats.malicious ?? 0,
      suspicious: stats.suspicious ?? 0,
      harmless: stats.harmless ?? 0,
      undetected: stats.undetected ?? 0,
      totalVendors: total,
      reputation: attrs.reputation ?? 0,
      lastAnalysisDate: attrs.last_analysis_date
        ? new Date(attrs.last_analysis_date * 1000).toLocaleDateString()
        : 'Unknown',
      categories: Object.values(cats) as string[],
    };

    const findings: Finding[] = [];

    if (result.malicious > 0) {
      findings.push({
        id: 'vt-malicious',
        module: 'Reputation',
        severity: 'critical',
        title: `Flagged Malicious by ${result.malicious} Security Vendor(s)`,
        description: `${result.malicious} of ${result.totalVendors} VirusTotal vendors classify this domain as malicious.`,
        evidence: `Malicious: ${result.malicious} | Suspicious: ${result.suspicious} | Harmless: ${result.harmless}`,
        remediation: 'Scan for malware, remove malicious content, request false-positive review from affected vendors.',
        reference: `https://www.virustotal.com/gui/domain/${domain}`,
      });
    } else if (result.suspicious > 0) {
      findings.push({
        id: 'vt-suspicious',
        module: 'Reputation',
        severity: 'high',
        title: `Flagged Suspicious by ${result.suspicious} Security Vendor(s)`,
        description: `${result.suspicious} of ${result.totalVendors} VirusTotal vendors report suspicious behavior.`,
        evidence: `Suspicious: ${result.suspicious} | Harmless: ${result.harmless}`,
        reference: `https://www.virustotal.com/gui/domain/${domain}`,
      });
    }

    if (result.reputation < -10) {
      findings.push({
        id: 'vt-negative-rep',
        module: 'Reputation',
        severity: 'medium',
        title: `Negative Community Reputation Score (${result.reputation})`,
        description: 'VirusTotal community members have flagged this domain negatively. Negative scores correlate with reported abuse.',
        remediation: 'Review community comments on VirusTotal and address reported issues.',
      });
    }

    return { result, findings };
  } catch {
    return { result: null, findings: [] };
  }
}

// ─── Security Headers Spec ───────────────────────────────────────────────────

const HEADERS_SPEC: Array<{
  name: string;
  lower: string;
  severity: Severity;
  description: string;
  recommendation: string;
}> = [
  {
    name: 'Strict-Transport-Security',
    lower: 'strict-transport-security',
    severity: 'high',
    description: 'Enforces HTTPS and prevents protocol downgrade attacks and cookie hijacking via MITM.',
    recommendation: 'Strict-Transport-Security: max-age=31536000; includeSubDomains; preload',
  },
  {
    name: 'Content-Security-Policy',
    lower: 'content-security-policy',
    severity: 'high',
    description: 'Prevents XSS, data injection, and clickjacking by whitelisting trusted content sources.',
    recommendation: "Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-{random}'",
  },
  {
    name: 'X-Frame-Options',
    lower: 'x-frame-options',
    severity: 'medium',
    description: 'Prevents the page from being loaded in an iframe, blocking clickjacking attacks.',
    recommendation: 'X-Frame-Options: SAMEORIGIN  (or CSP: frame-ancestors \'self\')',
  },
  {
    name: 'X-Content-Type-Options',
    lower: 'x-content-type-options',
    severity: 'medium',
    description: 'Prevents MIME-type sniffing, which can cause browsers to execute non-script content as scripts.',
    recommendation: 'X-Content-Type-Options: nosniff',
  },
  {
    name: 'Referrer-Policy',
    lower: 'referrer-policy',
    severity: 'low',
    description: 'Controls how much referrer information leaks when navigating away from the site.',
    recommendation: 'Referrer-Policy: strict-origin-when-cross-origin',
  },
  {
    name: 'Permissions-Policy',
    lower: 'permissions-policy',
    severity: 'low',
    description: 'Restricts browser features (camera, mic, geolocation) from being used by the page or iframes.',
    recommendation: 'Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()',
  },
  {
    name: 'X-XSS-Protection',
    lower: 'x-xss-protection',
    severity: 'info',
    description: "Legacy browser XSS filter (deprecated, superseded by CSP). Still checked by many scanners.",
    recommendation: 'X-XSS-Protection: 1; mode=block',
  },
];

function buildSecurityHeaders(rawHeaders: Record<string, string>): SecurityHeader[] {
  const lower = Object.fromEntries(Object.entries(rawHeaders).map(([k, v]) => [k.toLowerCase(), v]));

  return HEADERS_SPEC.map(spec => {
    let present = spec.lower in lower;
    // CSP frame-ancestors satisfies X-Frame-Options
    if (spec.lower === 'x-frame-options') {
      present = present || (lower['content-security-policy'] ?? '').includes('frame-ancestors');
    }
    return {
      name: spec.name,
      value: lower[spec.lower],
      present,
      severity: spec.severity,
      description: spec.description,
      recommendation: spec.recommendation,
    };
  });
}

// ─── URLScan.io ──────────────────────────────────────────────────────────────

const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms));

export async function submitUrlScan(
  url: string,
  apiKey: string,
): Promise<{ result: UrlScanResult | null; findings: Finding[] }> {
  if (!apiKey) return { result: null, findings: [] };

  try {
    const submitCtrl = new AbortController();
    const submitTid = setTimeout(() => submitCtrl.abort(), 15000);

    const submitRes = await fetch('https://urlscan.io/api/v1/scan/', {
      method: 'POST',
      headers: { 'API-Key': apiKey, 'Content-Type': 'application/json' },
      body: JSON.stringify({ url, visibility: 'private' }),
      signal: submitCtrl.signal,
    });
    clearTimeout(submitTid);

    if (!submitRes.ok) return { result: null, findings: [] };

    const submitData = await submitRes.json();
    const { uuid, result: reportURL, api: apiURL } = submitData;

    // Poll for completion — up to ~44s (11 × 4s)
    for (let attempt = 0; attempt < 11; attempt++) {
      await sleep(4000);
      try {
        const ctrl = new AbortController();
        const tid = setTimeout(() => ctrl.abort(), 10000);
        const resultRes = await fetch(apiURL, {
          headers: { 'API-Key': apiKey },
          signal: ctrl.signal,
        });
        clearTimeout(tid);

        if (resultRes.status === 404) continue;

        if (resultRes.ok) {
          const data = await resultRes.json();
          const rawHeaders: Record<string, string> = {};

          ((data.lists?.headers ?? []) as Array<{ name: string; value: string }>).forEach(h => {
            if (h.name && h.value) rawHeaders[h.name] = h.value;
          });

          const secHeaders = buildSecurityHeaders(rawHeaders);
          const technologies: string[] = ((data.lists?.technologies ?? []) as Array<{ tech?: { name: string }; name?: string }>)
            .map(t => t.tech?.name ?? t.name ?? '')
            .filter(Boolean);

          const result: UrlScanResult = {
            uuid,
            reportURL,
            screenshotURL: data.task?.screenshotURL,
            status: 'complete',
            server: rawHeaders['Server'] ?? rawHeaders['server'],
            ip: data.page?.ip,
            country: data.page?.country,
            tlsProtocol: data.page?.tlsProtocol,
            headers: secHeaders,
            technologies,
          };

          const findings: Finding[] = secHeaders
            .filter(h => !h.present && h.severity !== 'info')
            .map(h => ({
              id: `header-${h.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
              module: 'Security Headers',
              severity: h.severity,
              title: `Missing Security Header: ${h.name}`,
              description: h.description,
              remediation: h.recommendation,
            }));

          return { result, findings };
        }
      } catch {
        continue;
      }
    }

    return {
      result: { uuid, reportURL, status: 'processing', headers: [], technologies: [] },
      findings: [],
    };
  } catch {
    return { result: null, findings: [] };
  }
}
