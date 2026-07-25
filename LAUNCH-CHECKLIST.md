# Advanedge Website — Launch Checklist & Session Summary
**Session Date:** May 21, 2026  
**Deploy Target:** Monday night → Tuesday morning LinkedIn post

---

## ✅ Completed This Session

### Site Pages
- `index.html` — Main fintech advisory homepage (11 sections)
- `digital-growth.html` — Standalone YouTube automation subpage
- `blog/loan-origination-system-implementation.html` — SEO blog post #1
- `blog/youtube-automation-why-you-need-a-vendor.html` — SEO blog post #2

### Assets
- `assets/images/logo-advanedge-calendly.png` — 500×500 cropped logo for Calendly
- `assets/images/og-fintech.png` — 1200×630 Open Graph share image (homepage)
- `assets/images/og-digital-growth.png` — 1200×630 Open Graph share image (Digital Growth)

### SEO / Technical
- `sitemap.xml` — All 5 pages indexed ✅
- `robots.txt` — Search engine access + sitemap reference ✅

### GitHub
- Repo: https://github.com/mtellezgms-create/advanedge-website
- Branch: main
- All files pushed ✅

### Calendly
- Logo updated to branded Advanedge globe icon ✅
- Link confirmed live: calendly.com/marvin-advanedge/call ✅

---

## 🔲 Still To Do Before Monday Deploy

### High Priority (30 min of work)
1. **Wire og:image meta tags** into all pages:
   - `index.html` → `og-fintech.png`
   - `digital-growth.html` → `og-digital-growth.png`
   - Both blog posts → appropriate og:image
   - Without this LinkedIn share card will show no image

2. **Legal Notice page** (`legal-notice.html`)
   - Content is in SharePoint: Advanedge Legal Notice.pdf
   - Company: Advanedge LLC, 3400 Waterview Pkwy Suite, Richardson TX 75080
   - Last updated: June 19, 2025
   - Footer "Legal Notice" link currently points to `#`

3. **Page for site policies** (`privacy-policy.html`)
   - Footer "Privacy Policy" link currently points to `#`
   - Needs to be created

### Monday Night Deploy Steps
1. Log into Namecheap → Advanced DNS → add the 4 A records + 1 CNAME (see below)
2. Log into GitHub → repo Settings → Pages → set branch: main → add custom domain: advanedgeconsulting.com
3. Wait overnight for DNS propagation

### Namecheap DNS Records
| Type | Host | Value |
|------|------|-------|
| A Record | @ | 185.199.108.153 |
| A Record | @ | 185.199.109.153 |
| A Record | @ | 185.199.110.153 |
| A Record | @ | 185.199.111.153 |
| CNAME | www | mtellezgms-create.github.io |

---

## 📅 Tuesday Launch Plan
- **9am** — Verify site is live, HTTPS green, all links work
- **10am** — Post on LinkedIn (fintech angle, tag Abrigo + Jack Henry)
- **Wed** — Post LOS blog to Reddit r/fintech and r/banking
- **Thu** — Post YouTube blog to Reddit r/passive_income
- **Fri** — Set up Google Business Profile

---

## 📅 Blog Content Calendar
| Month | Fintech Post | Digital Growth Post |
|-------|-------------|-------------------|
| June | ✅ LOS Implementation (live) | ✅ Why You Need a Vendor (live) |
| July | AI in Lending: What Community Banks Are Actually Doing in 2026 | How Faceless YouTube Channels Make Money (The 5 Revenue Streams) |
| August | Jack Henry + Abrigo Integration | How to Pick a Niche for Your YouTube Channel |
| September | What to Ask Before Hiring a Fintech Consultant | What Does a Monetized Channel Actually Earn? |
| October | The Real ROI of Abrigo | YouTube vs. Blogging vs. Podcasting |
| November | Post-Implementation Regret | From Zero to 1,000 Subscribers |

**Reminder set: June 28 at 9am** — write July posts

---

## 📘 Playbook / Lead Magnet (Future Project)

**Asset:** "The 2026 Lending Modernization Playbook"
*How Community Banks & Credit Unions Modernize Abrigo/Sageworks, AI Workflows, and Lending Operations Without Replacing Their Core*

### Strategy
- Use as a **free lead magnet** (not paid) — email + title required to download
- Builds the consulting funnel: PDF → email sequence → discovery call
- Designed to look like Gartner/McKinsey — not SMB marketing

### Recommended Structure (20–30 pages)
1. The Banking Technology Shift (urgency)
2. Hidden Problems Inside Most Abrigo Environments (establishes authority)
3. What High-Performing Institutions Do Differently
4. The 5-Pillar Modernization Framework (signature IP)
   - Pillar 1: Workflow Optimization
   - Pillar 2: AI Enablement
   - Pillar 3: Integration Modernization
   - Pillar 4: Operational Governance
   - Pillar 5: Executive Visibility & Analytics
5. AI Use Cases Banks Can Deploy Today
6. Executive Readiness Scorecard (15–20 questions, score-based maturity model)
7. CTA: Schedule a Lending Modernization Assessment

### Website Funnel
- Homepage CTA: "Download the 2026 Lending Modernization Playbook"
- Gate with: Name / Institution / Email / Title
- Follow-up: automated email sequence → consultation funnel

### Future PDF Ideas (could sell or gate)
- "AI in Community Banking" — governance + deployment guide
- "Abrigo Optimization Blueprint" — highly niche, high conversion
- "The Executive Guide to Lending Automation"
- "API-First Banking Architecture" — CIO-focused
- "The Future of Agentic AI in Lending" — thought leadership

### What We Need to Build This
- [ ] Full PDF outline + page-by-page copy
- [ ] Diagrams: maturity models, architecture visuals, AI workflow graphics
- [ ] Cover design (navy/gold, enterprise aesthetic)
- [ ] Landing page on site with email gate
- [ ] Email follow-up sequence (3–5 emails)
- [ ] LinkedIn lead funnel copy

---

## 📋 Modernization Roadmap Delivery (Assessment Clients)

**Asset:** The final deliverable of the Lending Modernization Assessment (4–8 weeks) — a board-ready roadmap, per `services/lending-modernization-assessment.html`.

### ⚠️ Security note (read before using)
GitHub Pages sites are publicly reachable even from a private repo — only GitHub Enterprise Cloud supports a truly private Pages site. A client-side password screen (like `playbook-resources.html`'s) does **not** protect anything from someone who views page source or finds the URL; it's a courtesy gate, not real security. Confirmed via GitHub's own docs, July 2026. Because of this, the two deliverables are **not** mirrors of each other — real findings live only in the PDF, delivered through a channel with actual access control.

### Format
Two pieces per client, different content, different delivery channel:
1. **PDF report** — the confidential deliverable. Findings, gap register, LOS recommendations, integration architecture, AI readiness scores, investment figures. Matches the Executive Brief design system (navy/gold, Lora/Lato). Deliver via a **OneDrive password-protected link** (Share → Anyone with the link → Settings → Set Password — Microsoft 365 feature) or as a direct email attachment. Never post this content on the public website.
2. **Private web page** — a lightweight, non-sensitive companion at `clients/[client-slug]-roadmap.html`, `noindex`, password-gated for courtesy/privacy (not real security). Contains only the 12–24 month roadmap phase checklist so the client can check off initiatives over time — no findings, no dollar figures, no scores. Modeled on `playbook-resources.html`'s lock-screen pattern, reskinned in the site's navy/gold Fintech Advisory palette.

### Master Templates
- PDF: build from the structure in `advanedge-modernization-roadmap-TEMPLATE.pdf` (in the Advanedge project folder, not the repo — regenerate per client, don't reuse the PDF file itself)
- Web page: `clients/_TEMPLATE-roadmap.html` — **never link this from nav or edit it directly for a real client.** Copy it to a new file first.

### PDF Sections (confidential — PDF only)
1. Executive Summary
2. Workflow Gap & Opportunity Register
3. LOS Optimization Recommendations
4. Integration Architecture — current vs. target state
5. AI Readiness Scorecard results (scored live during discovery, not the generic Playbook scorecard)
6. The Roadmap — 12–24 month sequenced plan across 4 phases (Foundation / Integration / Enablement / Visibility & Scale)
7. Investment & Effort Estimates
8. Next Step — 90-minute executive walkthrough scheduling

### Web Page Sections (non-sensitive — safe to publish)
1. The Roadmap checklist only — phase names, high-level initiative names, owner role. No figures, no findings, no scores.

### How to Instantiate for a New Client
- [ ] Build the PDF from the roadmap content, filling in every `[bracketed]` placeholder with real Assessment findings
- [ ] Share the PDF via a OneDrive password-protected link (or direct attachment) — set a unique password per client, share it by phone or a separate channel from the link itself, not in the same email
- [ ] Copy `clients/_TEMPLATE-roadmap.html` → `clients/[client-slug]-roadmap.html`
- [ ] Fill in only the phase/initiative names (keep them generic — no numbers, no specific findings)
- [ ] Set a unique page password in the `PASS` constant (different from the OneDrive password)
- [ ] Update the `<title>` and lock-screen copy with the real institution name
- [ ] Log the client, delivery date, and where each password lives somewhere durable (e.g., the outreach tracker) so nothing gets lost

---

## 📌 Where to Post on Launch
| Platform | Content |
|----------|---------|
| LinkedIn | Homepage launch post + LOS blog |
| Twitter/X | Fintech thread from blog |
| Reddit r/fintech | LOS blog post |
| Reddit r/banking | LOS blog post |
| Reddit r/passive_income | YouTube automation blog |
| Reddit r/YoutubeAutomation | YouTube automation blog |
| Medium | Republish both blogs (add canonical links) |
| Google Business Profile | Create listing for Advanedge |

---

## 🔑 Key Info
- **GitHub repo:** https://github.com/mtellezgms-create/advanedge-website
- **Calendly:** https://calendly.com/marvin-advanedge/call
- **Email:** info@advanedgeconsulting.com
- **LinkedIn:** https://www.linkedin.com/in/mtellez2/
- **Local project path:** C:\Users\mtell\advanedge-website
