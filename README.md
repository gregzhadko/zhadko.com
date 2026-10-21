[![main](https://github.com/gregzhadko/zhadko.com/actions/workflows/main.yml/badge.svg)](https://github.com/gregzhadko/zhadko.com/actions/workflows/main.yml)

# zhadko.com

Personal business-card site of Grigory Zhadko, freelance .NET backend engineer in Valencia.
Static, no backend, three languages:

| URL | Language |
|---|---|
| https://zhadko.com/ | English |
| https://zhadko.com/es/ | Español |
| https://zhadko.com/ru/ | Русский |

## Structure

```
src/content.mjs     all texts (en / es / ru) and shared data: contacts, experience, projects
build.mjs           zero-dependency renderer: content -> dist/{,es/,ru/}index.html + sitemap.xml
preview.mjs         local preview server for dist/ (used by npm start)
public/             static files copied as is (css, js, favicon, robots, 404, assets/photo.jpg)
Dockerfile          node renders the pages, nginx serves them
nginx.conf          nginx config inside the container
deploy/             files for the server (docker compose + host nginx snippet)
```

## Run locally

Needs only Node.js 18+ (no `npm install`):

```bash
cd ~/Repo/zhadko.com
npm start
```

Open http://localhost:8080 — Spanish at http://localhost:8080/es/, Russian at http://localhost:8080/ru/.
Stop with `Ctrl+C`. After editing texts, stop and run `npm start` again.

Another port: `PORT=3000 npm start`.

## Editing

- Texts: `src/content.mjs`. Every language has the same keys; change all three.
- **TODO photo:** the current photo (from LinkedIn, 500×500, uploaded rotated) is cropped too tight — the chin is cut. Replace it with a better square original.
- Photo: put a square JPEG at `public/assets/photo.jpg` (≈ 600×600). Without it the page shows "GZ" initials.

## Deploy

Push to `main` → GitHub Actions builds `gregzhadko/zhadko-site:latest` and pushes it to Docker Hub →
watchtower on the server pulls it within a minute. One-time setup is in [DEPLOY.md](DEPLOY.md).
