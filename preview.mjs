// Local preview of dist/ without any dependencies.
//   node build.mjs && node preview.mjs      (or simply: npm start)
// Then open http://localhost:8080
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const ROOT = 'dist';
const PORT = Number(process.env.PORT) || 8080;
const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
};

async function resolve(urlPath) {
  const safe = normalize(decodeURIComponent(urlPath)).replace(/^(\.\.[/\\])+/, '');
  let file = join(ROOT, safe);
  try {
    if ((await stat(file)).isDirectory()) {
      if (!urlPath.endsWith('/')) return { redirect: urlPath + '/' };
      file = join(file, 'index.html');
    }
    return { file, body: await readFile(file) };
  } catch {
    return null;
  }
}

createServer(async (req, res) => {
  const path = new URL(req.url, 'http://localhost').pathname;
  const hit = await resolve(path);
  if (hit?.redirect) {
    res.writeHead(301, { Location: hit.redirect }).end();
  } else if (hit) {
    res.writeHead(200, { 'Content-Type': TYPES[extname(hit.file)] || 'application/octet-stream' }).end(hit.body);
  } else {
    res.writeHead(404, { 'Content-Type': TYPES['.html'] }).end(await readFile(join(ROOT, '404.html')));
  }
  console.log(res.statusCode, path);
}).listen(PORT, () => {
  console.log(`Preview: http://localhost:${PORT}/  (es: /es/, ru: /ru/). Ctrl+C to stop.`);
});
