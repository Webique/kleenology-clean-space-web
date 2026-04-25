import { ExternalLink, CheckCircle, XCircle, Copy } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FindingsPanel } from './FindingsPanel';
import type { ScanResult } from '@/types/scanner';

function Cell({ label, value }: { label: string; value?: string | number | boolean }) {
  if (value === undefined || value === null) return null;
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-slate-500 text-xs uppercase tracking-wider">{label}</span>
      <span className="text-slate-200 text-sm font-mono break-all">{String(value)}</span>
    </div>
  );
}

function Tag({ text, ok }: { text: string; ok: boolean }) {
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium border ${
      ok ? 'text-emerald-400 bg-emerald-950/40 border-emerald-500/30' : 'text-red-400 bg-red-950/40 border-red-500/30'
    }`}>
      {ok ? <CheckCircle className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
      {text}
    </span>
  );
}

function DnsTab({ result }: { result: ScanResult }) {
  const dns = result.dns;
  if (!dns) return <p className="text-slate-500 py-8 text-center">DNS scan not run or failed.</p>;
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        <Tag text="SPF"    ok={dns.hasSPF} />
        <Tag text="DMARC"  ok={dns.hasDMARC} />
        <Tag text="DKIM"   ok={dns.hasDKIM} />
        <Tag text="DNSSEC" ok={dns.hasDNSSEC} />
      </div>
      {dns.spfRecord   && <Cell label="SPF Record"   value={dns.spfRecord} />}
      {dns.dmarcRecord && <Cell label="DMARC Record" value={dns.dmarcRecord} />}
      {dns.dkimSelectors.length > 0 && <Cell label="DKIM Selectors Found" value={dns.dkimSelectors.join(', ')} />}
      {dns.ipv4.length > 0  && <Cell label="IPv4"        value={dns.ipv4.join(', ')} />}
      {dns.ipv6.length > 0  && <Cell label="IPv6"        value={dns.ipv6.join(', ')} />}
      {dns.nameservers.length > 0 && <Cell label="Nameservers" value={dns.nameservers.join(', ')} />}
      {dns.mxRecords.length > 0   && <Cell label="MX Records"  value={dns.mxRecords.join(', ')} />}
      {dns.txtRecords.length > 0 && (
        <div>
          <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">TXT Records</p>
          <div className="space-y-1">
            {dns.txtRecords.map((r, i) => (
              <code key={i} className="block text-xs text-slate-300 bg-slate-950/60 rounded px-3 py-1.5 font-mono break-all">{r}</code>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function CertsTab({ result }: { result: ScanResult }) {
  const certs = result.certs;
  if (!certs) return <p className="text-slate-500 py-8 text-center">Certificate scan not run or failed.</p>;
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Total Certs',  value: certs.totalCerts },
          { label: 'Wildcard',     value: certs.wildcardCerts },
          { label: 'Expired',      value: certs.expiredCerts },
        ].map(({ label, value }) => (
          <div key={label} className="bg-slate-900/60 rounded-lg p-3 text-center border border-slate-800">
            <p className="text-2xl font-bold text-slate-100">{value}</p>
            <p className="text-slate-500 text-xs mt-1">{label}</p>
          </div>
        ))}
      </div>
      {certs.subdomains.length > 0 && (
        <div>
          <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">
            Discovered Subdomains ({certs.subdomains.length})
          </p>
          <div className="bg-slate-950/60 rounded-lg p-3 max-h-48 overflow-y-auto">
            {certs.subdomains.map(sd => (
              <div key={sd} className="text-xs text-cyan-300 font-mono py-0.5">{sd}</div>
            ))}
          </div>
        </div>
      )}
      {certs.certificates.length > 0 && (
        <div>
          <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">Recent Certificates</p>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {certs.certificates.slice(0, 10).map(c => (
              <div key={c.id} className={`bg-slate-900/60 border rounded p-3 text-xs ${c.isExpired ? 'border-red-500/30' : 'border-slate-800'}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-slate-200 font-mono font-medium">{c.commonName}</span>
                  <div className="flex gap-1">
                    {c.isWildcard && <span className="text-yellow-400 border border-yellow-500/30 px-1.5 py-0.5 rounded">wildcard</span>}
                    {c.isExpired  && <span className="text-red-400 border border-red-500/30 px-1.5 py-0.5 rounded">expired</span>}
                  </div>
                </div>
                <p className="text-slate-500">{c.issuerName}</p>
                <p className="text-slate-600">{c.notBefore.slice(0,10)} → {c.notAfter.slice(0,10)}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function IpTab({ result }: { result: ScanResult }) {
  const ip = result.ip;
  if (!ip) return <p className="text-slate-500 py-8 text-center">IP scan not run or no IP resolved.</p>;
  return (
    <div className="grid grid-cols-2 gap-4">
      <Cell label="IP Address"  value={ip.ip} />
      <Cell label="ASN"         value={ip.asn} />
      <Cell label="Organization" value={ip.org} />
      <Cell label="Country"     value={`${ip.countryName} (${ip.countryCode})`} />
      <Cell label="Region"      value={ip.region} />
      <Cell label="City"        value={ip.city} />
      <Cell label="Timezone"    value={ip.timezone} />
      <Cell label="Hosting/CDN" value={ip.isHosting ? 'Yes' : 'No'} />
    </div>
  );
}

function ReputationTab({ result }: { result: ScanResult }) {
  const vt = result.virustotal;
  const us = result.urlscan;
  if (!vt && !us) return <p className="text-slate-500 py-8 text-center">No reputation data. Add API keys and enable modules.</p>;
  return (
    <div className="space-y-5">
      {vt && (
        <div>
          <p className="text-slate-400 text-xs uppercase tracking-wider mb-3">VirusTotal</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {[
              { label: 'Malicious',  value: vt.malicious,  color: vt.malicious  > 0 ? 'text-red-400'     : 'text-slate-400' },
              { label: 'Suspicious', value: vt.suspicious, color: vt.suspicious > 0 ? 'text-orange-400'  : 'text-slate-400' },
              { label: 'Harmless',   value: vt.harmless,   color: 'text-emerald-400' },
              { label: 'Undetected', value: vt.undetected, color: 'text-slate-400' },
            ].map(({ label, value, color }) => (
              <div key={label} className="bg-slate-900/60 rounded-lg p-3 text-center border border-slate-800">
                <p className={`text-2xl font-bold ${color}`}>{value}</p>
                <p className="text-slate-500 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>
          <Cell label="Reputation Score" value={vt.reputation} />
          <Cell label="Last Analysis"    value={vt.lastAnalysisDate} />
          {vt.categories.length > 0 && <Cell label="Categories" value={vt.categories.join(', ')} />}
        </div>
      )}
      {us && (
        <div>
          <p className="text-slate-400 text-xs uppercase tracking-wider mb-3">URLScan.io</p>
          {us.server  && <Cell label="Server"  value={us.server} />}
          {us.ip      && <Cell label="IP"      value={us.ip} />}
          {us.country && <Cell label="Country" value={us.country} />}
          {us.tlsProtocol && <Cell label="TLS Protocol" value={us.tlsProtocol} />}
          {us.reportURL && (
            <a href={us.reportURL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 mt-2">
              <ExternalLink className="w-3 h-3" />
              View full URLScan report
            </a>
          )}
          {us.screenshotURL && (
            <div className="mt-4">
              <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">Screenshot</p>
              <img src={us.screenshotURL} alt="Site screenshot" className="rounded-lg border border-slate-700 max-w-sm w-full" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function HeadersTab({ result }: { result: ScanResult }) {
  const headers = result.urlscan?.headers;
  if (!headers?.length) return <p className="text-slate-500 py-8 text-center">No header data. Enable URLScan module with API key.</p>;
  return (
    <div className="space-y-2">
      {headers.map(h => (
        <div key={h.name} className={`flex items-start gap-3 p-3 rounded-lg border ${h.present ? 'border-emerald-500/20 bg-emerald-950/10' : 'border-red-500/20 bg-red-950/10'}`}>
          {h.present
            ? <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            : <XCircle    className="w-4 h-4 text-red-400    shrink-0 mt-0.5" />}
          <div className="flex-1 min-w-0">
            <p className="text-slate-200 text-sm font-mono">{h.name}</p>
            {h.value
              ? <p className="text-slate-400 text-xs mt-0.5 truncate">{h.value}</p>
              : <p className="text-slate-600 text-xs mt-0.5">{h.recommendation}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

function TechTab({ result }: { result: ScanResult }) {
  const techs = result.urlscan?.technologies;
  if (!techs?.length) return <p className="text-slate-500 py-8 text-center">No technology data. Enable URLScan module with API key.</p>;
  return (
    <div className="flex flex-wrap gap-2">
      {techs.map(t => (
        <span key={t} className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium">
          {t}
        </span>
      ))}
    </div>
  );
}

function DorksTab({ domain }: { domain: string }) {
  const dorks = [
    { label: 'Admin Pages',        q: `site:${domain} inurl:admin` },
    { label: 'Login Pages',        q: `site:${domain} inurl:login` },
    { label: 'WordPress Admin',    q: `site:${domain} inurl:wp-admin` },
    { label: 'Exposed DB Files',   q: `site:${domain} ext:sql | ext:dbf | ext:mdb` },
    { label: 'Config Files',       q: `site:${domain} ext:xml | ext:conf | ext:cfg | ext:env` },
    { label: 'Log Files',          q: `site:${domain} ext:log` },
    { label: 'Backup Files',       q: `site:${domain} ext:bak | ext:old | ext:backup | ext:bkp` },
    { label: 'API Endpoints',      q: `site:${domain} inurl:api` },
    { label: 'Exposed Git',        q: `site:${domain} inurl:.git` },
    { label: 'Directory Listings', q: `site:${domain} intitle:"index of"` },
    { label: 'phpMyAdmin',         q: `site:${domain} inurl:phpmyadmin` },
    { label: 'Sensitive Paths',    q: `site:${domain} inurl:secret | inurl:password | inurl:credential` },
    { label: 'SQL Errors',         q: `site:${domain} intext:"sql syntax" | intext:"mysql error"` },
    { label: 'PDF Documents',      q: `site:${domain} filetype:pdf` },
  ];

  const copy = (q: string) => navigator.clipboard?.writeText(q);
  const google = (q: string) => window.open(`https://www.google.com/search?q=${encodeURIComponent(q)}`, '_blank');

  return (
    <div className="space-y-2">
      <p className="text-slate-500 text-xs mb-4">Passive recon via Google. These queries expose sensitive paths without touching the target server.</p>
      {dorks.map(({ label, q }) => (
        <div key={label} className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors group">
          <div className="flex-1 min-w-0">
            <p className="text-slate-400 text-xs mb-0.5">{label}</p>
            <code className="text-xs text-cyan-300 font-mono truncate block">{q}</code>
          </div>
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button onClick={() => copy(q)} title="Copy" className="p-1.5 rounded hover:bg-slate-700 text-slate-400 hover:text-white transition-colors">
              <Copy className="w-3.5 h-3.5" />
            </button>
            <button onClick={() => google(q)} title="Search" className="p-1.5 rounded hover:bg-slate-700 text-slate-400 hover:text-white transition-colors">
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

interface Props {
  result: ScanResult;
}

export function ResultsTabs({ result }: Props) {
  return (
    <Tabs defaultValue="findings" className="w-full">
      <TabsList className="bg-slate-900 border border-slate-800 flex flex-wrap h-auto gap-1 p-1 mb-4">
        {[
          { value: 'findings',    label: `Findings (${result.findings.length})` },
          { value: 'dns',         label: 'DNS' },
          { value: 'certs',       label: 'Certificates' },
          { value: 'ip',          label: 'IP Info' },
          { value: 'reputation',  label: 'Reputation' },
          { value: 'headers',     label: 'Headers' },
          { value: 'tech',        label: 'Technologies' },
          { value: 'dorks',       label: 'Google Dorks' },
        ].map(t => (
          <TabsTrigger key={t.value} value={t.value}
            className="text-slate-400 data-[state=active]:bg-slate-700 data-[state=active]:text-white text-xs px-3 py-1.5 rounded">
            {t.label}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="findings">   <FindingsPanel findings={result.findings} /></TabsContent>
      <TabsContent value="dns">        <DnsTab        result={result} /></TabsContent>
      <TabsContent value="certs">      <CertsTab      result={result} /></TabsContent>
      <TabsContent value="ip">         <IpTab         result={result} /></TabsContent>
      <TabsContent value="reputation"> <ReputationTab result={result} /></TabsContent>
      <TabsContent value="headers">    <HeadersTab    result={result} /></TabsContent>
      <TabsContent value="tech">       <TechTab       result={result} /></TabsContent>
      <TabsContent value="dorks">      <DorksTab      domain={result.domain} /></TabsContent>
    </Tabs>
  );
}
