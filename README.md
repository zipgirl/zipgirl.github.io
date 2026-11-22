# ZipGirl

A personal digital universe: engineering portfolio, project archive, weekly journal and curated resource shelf.

**Live site:** https://zipgirl.github.io

## Stack
- Astro static site generation
- GitHub Pages hosting
- GitHub Actions deployment
- Markdown blog content with Astro content collections
- Pages CMS visual editor
- Custom CSS and lightweight browser JavaScript

## Local development
```bash
npm install
npm run dev
```

Build locally with `npm run build`.

## Publishing
Edit articles in [Pages CMS](https://app.pagescms.org/) after authorizing access to this repository. New or updated Markdown files committed to `main` trigger the GitHub Pages deployment workflow.

Blog posts live in `src/content/blog/`. Categories are `a girl`, `tech`, and `media`.

## Deployment
In GitHub repository Settings → Pages, select **GitHub Actions** as the build and deployment source. The workflow is `.github/workflows/deploy.yml`.

## Security
The repository is intentionally public so GitHub Pages can serve the site. Public visibility does not grant visitors write access. Keep write/admin access restricted to the owner, enable 2FA, and configure branch rules in repository Settings.