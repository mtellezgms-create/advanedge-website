# Advanedge Consulting Website

The official website for **Advanedge Consulting** — the trusted Abrigo advisor for community banks and credit unions.

**Live site:** [advanedgeconsulting.com](https://advanedgeconsulting.com)

## Tech Stack

Pure HTML, CSS, and vanilla JavaScript. No frameworks. Google Fonts only.

## File Structure

```
index.html          # Main site (single page)
css/styles.css      # All styles
js/main.js          # Scroll animations, nav, mobile menu
assets/images/      # Downloaded brand assets
CNAME               # Custom domain for GitHub Pages
.nojekyll           # Disables Jekyll processing on GitHub Pages
```

## Local Preview

Open `index.html` in any browser, or run a simple server:

```bash
npx serve .
# or
python -m http.server 8080
```

## Deployment

Hosted on GitHub Pages with the custom domain `advanedgeconsulting.com`.

To enable GitHub Pages:
1. Go to the repository → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / **root**
4. Save — the site will be live within a few minutes

## DNS (Namecheap)

Add these records in your Namecheap DNS dashboard:

| Type  | Host | Value                    |
|-------|------|--------------------------|
| A     | @    | 185.199.108.153          |
| A     | @    | 185.199.109.153          |
| A     | @    | 185.199.110.153          |
| A     | @    | 185.199.111.153          |
| CNAME | www  | advanedge-website.github.io |

## Brand Assets

All images sourced from the live Advanedge Consulting site and stored in `assets/images/`:

| File | Type | Used In |
|------|------|---------|
| `logo-advanedge.png` | **Brand logo** | Nav + Footer |
| `logo-abrigo.jpeg` | **Partner logo** | Ecosystem section |
| `logo-jackhenry.png` | **Partner logo** | Ecosystem section |
| `logo-finastra.jpeg` | **Partner logo** | Ecosystem section |
| `logo-bankpoint.jpeg` | **Partner logo** | Ecosystem section |
| `logo-encapture.png` | **Partner logo** | Ecosystem section |
| `logo-verticaliq.png` | **Partner logo** | Ecosystem section |
| `logo-portx.png` | **Partner logo** | Ecosystem section |
| `logo-centurybank.png` | Partner logo | Available |
| `headshot-john-brichetto.png` | **Headshot** | Testimonials |
| `headshot-michael-bryan.png` | **Headshot** | Testimonials |
| `headshot-tom-heruska.png` | **Headshot** | Testimonials |
| `banner-tailored-strategies.png` | Banner image | Available |
