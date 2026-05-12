import type { Config, Context } from "@netlify/edge-functions";

// ─── 1. SCANNER & PENTEST TOOL USER-AGENTS ───────────────────────────────────

const BLOCKED_UA_PATTERNS: RegExp[] = [
  // Port & network scanners
  /nmap/i,
  /nmap\s*scripting\s*engine/i,
  /masscan/i,
  /zgrab/i,
  /zmap/i,
  /shodan/i,
  /censys/i,

  // Web vulnerability scanners
  /nikto/i,
  /nuclei/i,
  /acunetix/i,
  /netsparker/i,
  /appscan/i,
  /webinspect/i,
  /nessus/i,
  /openvas/i,
  /qualys/i,
  /rapid7/i,
  /burp\s*suite/i,
  /burpsuite/i,

  // Fuzzing & directory brute-force
  /fuzz\s*faster\s*u\s*fool/i, // ffuf
  /ffuf/i,
  /dirsearch/i,
  /dirbuster/i,
  /gobuster/i,
  /feroxbuster/i,
  /wfuzz/i,
  /dirb[^a-z]/i,
  /rustbuster/i,
  /kiterunner/i,

  // Exploitation frameworks
  /sqlmap/i,
  /metasploit/i,
  /hydra/i,
  /medusa/i,
  /ncrack/i,
  /commix/i,  // command injection tester
  /dalfox/i,  // XSS scanner
  /xsser/i,

  // Recon & crawling tools
  /w3af/i,
  /wapiti/i,
  /skipfish/i,
  /arachni/i,
  /whatweb/i,
  /httpx\//i,       // ProjectDiscovery httpx
  /katana\//i,      // ProjectDiscovery katana
  /hakrawler/i,
  /gau\//i,         // GetAllUrls

  // Generic scripting clients (no real browser would use these bare)
  /python-requests\/[0-9]/i,
  /python-urllib\/[0-9]/i,
  /go-http-client\//i,
  /libwww-perl/i,
  /lwp-trivial/i,
  /jakarta\s*commons/i,
  /java\/[0-9]\.[0-9]/i,
  /ruby\/[0-9]/i,

  // OWASP ZAP
  /zap\//i,
  /owasp\s*zap/i,
];

// ─── 2. PROBE PATHS ───────────────────────────────────────────────────────────
// Paths that legitimate visitors never request but scanners always try

const PROBE_PATHS = new Set([
  // nmap NSE specific probes
  "/HNAP1", "/sdk/info", "/evox/about", "/SDK/Info",

  // Source control exposure
  "/.git/HEAD", "/.git/config", "/.git/index",
  "/.svn/entries", "/.hg/hgrc",

  // Environment & config files
  "/.env", "/.env.local", "/.env.production", "/.env.staging",
  "/.env.backup", "/.env.bak", "/env.js", "/config.json",

  // PHP targets (this site has none)
  "/wp-login.php", "/wp-admin", "/wp-config.php",
  "/phpmyadmin", "/phpinfo.php", "/php-info.php",
  "/config.php", "/setup.php", "/install.php",
  "/admin.php", "/admin/config.php",

  // Apache/Nginx info pages
  "/server-status", "/server-info",

  // Java / Spring Boot
  "/actuator", "/actuator/health", "/actuator/env",
  "/actuator/mappings", "/WEB-INF/web.xml",
  "/_profiler", "/manager/html",

  // Backup & dump files
  "/backup.zip", "/backup.tar.gz", "/backup.sql",
  "/dump.sql", "/database.sql", "/db.sql",
  "/site.tar.gz", "/website.zip",

  // Hidden files scanners hunt for
  "/.DS_Store", "/Thumbs.db", "/.htpasswd",
  "/crossdomain.xml", "/clientaccesspolicy.xml",

  // Common panel URLs
  "/admin", "/panel", "/dashboard",
  "/cpanel", "/whm", "/plesk",

  // Cloud metadata endpoint (SSRF probe)
  "/latest/meta-data",
]);

// Path *prefixes* that should be blocked (for nested paths like /actuator/beans)
const PROBE_PREFIXES = [
  "/.git/",
  "/.svn/",
  "/actuator/",
  "/wp-admin/",
  "/phpmyadmin/",
];

// ─── 3. WAF – ATTACK PAYLOAD SIGNATURES ─────────────────────────────────────
// Detect common pentest payloads in the URL path and query string

const ATTACK_PATTERNS: RegExp[] = [
  // Path traversal
  /\.\.[/\\]|\.\.%2[fF]|\.\.%5[cC]/,
  /%2e%2e[/\\%]/i,

  // SQL injection
  /(\bunion\b.{0,20}\bselect\b|\bselect\b.{0,30}\bfrom\b)/i,
  /(\bdrop\s+table\b|\binsert\s+into\b|\bdelete\s+from\b)/i,
  /('|\%27)\s*(or|and)\s*('|\%27)?\s*[0-9]/i,
  /;\s*(exec|execute|xp_cmdshell|sp_executesql)/i,
  /--\s*$|\/\*.*\*\//,

  // XSS
  /<script[\s>]/i,
  /javascript\s*:/i,
  /on(load|error|click|mouse|focus|blur|key|submit|change)\s*=/i,
  /vbscript\s*:/i,
  /<\s*iframe/i,
  /<\s*object/i,
  /&#x[0-9a-f]{2};/i,  // hex-encoded HTML entities used in XSS

  // Local / Remote file inclusion
  /\/(etc\/passwd|etc\/shadow|proc\/self\/environ)/i,
  /\bfile\s*=\s*https?:\/\//i,
  /\bfile\s*=\s*php:\/\//i,

  // Command injection
  /[;|`]\s*(ls|cat|id|whoami|uname|wget|curl|bash|sh|python|perl)/i,
  /\$\s*\(.*\)|\$\{.*\}/,     // $() and ${} shell substitution

  // XXE
  /<!ENTITY\s/i,
  /SYSTEM\s+"(file|http|ftp):\/\//i,

  // SSTI (Server-Side Template Injection)
  /\{\{.*\}\}|\{%.*%\}|\$\{.*\}/,
];

// ─── 4. BLOCKED HTTP METHODS ──────────────────────────────────────────────────

const BLOCKED_METHODS = new Set([
  "TRACE",    // enables XST (Cross-Site Tracing) cookie theft
  "TRACK",    // Microsoft variant of TRACE
  "CONNECT",  // proxy tunneling
  "DEBUG",    // IIS-specific, used in exploits
]);

// ─── HELPER ───────────────────────────────────────────────────────────────────

function isSuspiciousUA(ua: string): boolean {
  // Completely empty or missing UA – no real browser omits this
  if (!ua || ua.trim().length < 5) return true;

  // Bare curl / wget without extra context (pentest scripts, not browsers)
  if (/^curl\/[0-9]/i.test(ua)) return true;
  if (/^wget\/[0-9]/i.test(ua)) return true;
  if (/^python\//i.test(ua)) return true;
  if (/^ruby\s/i.test(ua)) return true;

  return BLOCKED_UA_PATTERNS.some((p) => p.test(ua));
}

function hasAttackPayload(urlObj: URL): boolean {
  const target = decodeURIComponent(urlObj.pathname + "?" + urlObj.search);
  return ATTACK_PATTERNS.some((p) => p.test(target));
}

function isScannerPath(pathname: string): boolean {
  if (PROBE_PATHS.has(pathname)) return true;
  return PROBE_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

// ─── MAIN HANDLER ─────────────────────────────────────────────────────────────

export default async function handler(
  request: Request,
  context: Context
): Promise<Response> {
  const ua = request.headers.get("user-agent") ?? "";
  const url = new URL(request.url);
  const method = request.method.toUpperCase();

  // 1. Block dangerous HTTP methods
  if (BLOCKED_METHODS.has(method)) {
    return new Response("Method Not Allowed", { status: 405 });
  }

  // 2. Block scanner / pentest tool User-Agents
  if (isSuspiciousUA(ua)) {
    return new Response("Forbidden", { status: 403 });
  }

  // 3. Block probe paths (respond with 404 so scanners don't know we're watching)
  if (isScannerPath(url.pathname)) {
    return new Response("Not Found", { status: 404 });
  }

  // 4. Block requests containing attack payloads in the URL
  if (hasAttackPayload(url)) {
    return new Response("Bad Request", { status: 400 });
  }

  const response = await context.next();
  const headers = new Headers(response.headers);

  // 5. Strip headers that reveal the technology stack
  headers.delete("x-powered-by");
  headers.delete("via");
  headers.delete("x-aspnet-version");
  headers.delete("x-aspnetmvc-version");

  // Override server banner – nmap -sV and banner grabbers see nothing useful
  headers.set("server", "Web Server");

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export const config: Config = {
  path: "/*",
};
