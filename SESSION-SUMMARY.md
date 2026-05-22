# Advanedge Website — Session Summary
**Date:** May 21–22, 2026  
**Repo:** https://github.com/mtellezgms-create/advanedge-website

---

## What Was Built

### Core Pages
| File | Description |
|------|-------------|
| `index.html` | Main fintech advisory homepage — 11 sections |
| `digital-growth.html` | Standalone YouTube automation subpage |
| `blog/loan-origination-system-implementation.html` | SEO blog post — LOS failures & best practices |
| `blog/youtube-automation-why-you-need-a-vendor.html` | SEO blog post — why entrepreneurs hire a vendor |

### Supporting Files
| File | Description |
|------|-------------|
| `css/styles.css` | Global styles — navy/gold design system |
| `css/digital-growth.css` | Digital Growth page styles + Space Grotesk |
| `js/main.js` | Scroll animations, nav, hamburger menu |
| `sitemap.xml` | All 5 pages for Google indexing |
| `robots.txt` | Search engine access + sitemap reference |
| `CNAME` | advanedgeconsulting.com |
| `.nojekyll` | Disables Jekyll on GitHub Pages |

### Assets
| File | Description |
|------|-------------|
| `assets/images/logo-advanedge.png` | Brand logo |
| `assets/images/logo-advanedge-calendly.png` | 500×500 cropped logo for Calendly |
| `assets/images/og-fintech.png` | 1200×630 OG share image — homepage |
| `assets/images/og-digital-growth.png` | 1200×630 OG share image — Digital Growth |
| `assets/images/headshot-marvin-tellez.jpg` | Founder photo |
| `assets/images/headshot-*.png` | 3 testimonial headshots |
| `assets/images/logo-*.png/jpeg` | 7 ecosystem partner logos |

---

## Design System
- **Colors:** Navy `#0A1628` · Gold `#C9A84C` · White `#FFFFFF`
- **Fonts:** Playfair Display (headlines) · Source Sans Pro (body) · Space Grotesk (Digital Growth)
- **Animations:** Intersection Observer fade-up · staggered hero load
- **Nav:** Sticky with scroll shadow · hamburger mobile menu

---

## Site Architecture

```
advanedgeconsulting.com          → index.html (Fintech Advisory)
advanedgeconsulting.com/digital-growth.html  → YouTube Automation
advanedgeconsulting.com/blog/loan-origination-system-implementation.html
advanedgeconsulting.com/blog/youtube-automation-why-you-need-a-vendor.html
```

---

## Key Decisions Made

### Positioning
- Broadened from Abrigo-only → fintech-first, Abrigo as flagship specialization
- Headline: *"Fintech Advisory for Community Banks & Credit Unions"*
- Why section: *"Strategic. Technical. And Fluent in Both Boardrooms and Banking Systems."*
- DFW-based, support offered nationwide (removed bilingual reference)

### Service Structure
- **Core:** Fintech consulting (Abrigo, LOS, core banking, AI-enabled lending)
- **Second branch:** Digital Growth — YouTube automation done-for-you
- Both under same Advanedge brand, linked via nav

### Pricing (Digital Growth)
| Tier | Price | Cadence |
|------|-------|---------|
| Launch | $2,997 | One-time |
| Scale | $3,997 | /month |
| Authority | $6,997 | /month |

---

## All CTAs Point To
- **Calendly:** https://calendly.com/marvin-advanedge/call ✅ confirmed live
- **Email:** info@advanedgeconsulting.com

---

## GitHub
- **Repo:** https://github.com/mtellezgms-create/advanedge-website
- **Branch:** main
- **GitHub Pages:** Enable at repo Settings → Pages → main branch
- **Custom domain:** advanedgeconsulting.com

---

## Monday Night Deploy Steps
1. **Namecheap DNS** — Advanced DNS → add records:

| Type | Host | Value |
|------|------|-------|
| A Record | @ | 185.199.108.153 |
| A Record | @ | 185.199.109.153 |
| A Record | @ | 185.199.110.153 |
| A Record | @ | 185.199.111.153 |
| CNAME | www | mtellezgms-create.github.io |

2. **GitHub Pages** — Settings → Pages → Branch: main → Custom domain: advanedgeconsulting.com
3. DNS propagates overnight → site live Tuesday morning

---

## Tuesday Launch Plan
| Time | Action |
|------|--------|
| 9am | Verify site live, HTTPS green, all links working |
| 10am | Post on LinkedIn (fintech angle, tag Abrigo + Jack Henry) |
| Wed | Share LOS blog on Reddit r/fintech + r/banking |
| Thu | Share YouTube blog on Reddit r/passive_income |
| Fri | Create Google Business Profile |

---

## Remaining To-Do (Next Session)
- [ ] Wire `og:image` meta tags into all 4 pages (critical for LinkedIn share card)
- [ ] Legal Notice page — content in SharePoint: *Advanedge Legal Notice.pdf*
- [ ] Policy page — footer link currently points to `#`
- [ ] Create Google Business Profile (post-launch)

---

## Blog Content Calendar
| Month | Fintech | Digital Growth |
|-------|---------|---------------|
| June | ✅ LOS Implementation | ✅ Why You Need a Vendor |
| July | AI in Lending: What Community Banks Are Actually Doing in 2026 | How Faceless YouTube Channels Make Money |
| August | Jack Henry + Abrigo Integration | How to Pick a Niche in 2026 |
| September | What to Ask Before Hiring a Fintech Consultant | What Does a Monetized Channel Actually Earn? |
| October | The Real ROI of Abrigo | YouTube vs. Blogging vs. Podcasting |
| November | Post-Implementation Regret | From Zero to 1,000 Subscribers |

> **Reminder set: June 28 at 9am** — write July blog posts

---

## Future Project: 2026 Lending Modernization Playbook
**Format:** 20–30 page premium PDF (Gartner/McKinsey aesthetic)  
**Strategy:** Free lead magnet gated behind email form → consulting funnel  
**Sections:** Banking Technology Shift · Hidden Abrigo Problems · 5-Pillar Framework · AI Use Cases · Executive Readiness Scorecard  
**Funnel:** Download → email sequence → discovery call  
**Future paid PDFs:** AI in Community Banking · Abrigo Optimization Blueprint · API-First Banking Architecture
