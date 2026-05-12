import type { Config, Context } from "@netlify/edge-functions";

// User-Agents used by network scanners and vulnerability assessment tools
const BLOCKED_UA_PATTERNS = [
  /nmap/i,
  /nmap\s*scripting\s*engine/i,
  /masscan/i,
  /zgrab/i,
  /nikto/i,
  /sqlmap/i,
  /nessus/i,
  /openvas/i,
  /w3af/i,
  /dirbuster/i,
  /gobuster/i,
  /feroxbuster/i,
  /nuclei/i,
  /hydra/i,
  /metasploit/i,
  /acunetix/i,
  /qualys/i,
  /netsparker/i,
  /appscan/i,
  /webinspect/i,
  /whatweb/i,
  /wapiti/i,
  /skipfish/i,
  /arachni/i,
  /wfuzz/i,
  /zap\//i,           // OWASP ZAP
  /python-requests\/[0-9]/i,
  /go-http-client\//i,
  /libwww-perl/i,
  /curl\/[0-9].*scanner/i,
];

// Paths that nmap NSE scripts probe looking for vulnerabilities
const SCANNER_PROBE_PATHS = [
  "/HNAP1",
  "/sdk/info",
  "/evox/about",
  "/SDK/Info",
  "/.git/HEAD",
  "/.git/config",
  "/.env",
  "/.env.local",
  "/.env.production",
  "/wp-login.php",
  "/wp-admin",
  "/phpmyadmin",
  "/phpinfo.php",
  "/server-status",
  "/server-info",
  "/_profiler",
  "/actuator",
  "/actuator/health",
  "/manager/html",
  "/admin/config.php",
  "/config.php",
  "/setup.php",
  "/install.php",
];

// HTTP methods scanners use that a static site never needs
const BLOCKED_METHODS = new Set(["TRACE", "TRACK", "OPTIONS", "CONNECT"]);

export default async function handler(
  request: Request,
  context: Context
): Promise<Response> {
  const ua = request.headers.get("user-agent") ?? "";
  const url = new URL(request.url);
  const method = request.method.toUpperCase();

  // Block scanner User-Agents
  if (BLOCKED_UA_PATTERNS.some((p) => p.test(ua))) {
    return new Response("Forbidden", { status: 403 });
  }

  // Block dangerous HTTP methods
  if (BLOCKED_METHODS.has(method)) {
    return new Response("Method Not Allowed", { status: 405 });
  }

  // Block nmap NSE probe paths with 404 (avoids fingerprinting via 403)
  if (SCANNER_PROBE_PATHS.includes(url.pathname)) {
    return new Response("Not Found", { status: 404 });
  }

  const response = await context.next();
  const headers = new Headers(response.headers);

  // Remove headers that reveal server technology stack
  headers.delete("x-powered-by");
  headers.delete("via");

  // Override server banner so nmap -sV cannot fingerprint the platform
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
