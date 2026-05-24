# Deployment Guide

## Recommended Free Option: Vercel

Vercel is the easiest choice for this Vite React portfolio.

1. Create a GitHub repository, for example `huzaifa-portfolio`.
2. Push this project to GitHub.
3. Go to `https://vercel.com`.
4. Sign in with GitHub.
5. Choose `Add New Project`.
6. Import your portfolio repository.
7. Use these settings:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
8. Click `Deploy`.

Your live Vercel URL is:

```text
https://huzaifa-altaf-portfolio.vercel.app
```

These SEO files should use the same live URL:

- `index.html`
- `public/robots.txt`
- `public/sitemap.xml`

Current live URL: `https://huzaifa-altaf-portfolio.vercel.app`

## Netlify Alternative

Use these settings:

- Build command: `npm run build`
- Publish directory: `dist`

Netlify also supports the `public/_headers` file already included in this project.

## GitHub Pages Alternative

GitHub Pages is free, but Vite projects need GitHub Actions or a deploy setup. Use Vercel or Netlify first because they are simpler for student portfolios.

## After Publishing

1. Open your live website and test it on mobile.
2. Submit `https://huzaifa-altaf-portfolio.vercel.app/sitemap.xml` in Google Search Console.
3. Add your live link to LinkedIn, GitHub profile, Fiverr, and resume.
4. Keep project titles, descriptions, and screenshots updated.
