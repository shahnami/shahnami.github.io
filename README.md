# nami.sh

Personal site for Nami Shah. Vite builds a static GitHub Pages site: the editorial portfolio, four project case studies, and a one-page ATS-friendly CV.

## Develop

```bash
npm install
npm run dev
```

Open http://127.0.0.1:5173/. The print CV is at `/cv/` and `/cv.html`. Until `public/data/github-contributions.json` exists, the hero calendar is labeled as illustrative.

## Checks

```bash
npm test
npm run build
npx playwright install chromium
npm run pdf
npm run pdf:verify
```

`npm run pdf` writes `dist/nami-shah-cv.pdf` and a dev copy in `public/`. The public copy is gitignored and regenerated in CI before deploy.

## Contributions

`scripts/generate-github-contributions.mjs` queries GitHub's GraphQL `contributionsCollection` during the Actions build and writes `public/data/github-contributions.json`. The token is only present in that job. If `github.token` cannot read the public calendar, set the repository secret `CONTRIBUTIONS_GH_TOKEN` to a fine-grained PAT with public read access. A failed fetch still deploys, and the page labels the sample calendar.

## Deploy

Pushes to `master` run `.github/workflows/deploy.yml` (`npm ci`, tests, contribution snapshot, build, PDF check, GitHub Pages). A daily schedule refreshes the calendar. `CNAME` is `nami.sh`.
