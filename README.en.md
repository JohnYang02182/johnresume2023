# [GitHub] Commit History

:globe_with_meridians: **Language / 語言切換：** [日本語](./README.md) | **English** | [繁體中文](./README.zh-TW.md)

---

:bulb: If you want to learn more about GitHub Actions, click the link below.

**[GitHub Actions Link](https://github.com/JohnYang02182/johnresume2023/actions/workflows/deploy.yml)**


## :page_facing_up: Commit Rules

| String | Action |
| -------- | -------- |
| feat     | New the functions/methods/components.  |
| fix     | Fix the bugs or issues.     |
| docs     | Change the documents.     |
| style     | Change the format of the code (e.g., Use code beautifier or code formatter ).    |
| refactor     | Refactor the codes.     |
| perf     | Enhance the performance.     |
| test     | Update testing code.     |
| build     | Change the structure of the project (e.g., scopes: webpack, gulp, npm ...).     |
| ci     | Change the command in the package or way to deploy.     |
| chore     | Change the assistant tools or the routines.     |
| revert     | Undo the Commits.   |
| art     | Change the files located in 'assets'.     |

Commit rule format:

`[String]: Describe the purpose of the process.`

e.g. `[ci]: Update the CNAME file to customize the workflow.`


## :gear: Workflow

To deploy the Vue3 project to GitHub Pages, I used the workflow referred to on the Vue3 official website.

```yaml
# Simple workflow for deploying static content to GitHub Pages
name: Deploy static content to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ['main']

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets the GITHUB_TOKEN permissions to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow one concurrent deployment
concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  # Single deploy job since we're just deploying
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Set up Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v3
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v1
        with:
          # Upload dist repository
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
```

## :calendar: Development Timeline

### June 22, 2023 — First Deployment to GitHub

After deploying, an error occurred.

Error message:
```
"Failed to load module script: Expected a JavaScript module script but the server responded
with a MIME type of 'video/mp2t'. Strict MIME type checking is enforced for module scripts
per HTML spec."
```

**Cause:**

I had created a custom workflow to bundle Vue, but during deployment the default workflow overrode it and reverted the project to its pre-bundled state.

![](https://hackmd.io/_uploads/S1KFI8qs3.png)

The red rectangle highlights the default workflow.

---

### Two Solutions:

**Solution 1:**

Modified the workflow steps so that the custom workflow runs after the default workflow.

**Solution 2:**

Switched the GitHub Pages deployment setting from "Deploy from 'main' branch" to "GitHub Actions" so that only the custom workflow is processed.

---

### July 2023

* Adjust i18n settings
* Design the portfolio page
* Translate portfolio content
* Create portfolio assets
* Add animations

---

**July 1, 2023**
### Deploy the Loading Page

Added both a page loading indicator and lazy-load functionality simultaneously.
For lazy loading, Vue3's `Suspense` component is used to display fallback content while async components are loading, allowing for cleaner code.

---

**July 5, 2023**
### Temporarily Suspend ChatGPT Integration via OpenAI

Due to security concerns about storing the OpenAI Access Key on the frontend, this feature was put on hold. The plan is to build a backend environment with Node.js on Firebase to safely store the key before resuming development.

---

**July 7, 2023**
### Fix Header RWD

Added a watcher to monitor viewport width changes in order to properly handle responsive layout breakpoints.

### Add Translated Portfolio Content

Added Japanese and English translations for portfolio content.

---

**July 8 – July 13, 2023**
### Overhaul Portfolio Project Translations

To make the Japanese and English translations more natural, improvements were made with the help of ChatGPT, a tutor, and language exchange partners.

### Supplement Missing Assets

Drew missing assets such as banners.

---

**July 14 – July 31, 2023**
### Complete the Final Portfolio Page

Organized web design experience from the Bahamut product department era, translated it into Japanese and English, and deployed the page.

### Add Dynamic Elements to the Home Page

Used VueUse to make elements respond dynamically to mouse movement.

```javascript
<div class="banner_image">
  <img :style="{ 'transform': `translate(${ Math.abs((x-(windowWidth/2))/10) }px, ${-y/60}px)`}" src="/IMG/me_banner.png" alt="banner">
</div>
```

```javascript
import { useMouse } from '@vueuse/core'

const { x, y } = useMouse({ target: currentElement, touch: false })
```

### Switch from Hash Mode to History Mode

Removed the `#` symbol by switching from Hash Mode to History Mode.

When reloading any route other than the homepage, a 404 error would occur because only `index.html` exists as a physical file.

To avoid this, two preparations were made before the switch:

1. Deploy a custom `404.html`.
2. Install `vite-plugin-rewrite-all`.

This ensures that reloads are redirected to `index.html` without triggering a 404 error.

---

**August 1 – August 5, 2023**
### Temporarily Revert to Hash Mode

Occasional 404 errors appeared after deploying to GitHub, so the routing mode was temporarily switched back to Hash Mode.

---

**2023**
### Build the "Fortune Gacha" Feature

Developed and deployed a "Fortune Gacha" feature to GitHub. When a user clicks a card under unstable network conditions, images may take a long time to display. To fix this, the lazy-load logic was reviewed and refactored.

---

**March 10, 2024**
### Fix Images Rendering Incomplete Under Poor Network Conditions

To address images rendering in an incomplete state under poor network conditions, the processing order was changed to reduce the time before the fortune gacha cards appear.

Previously, clicking a card triggered an API request. The new order is:

User visits the page → (Fetch gacha result via API) → Pull the gacha (no interaction needed) → Flip the card (fetch next gacha result via API) → Repeat

This ensures the card images are fully rendered before the user clicks, preventing the incomplete image issue.

---

**March 19, 2024**
### Introduce Google Sheets API

Adding multilingual content used to require manually entering data into each individual JSON file. To streamline this, the Google Sheets API was introduced, allowing multilingual content to be managed easily via Google Sheets.

1. Set up Google Sheets API
2. Convert Sheets data into JSON format compatible with i18n methods
3. Output the converted JSON

References:
- [Managing translations of an app, a web site… can be very painful.](https://morioh.com/a/4c5a331be380/manage-i18n-translations-from-google-sheet)
- [i18n什麼的交給前端來處理吧](https://ithelp.ithome.com.tw/articles/10262354?sc=iThelpR)
- [googleapis documents](https://www.npmjs.com/package/googleapis)

---

**February 15, 2025**
### Update Blog Content

To efficiently manage multiple templates, environment variables were used to configure template parameters. At the CI stage, corresponding commands are passed in to compile a specific template.

---

**May 14, 2026**

### Upgrade All Package Versions

Upgraded all dependencies and devDependencies to the latest versions.

Key upgrades:

| Package | Old | New |
|---------|-----|-----|
| `vite` | ^5.1.6 | ^8.0.12 |
| `vue` | ^3.4.21 | ^3.5.34 |
| `pinia` | ^2.1.7 | ^3.0.4 |
| `vue-i18n` | ^9.10.2 | ^11.4.2 |
| `@vueuse/core` | ^10.9.0 | ^14.3.0 |
| `@intlify/unplugin-vue-i18n` | ^2.0.0 | ^11.2.0 |
| `openai` | ^3.2.1 | ^6.37.0 |
| `typescript` | ~5.4.2 | ~6.0.3 |
| `vue-tsc` | ^2.0.6 | ^3.2.9 |
| `@vitejs/plugin-vue` | ^4.6.2 | ^6.0.6 |

Notable changes:
- Removed `eslint-config-airbnb` (unused and incompatible with ESLint v10)
- Removed redundant `@typescript-eslint/eslint-plugin` / `@typescript-eslint/parser` (now bundled in `@vue/eslint-config-typescript`)
- Added `eslint: ^10.3.0` as a devDependency

---

### Set Up Unit Testing with Vitest

Introduced [Vitest](https://vitest.dev/) as the testing framework, paired with `@vue/test-utils` and `jsdom`.

Test coverage (32 tests total):

```
src/__tests__/
├── setup.ts                          # Global setup (IntersectionObserver mock, i18n, pinia)
├── components/
│   └── AnimeDetail.test.ts           # AnimeDetail.vue component tests (10)
├── hooks/
│   └── useProtfolioCard.test.ts      # useProtfolioCard hook tests (8)
├── store/
│   └── user.test.ts                  # Pinia user store tests (8)
└── util/
    └── i18n.test.ts                  # i18n util tests (6)
```

New npm scripts:

```bash
npm run test          # Interactive watch mode
npm run test:run      # Run all tests once
npm run test:coverage # Generate coverage report
```

---

### Fix Bugs in `vite.config.ts` and SCSS

Three issues were resolved:

1. **`manualChunks` type error**: Rollup v4 (bundled with Vite 8) no longer accepts an Object — changed to a Function
2. **Sass `@import` deprecation warnings**: Added `silenceDeprecations` to `css.preprocessorOptions.scss` to suppress Dart Sass 3.x warnings
3. **CSS variable syntax error**: `var(font_body_medium)` in `src/style/workH_detail.scss` (line 277) was missing the `--` prefix, causing a lightningcss minify failure

---

### Add Multilingual README

Added English (`README.en.md`) and Traditional Chinese (`README.zh-TW.md`) versions of the README, each with a language switcher at the top.
