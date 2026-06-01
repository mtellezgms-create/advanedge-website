# Advanedge Website — Project Summary

**Last session:** June 1, 2026 (Sunday night)
**Status:** 100% deploy-ready. Deploying tonight, posting Tuesday June 2.

---

## What This Project Is

Personal consulting business website for **Marvin Tellez**, founder of Advanedge Consulting. Two service lines under one brand:

1. **Fintech Advisory** — community banks & credit unions, Abrigo/Sageworks specialist (the core business, 7 years running, referral-driven)
2. **Digital Growth** — done-for-you YouTube automation

Pure HTML/CSS/vanilla JS. Hosted on GitHub Pages, custom domain `advanedgeconsulting.com`.

- **Repo:** https://github.com/mtellezgms-create/advanedge-website
- **Local path:** C:\Users\mtell\advanedge-website
- **Branch:** main (pushes deploy automatically)

---

## Site Map (all pages built and live in repo)

| Page | Purpose |
|------|---------|
| `index.html` | Fintech Advisory homepage — 11 sections |
| `digital-growth.html` | YouTube Automation page + live channel portfolio |
| `blog/loan-origination-system-implementation.html` | SEO blog — LOS implementations |
| `blog/youtube-automation-why-you-need-a-vendor.html` | SEO blog — YT automation vendor |
| `privacy-policy.html` | Privacy policy |
| `legal-notice.html` | Legal notice / disclaimer |
| `sitemap.xml` + `robots.txt` | SEO infrastructure |

---

## Completed This Session

- **Pushed entire site to GitHub** (new public repo, gh CLI authenticated)
- **Calendly logo** — cropped + branded version uploaded to Marvin's Calendly account
- **Two SEO blog posts** — long-form, schema markup, OG tags, author boxes, CTAs
- **OG share images** — `og-fintech.png` + `og-digital-growth.png` (1200x630)
- **Removed logo watermark** from Digital Growth hero, matched dot pattern to homepage
- **Live channel portfolio** added to Digital Growth page — 5 real channels with stats:
  - Stoic Reflections (113 subs, 33K views), The Machine Whisperer (27 subs, 1.1K),
    Advanedge Consulting AI (15 subs, 1.6K), Biblical Wisdom Unearthed (6 subs, 738),
    Stoic Investor (launching). Network total: 36K+ views, 163+ subs.
- **Privacy Policy + Legal Notice pages** — built, all footer `#` links fixed across all 6 pages
- **Wired OG/Twitter meta tags** into all pages
- **LinkedIn content system** — full calendar June–Sept, weekly batch reminder (Sundays 8pm CST)
- **Week 1 LinkedIn posts** — 4 posts written, refined, approved (`LINKEDIN-POSTS.md`)
- **Week 1 LinkedIn images** — 4 branded graphics (`assets/images/linkedin/`)

---

## REMAINING — Deploy Tonight (Sunday June 1, 10:30pm CST)

### 1. Namecheap DNS
Domain List → advanedgeconsulting.com → Manage → Advanced DNS. Delete existing @ A records, then add:

| Type | Host | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | mtellezgms-create.github.io |

### 2. GitHub Pages
github.com/mtellezgms-create/advanedge-website/settings/pages
- Source: Deploy from branch → main → / (root) → Save
- Custom domain: advanedgeconsulting.com → Save
- Enforce HTTPS: checked (after DNS resolves)

DNS propagates overnight. Site live by Tuesday morning.

---

## REMAINING — Tuesday June 2 (Launch Day)

1. Verify site is live + HTTPS green
2. Post 4 LinkedIn posts on schedule (see below)

### LinkedIn Posting Schedule — Week 1

| Post | Date | Time CST | Image |
|------|------|----------|-------|
| Fintech launch | Jun 2 | 9:00am | post-tue-jun2-fintech.png |
| Digital Growth launch | Jun 2 | 5:00pm | post-tue-jun2-digital-growth.png |
| LOS article | Jun 4 | 9:00am | post-thu-jun4-fintech.png |
| YT vendor article | Jun 4 | 5:00pm | post-thu-jun4-digital-growth.png |

Schedule via LinkedIn native scheduler (clock icon in post composer). Copy from `LINKEDIN-POSTS.md`.
On the two blog-share posts, drop the article URL in the first comment after posting.

**Best-time research (this session):**
- Fintech audience (CIOs/CLOs/lending execs): Tue–Thu, 9–11am CST
- Digital Growth audience (entrepreneurs/investors): Tue–Thu, 5–6pm CST

---

## Future / Backlog

- **2026 Lending Modernization Playbook** — gated lead magnet PDF + landing page + email funnel (full spec in LAUNCH-CHECKLIST.md)
- July blog posts — reminder set for June 28: "AI in Lending" (fintech) + "How Faceless Channels Make Money" (digital growth)
- Google Business Profile
- Replace old blog links (2 cards on homepage still point to legacy site)
- Medium republishing (with canonical links)
- Reddit distribution (r/fintech, r/banking, r/passive_income)

---

## Key Reference Files in Repo

- `LINKEDIN-POSTS.md` — all post copy + full content calendar + tone guide
- `LAUNCH-CHECKLIST.md` — deploy steps, DNS, playbook spec
- `SESSION-SUMMARY.md` — this file
- `CLAUDE.md` — project context for Claude sessions

---

## Active Reminders

- **Sundays 8pm CST** — weekly LinkedIn batch (recurring; note: cron jobs are session-only and expire after 7 days — re-create if needed)
- **June 28 9am** — write July blog posts

---

## Hardcoded Values (site-wide)

- Calendly: https://calendly.com/marvin-advanedge/call
- Email: info@advanedgeconsulting.com
- LinkedIn: https://www.linkedin.com/in/mtellez2/
- Company: Advanedge LLC, 3400 Waterview Pkwy, Richardson TX 75080
- Digital Growth pricing: Launch $2,997 / Scale $3,997mo / Authority $6,997mo
- Credibility: 26 yrs fintech, 10 yrs Abrigo/Sageworks, 7 yrs running Advanedge
