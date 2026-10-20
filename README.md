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
public/             static files copied as is (css, js, favicon, robots, 404, assets/photo.jpg)
Dockerfile          node renders the pages, nginx serves them
nginx.conf          nginx config inside the container
deploy/             files for the server (docker compose + host nginx snippet)
```

## Local preview

```bash
node build.mjs
npx serve dist        # or: python3 -m http.server -d dist 8080
```

## Editing

- Texts: `src/content.mjs`. Every language has the same keys; change all three.
- Photo: put a square JPEG at `public/assets/photo.jpg` (≈ 600×600). Without it the page shows "GZ" initials.

## Deploy

Push to `main` → GitHub Actions builds `gregzhadko/zhadko-site:latest` and pushes it to Docker Hub →
watchtower on the server pulls it within a minute. One-time setup is in [DEPLOY.md](DEPLOY.md).
