# Advanedge Consulting Website — Project Context

> Auto-loaded by Claude Code at the start of every session. Read this first.

## Project

Personal consulting business website for **Marvin Tellez**, founder of Advanedge Consulting. Two service lines under one brand:

1. **Fintech Advisory** — community banks and credit unions, Abrigo/Sageworks specialist practice
2. **Digital Growth** — done-for-you YouTube automation

**Tone:** Executive, premium, trustworthy. Operator-level credibility. Not salesy.
**Location:** Dallas–Fort Worth. Support offered nationwide.

## Strategic Positioning (Path B — current direction)

- Homepage headline stays broad: *"Fintech Advisory for Community Banks & Credit Unions"*
- Aggressive Abrigo/Sageworks signaling throughout — specialist subpages, footer, callouts
- **Productized Modernization Assessment** is the primary conversion offer, not a cold "book a call"
- Funnel: visitor → Assessment page → discovery call → engagement

## Tech Stack

- Pure HTML, CSS, vanilla JS — **no frameworks, no build step**
- Hosted on **GitHub Pages**, custom CNAME `advanedgeconsulting.com`
- Branch: `main`. Pushes deploy automatically (1–2 min propagation).
- Repo: https://github.com/mtellezgms-create/advanedge-website

## Design System

### Colors

```css
--navy:  #0A1628;   /* Primary background, headers, hero */
--gold:  #C9A84C;   /* Accent, CTAs, emphasis */
--white: #FFFFFF;
--ink:   #1a2438;   /* Body text */
--paper: #FAF8F4;   /* Soft section backgrounds */
--muted: #6b7280;   /* Secondary text */
--line:  rgba(10, 22, 40, 0.08);  /* Borders */
```

### Typography

- **Headlines:** Playfair Display (600 / 700) — serif, editorial
- **Body:** Source Sans Pro (300 / 400 / 600 / 700)
- **Digital Growth accent:** Space Grotesk (Digital Growth page only)
- Google Fonts only — no system font fallbacks needed

### Visual patterns

- Hero sections: navy background with gold accents and radial gradient highlights
- Fade-up scroll animation via Intersection Observer (`.fade-up` class)
- Sticky nav with scroll shadow + hamburger mobile menu (handled by `js/main.js`)
- Italic + gold styling for the emphasis word in headlines (`<em>Modernization</em>`)
- Section eyebrows: uppercase, letter-spacing 0.18em, gold, 0.78rem

## Site Structure

```
/
├── index.html                                       Fintech Advisory homepage
├── digital-growth.html                              YouTube Automation
├── services/
│   ├── abrigo-sageworks.html                        Specialist credential page
│   └── lending-modernization-assessment.html        Primary conversion offer
├── blog/
│   ├── loan-origination-system-implementation.html
│   └── youtube-automation-why-you-need-a-vendor.html
├── css/
│   ├── styles.css                                   Global styles
│   └── digital-growth.css                           Digital Growth + Space Grotesk
├── js/main.js                                       Nav, hamburger, scroll animations
├── assets/images/                                   All images
├── sitemap.xml
├── robots.txt
├── CNAME
└── .nojekyll                                        Disables Jekyll on GitHub Pages
```

## Conventions

### Creating new pages

- Match existing nav and footer from `index.html`
- Subpages in folders use `../` paths for nav links, images, CSS, JS
- All anchor links (`#services`, `#about`, etc.) on subpages reference `../index.html#section`
- Always include canonical, Open Graph, and Twitter Card meta tags
- Use the design system CSS variables — no inline hex codes

### Hardcoded values (used site-wide)

```
Calendly:  https://calendly.com/marvin-advanedge/call
Email:     info@advanedgeconsulting.com
LinkedIn:  https://www.linkedin.com/in/mtellez2/
Domain:    advanedgeconsulting.com
```

### Digital Growth pricing (do not improvise)

- **Launch:**    $2,997 one-time
- **Scale:**     $3,997 / month
- **Authority:** $6,997 / month

### Brand stats for credibility callouts

- **10+ years** inside the Abrigo / Sageworks ecosystem
- **$100B+** in lending operations transformed (including a single $85B institution)
- Based in Dallas–Fort Worth, serving institutions nationwide

## Working Preferences

- **Concise responses.** No lengthy preambles. Get to the work.
- **Show diffs before applying changes.** I want to see what changed.
- **Never push to GitHub without explicit confirmation.** Always.
- **Commit messages:** conventional commit style (`feat:`, `fix:`, `docs:`, `style:`)
- **No emojis** in code output, commit messages, or written content
- When creating files, write them complete — avoid TODO placeholders unless explicitly flagged
- If you're unsure about a creative decision, propose options rather than picking silently
- **LinkedIn post copy** goes in `LINKEDIN-POSTS.md` (append a new `## WEEK OF <date>` section, matching the existing format). **LinkedIn images** go in `assets/images/linkedin/`, named `post-{tue|thu}-{mon}{day}-{fintech|digital-growth}.png` to match existing files.

## Open Work Items

### High priority (pre-launch)

- [ ] Wire `og:image` meta tags into 4 existing pages: `index.html`, `digital-growth.html`, `blog/loan-origination-system-implementation.html`, `blog/youtube-automation-why-you-need-a-vendor.html`
- [ ] Update `index.html` hero — add secondary CTA "See the Modernization Assessment" → `services/lending-modernization-assessment.html`
- [ ] Update `index.html` footer Services column to feature new service pages
- [ ] Legal Notice page (content source: SharePoint *Advanedge Legal Notice.pdf*)
- [ ] Privacy Policy page — footer link currently points to `#`

### Future

- `/playbook` landing page — gated email capture for *2026 Lending Modernization Playbook* lead magnet (PDF asset doesn't exist yet)
- Google Business Profile (post-launch)
- July blog posts (reminder: June 28):
  - *AI in Lending: What Community Banks Are Actually Doing in 2026* (Fintech)
  - *How Faceless YouTube Channels Make Money* (Digital Growth)

## OG Image Assets (ready, awaiting wiring)

- `assets/images/og-fintech.png` (1200×630) — homepage + fintech blog posts
- `assets/images/og-digital-growth.png` (1200×630) — Digital Growth page + YouTube blog posts

## Recent Changes (May 2026)

- Created `services/abrigo-sageworks.html` — Abrigo/Sageworks specialist landing page with operator-level credentials
- Created `services/lending-modernization-assessment.html` — productized 4–8 week assessment offer with week-by-week timeline and tangible deliverables
- Updated footer Services column on service pages to feature the two new pages
