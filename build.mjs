// Zero-dependency static site builder: renders src/content.mjs into dist/.
//   node build.mjs
import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { langs, shared } from './src/content.mjs';

const OUT = 'dist';
const hasPhoto = existsSync('public/assets/photo.jpg');
const buildDate = new Date().toISOString().slice(0, 10);

// Fonts are self-hosted (public/fonts); preload the two used above the fold.
const FONT_PRELOAD = ['jetbrains-mono-latin-700-normal', 'inter-latin-400-normal']
  .map((f) => `<link rel="preload" href="/fonts/${f}.woff2" as="font" type="font/woff2" crossorigin>`)
  .join('\n    ');

// Fills {name}, {nie}, {postal}, {email}, {phone}, {iae} in legal texts.
const fill = (s) => String(s).replace(/\{(\w+)\}/g, (m, k) => (k in shared ? shared[k] : m));

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function render(code) {
  const t = langs[code];
  const url = shared.domain + t.path;
  const alternates = Object.values(langs)
    .map((l) => `<link rel="alternate" hreflang="${l.htmlLang}" href="${shared.domain}${l.path}">`)
    .join('\n    ');

  const langSwitch = Object.entries(langs)
    .map(([c, l]) =>
      c === code
        ? `<span class="lang-cur" aria-current="page">${l.label}</span>`
        : `<a href="${l.path}" hreflang="${l.htmlLang}" lang="${l.htmlLang}">${l.label}</a>`,
    )
    .join('<span class="sep">/</span>');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${shared.name} — Backend development`,
    url,
    email: shared.email,
    telephone: shared.phone,
    areaServed: ['ES', 'EU'],
    address: { '@type': 'PostalAddress', addressLocality: 'Valencia', addressCountry: 'ES' },
    founder: {
      '@type': 'Person',
      name: shared.name,
      jobTitle: 'Senior .NET Backend Engineer',
      sameAs: shared.profiles.map((p) => p.url),
    },
    knowsLanguage: ['en', 'es', 'ru'],
  };

  const n = t.nav;
  return `<!doctype html>
<html lang="${t.htmlLang}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${esc(t.title)}</title>
    <meta name="description" content="${esc(t.description)}">
    <link rel="canonical" href="${url}">
    ${alternates}
    <link rel="alternate" hreflang="x-default" href="${shared.domain}/">
    <meta property="og:type" content="website">
    <meta property="og:title" content="${esc(t.title)}">
    <meta property="og:description" content="${esc(t.description)}">
    <meta property="og:url" content="${url}">
    <meta property="og:locale" content="${t.ogLocale}">
    ${hasPhoto ? `<meta property="og:image" content="${shared.domain}/assets/photo.jpg">` : ''}
    <meta name="theme-color" content="#0b0f0e">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    ${FONT_PRELOAD}
    <link rel="stylesheet" href="/style.css?v=${buildDate}">
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="top">
    <div class="wrap top-in">
        <a class="logo" href="${t.path}"><span class="prompt">~/</span>zhadko</a>
        <nav class="nav" aria-label="Main">
            <a href="#about">${n.about}</a>
            <a href="#services">${n.services}</a>
            <a href="#experience">${n.experience}</a>
            <a href="#projects">${n.projects}</a>
            <a href="#contact">${n.contact}</a>
        </nav>
        <div class="langs">${langSwitch}</div>
    </div>
</header>

<main id="main">
<section class="hero wrap">
    <div class="hero-text">
        <p class="kicker">${esc(t.hero.kicker)}</p>
        <h1>${esc(t.hero.title)}</h1>
        <p class="lead">${esc(t.hero.lead)}</p>
        <div class="cta">
            <a class="btn btn-primary" href="#contact">${esc(t.hero.ctaPrimary)}</a>
            <a class="btn" href="#services">${esc(t.hero.ctaSecondary)}</a>
        </div>
    </div>
    <div class="term" aria-hidden="true">
        <div class="term-bar"><i></i><i></i><i></i><span>grigory@valencia: ~</span></div>
        <pre class="term-body"><code><span class="p">$</span> ${esc(t.hero.cmdWhoami)}
<span class="o">${esc(t.hero.outWhoami)}</span>
<span class="p">$</span> ${esc(t.hero.cmdServices)}
<span class="o">${esc(t.hero.outServices)}</span>
<span class="p">$</span> ${esc(t.hero.cmdStatus)}
<span class="ok">● ${esc(t.hero.outStatus)}</span>
<span class="p">$</span> <span class="cursor">▍</span></code></pre>
    </div>
</section>

<section class="stats wrap" aria-label="Key numbers">
    ${t.stats.map(([v, l]) => `<div class="stat"><b>${esc(v)}</b><span>${esc(l)}</span></div>`).join('\n    ')}
</section>

<section id="about" class="wrap section">
    <h2><span class="hash">#</span> ${esc(t.about.title)}</h2>
    <div class="about">
        <div class="about-photo">
            ${
              hasPhoto
                ? `<img src="/assets/photo.jpg" alt="${esc(shared.name)}" width="320" height="320" loading="lazy">`
                : `<div class="initials" aria-hidden="true">GZ</div>`
            }
        </div>
        <div class="about-text">
            ${t.about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join('\n            ')}
            <dl class="facts">
                ${t.about.facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('\n                ')}
            </dl>
        </div>
    </div>
</section>

<section id="services" class="wrap section">
    <h2><span class="hash">#</span> ${esc(t.services.title)}</h2>
    <p class="section-intro">${esc(t.services.intro)}</p>
    <div class="cards">
        ${t.services.items
          .map(
            (s, i) => `<article class="card">
            <span class="card-num">0${i + 1}</span>
            <h3>${esc(s.title)}</h3>
            <p>${esc(s.text)}</p>
        </article>`,
          )
          .join('\n        ')}
    </div>
    <h3 class="sub">${esc(t.services.processTitle)}</h3>
    <ol class="process">
        ${t.services.process.map(([h, p]) => `<li><b>${esc(h)}</b><span>${esc(p)}</span></li>`).join('\n        ')}
    </ol>
</section>

<section id="stack" class="wrap section">
    <h2><span class="hash">#</span> ${esc(t.stack.title)}</h2>
    <div class="stack">
        ${shared.stack.map((row) => `<ul>${row.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>`).join('\n        ')}
    </div>
</section>

<section id="experience" class="wrap section">
    <h2><span class="hash">#</span> ${esc(t.experience.title)}</h2>
    <ol class="timeline">
        ${shared.experience
          .map((e) => {
            const [role, text] = t.experience.items[e.id];
            return `<li>
            <div class="tl-when">${esc(e.period)}</div>
            <div class="tl-what">
                <h3>${esc(e.company)} <span class="tl-place">${e.place}</span></h3>
                <p class="tl-role">${esc(role)}</p>
                <p>${esc(text)}</p>
            </div>
        </li>`;
          })
          .join('\n        ')}
    </ol>
</section>

<section id="projects" class="wrap section">
    <h2><span class="hash">#</span> ${esc(t.projects.title)}</h2>
    <div class="cards projects">
        ${shared.projects
          .map(
            (p) => `<article class="card project">
            <h3>${esc(p.title)}</h3>
            <p>${esc(t.projects.items[p.id])}</p>
            <ul class="tags">${p.tags.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
            ${p.links.map((l) => `<a class="link" href="${l.url}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join(' ')}
        </article>`,
          )
          .join('\n        ')}
    </div>
</section>

<section id="contact" class="wrap section">
    <h2><span class="hash">#</span> ${esc(t.contact.title)}</h2>
    <p class="section-intro">${esc(t.contact.text)}</p>
    <div class="contact">
        <a class="contact-row" href="mailto:${shared.email}"><span>${esc(t.contact.email)}</span><b>${shared.email}</b></a>
        <a class="contact-row" href="${shared.whatsapp}" target="_blank" rel="noopener"><span>${esc(t.contact.whatsapp)}</span><b>${shared.phone}</b></a>
        <a class="contact-row" href="${shared.telegram}" target="_blank" rel="noopener"><span>${esc(t.contact.telegram)}</span><b>${shared.telegramHandle}</b></a>
        <a class="contact-row" href="${shared.phoneHref}"><span>${esc(t.contact.phone)}</span><b>${shared.phone}</b></a>
    </div>
    <h3 class="sub">${esc(t.profiles.title)}</h3>
    <div class="profiles">
        ${shared.profiles
          .map((p) => `<a href="${p.url}" target="_blank" rel="noopener me"><span class="prompt">&gt;</span> ${p.label} <span class="arr">↗</span></a>`)
          .join('\n        ')}
    </div>
    <p class="where">${esc(t.contact.location)}</p>
</section>
</main>

<footer class="foot wrap">
    <span>© ${new Date().getFullYear()} ${esc(t.footer)} · <a class="foot-link" href="${t.legal.path}">${esc(t.legal.link)}</a></span>
    <div class="langs">${langSwitch}</div>
</footer>
<script src="/main.js?v=${buildDate}" defer></script>
</body>
</html>
`;
}

function renderLegal(code) {
  const t = langs[code];
  const L = t.legal;
  const url = shared.domain + L.path;
  const alternates = Object.values(langs)
    .map((l) => `<link rel="alternate" hreflang="${l.htmlLang}" href="${shared.domain}${l.legal.path}">`)
    .join('\n    ');
  const langSwitch = Object.entries(langs)
    .map(([c, l]) =>
      c === code
        ? `<span class="lang-cur" aria-current="page">${l.label}</span>`
        : `<a href="${l.legal.path}" hreflang="${l.htmlLang}" lang="${l.htmlLang}">${l.label}</a>`,
    )
    .join('<span class="sep">/</span>');

  return `<!doctype html>
<html lang="${t.htmlLang}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${esc(L.title)} — ${esc(shared.name)}</title>
    <meta name="description" content="${esc(L.title)}: ${esc(shared.name)}, ${esc(shared.postal)}.">
    <link rel="canonical" href="${url}">
    ${alternates}
    <meta name="theme-color" content="#0b0f0e">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    ${FONT_PRELOAD}
    <link rel="stylesheet" href="/style.css?v=${buildDate}">
</head>
<body>
<header class="top">
    <div class="wrap top-in">
        <a class="logo" href="${t.path}"><span class="prompt">~/</span>zhadko</a>
        <div class="langs">${langSwitch}</div>
    </div>
</header>
<main id="main" class="wrap section legal">
    <p><a class="link" href="${t.path}">${esc(L.back)}</a></p>
    <h1>${esc(L.title)}</h1>
    <h2><span class="hash">#</span> ${esc(L.idTitle)}</h2>
    <dl class="facts legal-id">
        ${L.id.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(fill(v))}</dd></div>`).join('\n        ')}
    </dl>
    ${L.sections
      .map(
        ([h, ps]) => `<h2><span class="hash">#</span> ${esc(h)}</h2>
    ${ps.map((p) => `<p>${esc(fill(p))}</p>`).join('\n    ')}`,
      )
      .join('\n    ')}
    <p class="legal-updated">${esc(L.updated)} ${buildDate}</p>
</main>
<footer class="foot wrap">
    <span>© ${new Date().getFullYear()} ${esc(t.footer)}</span>
    <div class="langs">${langSwitch}</div>
</footer>
</body>
</html>
`;
}

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
cpSync('public', OUT, { recursive: true });

for (const [code, l] of Object.entries(langs)) {
  const dir = join(OUT, l.path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), render(code));
  const legalDir = join(OUT, l.legal.path);
  mkdirSync(legalDir, { recursive: true });
  writeFileSync(join(legalDir, 'index.html'), renderLegal(code));
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${Object.values(langs)
  .map(
    (l) => `  <url>
    <loc>${shared.domain}${l.path}</loc>
    <lastmod>${buildDate}</lastmod>
${Object.values(langs)
  .map((a) => `    <xhtml:link rel="alternate" hreflang="${a.htmlLang}" href="${shared.domain}${a.path}"/>`)
  .join('\n')}
  </url>`,
  )
  .join('\n')}
</urlset>
`;
writeFileSync(join(OUT, 'sitemap.xml'), sitemap);
console.log(`Built ${Object.keys(langs).length} pages into ${OUT}/ (photo: ${hasPhoto ? 'yes' : 'no'})`);
