# Deployment Guide

This React + Vite + Tailwind portfolio is prepared for GitHub Pages and Hugging Face Static Spaces.

## Local Checks

Run these before deploying:

```bash
npm install
npm run dev
npm run build
npm run preview
```

## GitHub Repository Setup

```bash
git init
git add .
git commit -m "Initial portfolio deployment"
git branch -M main
git remote add origin https://github.com/kpatel1607/kunj-portfolio.git
git push -u origin main
```

## GitHub Pages With gh-pages

The `deploy` script builds with `GITHUB_PAGES=true`, so Vite emits assets under `/kunj-portfolio/`.

```bash
npm run deploy
```

Then configure GitHub Pages:

- Open repository Settings
- Open Pages
- Source: Deploy from branch
- Branch: `gh-pages`
- Folder: `/root`

## GitHub Pages With Actions

An optional workflow is available at `.github/workflows/deploy.yml`.

To use it, set GitHub Pages to deploy from GitHub Actions instead of the `gh-pages` branch. The workflow runs on pushes to `main`, installs dependencies, builds with `GITHUB_PAGES=true`, and deploys the `dist` folder.

Use either the `gh-pages` script or the GitHub Actions Pages source for the live site.

## Hugging Face Spaces

The Space should be created as a Static SDK Space. The repository must contain:

- `package.json`
- `vite.config.js`
- `src/`
- `public/`
- `README.md` with the Hugging Face YAML metadata

For Hugging Face Spaces, the normal Vite base path `/` is used.

### Option A: Push Directly To The Space

```bash
git lfs install
git remote add space https://huggingface.co/spaces/kp250440/kunj-portfolio
git push space main
```

### Option B: Upload Through The Hugging Face Web UI

- Create a new Space
- Choose Static SDK
- Upload the full source code
- Hugging Face will run `npm run build` and serve `dist/index.html`

## Static Asset Paths

Public assets live under:

- `public/resume.pdf`
- `public/animations/`
- `public/images/`
- `public/videos/`

Use the `asset()` helper from `src/utils/assets.js` for public assets referenced in React:

```js
asset('/resume.pdf')
asset('/animations/file-name.lottie')
asset('/images/file-name.png')
asset('/videos/file-name.mp4')
```

This keeps local development, Hugging Face Spaces, and GitHub Pages asset paths working from the same source.
