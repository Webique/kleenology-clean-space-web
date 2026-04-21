/**
 * Custom pre-render script for /cleaning-riyadh
 * Runs after react-snap to ensure this high-priority page is pre-rendered.
 */
import puppeteer from '../node_modules/puppeteer/index.js';
import { createServer } from 'http';
import { createReadStream, existsSync, mkdirSync, writeFileSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const distDir = join(__dirname, '..', 'dist');

const MIME = {
  '.html': 'text/html',
  '.js':   'application/javascript',
  '.css':  'text/css',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.svg':  'image/svg+xml',
  '.json': 'application/json',
  '.woff2': 'font/woff2',
};

function startServer(port) {
  return new Promise(resolve => {
    const server = createServer((req, res) => {
      let filePath = join(distDir, req.url === '/' ? 'index.html' : req.url);
      if (!existsSync(filePath)) filePath = join(distDir, '200.html');
      if (!existsSync(filePath)) filePath = join(distDir, 'index.html');
      const ext = extname(filePath);
      res.setHeader('Content-Type', MIME[ext] || 'text/plain');
      createReadStream(filePath).pipe(res);
    });
    server.listen(port, () => resolve(server));
  });
}

async function prerenderRoute(route, port) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });
  try {
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on('request', req => {
      const url = req.url();
      if (['image', 'font', 'media'].includes(req.resourceType()) && !url.startsWith('http://localhost')) {
        req.abort();
      } else {
        req.continue();
      }
    });

    await page.goto(`http://localhost:${port}${route}`, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    await new Promise(r => setTimeout(r, 2000));

    const html = await page.content();

    const routeDir = join(distDir, route.slice(1));
    mkdirSync(routeDir, { recursive: true });
    writeFileSync(join(routeDir, 'index.html'), html, 'utf8');
    console.log(`✅  pre-rendered ${route}`);
  } finally {
    await browser.close();
  }
}

const PORT = 45678;
const server = await startServer(PORT);
try {
  await prerenderRoute('/cleaning-riyadh', PORT);
} catch (err) {
  console.error('❌  failed to pre-render /cleaning-riyadh:', err.message);
} finally {
  server.close();
}
