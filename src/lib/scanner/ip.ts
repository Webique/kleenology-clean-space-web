import type { IpResult, Finding } from '@/types/scanner';

const HOSTING_KEYWORDS = [
  'hosting', 'cloud', 'datacenter', 'data center', 'amazon', 'aws', 'google',
  'microsoft', 'azure', 'digitalocean', 'linode', 'akamai', 'vultr', 'hetzner',
  'ovh', 'fastly', 'cloudflare', 'cdn', 'colocation', 'colo',
];

export async function scanIP(ip: string): Promise<{ result: IpResult | null; findings: Finding[] }> {
  try {
    const controller = new AbortController();
    const tid = setTimeout(() => controller.abort(), 10000);

    const res = await fetch(`https://ipapi.co/${encodeURIComponent(ip)}/json/`, {
      signal: controller.signal,
    });
    clearTimeout(tid);

    if (!res.ok) return { result: null, findings: [] };

    const data = await res.json();
    if (data.error) return { result: null, findings: [] };

    const orgLower = (data.org ?? '').toLowerCase();
    const isHosting = HOSTING_KEYWORDS.some(k => orgLower.includes(k));

    const result: IpResult = {
      ip: data.ip ?? ip,
      city: data.city ?? 'Unknown',
      region: data.region ?? 'Unknown',
      countryCode: data.country ?? 'Unknown',
      countryName: data.country_name ?? 'Unknown',
      org: data.org ?? 'Unknown',
      asn: data.asn ?? 'Unknown',
      timezone: data.timezone ?? 'Unknown',
      isHosting,
    };

    return { result, findings: [] };
  } catch {
    return { result: null, findings: [] };
  }
}
