# [GitHub] Commit 紀錄

:globe_with_meridians: **Language / 語言切換：** [日本語](./README.md) | [English](./README.en.md) | **繁體中文**

---

:bulb: 若想進一步了解 GitHub Actions，請點擊以下連結。

**[GitHub Actions 連結](https://github.com/JohnYang02182/johnresume2023/actions/workflows/deploy.yml)**


## :page_facing_up: Commit 規則

| 字串 | 用途 |
| -------- | -------- |
| feat     | 新增功能、方法或元件  |
| fix     | 修復 bug 或問題     |
| docs     | 修改文件     |
| style     | 修改程式碼格式（如使用程式碼美化工具）    |
| refactor     | 重構程式碼     |
| perf     | 提升效能     |
| test     | 更新測試程式碼     |
| build     | 修改專案結構（如 webpack、gulp、npm 等）     |
| ci     | 修改 package 指令或部署方式     |
| chore     | 修改輔助工具或日常流程     |
| revert     | 還原 Commit   |
| art     | 修改 assets 目錄下的資源     |

Commit 格式：

`[字串]: 描述本次操作的目的`

例如：`[ci]: Update the CNAME file to customize the workflow.`


## :gear: 工作流程

為了將 Vue3 專案部署至 GitHub Pages，參考 Vue3 官方網站的工作流程範本進行設定。

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

## :calendar: 開發時程

### 2023 年 6 月 22 日 — 首次部署至 GitHub

部署完成後出現錯誤。

錯誤訊息：
```
"Failed to load module script: Expected a JavaScript module script but the server responded
with a MIME type of 'video/mp2t'. Strict MIME type checking is enforced for module scripts
per HTML spec."
```

**原因：**

自訂的工作流程用於打包 Vue 專案，但部署過程中，預設工作流程將其覆蓋，導致專案還原至打包前的狀態。

![](https://hackmd.io/_uploads/S1KFI8qs3.png)

紅色方框標示的即為預設工作流程。

---

### 兩種解決方案：

**方案一：**

修改工作流程步驟，讓自訂工作流程在預設工作流程之後執行。

**方案二：**

將 GitHub Pages 的部署設定從「Deploy from 'main' branch」改為「GitHub Actions」，僅由自訂工作流程處理部署。

---

### 2023 年 7 月

* 調整 i18n 設定
* 設計作品集頁面
* 翻譯作品集內容
* 繪製作品集素材
* 製作動畫效果

---

**2023 年 7 月 1 日**
### 部署 Loading 頁面

同時部署了頁面讀取指示器與 lazy-load 功能。
Lazy-load 的實作使用 Vue3 的 `Suspense` 元件，在非同步元件處理完成前顯示 fallback 內容，使程式碼更為簡潔。

---

**2023 年 7 月 5 日**
### 暫停 OpenAI ChatGPT 整合功能

基於 OpenAI Access Key 的資安疑慮，不宜將其儲存於前端，因此暫停此功能。計畫在 Firebase 上建立 Node.js 後端環境並安全保存 Key 之後再繼續開發。

---

**2023 年 7 月 7 日**
### 修正 Header RWD

新增 Watcher 監聽視窗寬度變化，以正確處理響應式版面斷點。

### 新增作品集翻譯內容

新增日文與英文的作品集翻譯內容。

---

**2023 年 7 月 8 日 – 7 月 13 日**
### 全面修正作品集翻譯內容

為使日文與英文翻譯更加自然，在 ChatGPT、家教老師與語言交換夥伴的協助下共同改善內容。

### 補充缺少的素材

繪製橫幅等缺少的素材。

---

**2023 年 7 月 14 日 – 7 月 31 日**
### 完成最後一個作品頁面

整理在巴哈姆特商品部期間的網頁設計經驗，翻譯為日文與英文後部署頁面。

### 在首頁加入動態元素

使用 VueUse 讓元素隨滑鼠移動產生動態效果。

```javascript
<div class="banner_image">
  <img :style="{ 'transform': `translate(${ Math.abs((x-(windowWidth/2))/10) }px, ${-y/60}px)`}" src="/IMG/me_banner.png" alt="banner">
</div>
```

```javascript
import { useMouse } from '@vueuse/core'

const { x, y } = useMouse({ target: currentElement, touch: false })
```

### 從 Hash Mode 切換至 History Mode

透過切換路由模式移除網址中的 `#` 符號。

重新整理首頁以外的頁面時會出現 404 錯誤，原因是實際存在的檔案只有 `index.html`。

切換前做了以下兩項準備以避免此問題：

1. 部署自訂的 `404.html`。
2. 安裝 `vite-plugin-rewrite-all`。

如此一來，重新整理時會導向 `index.html`，不再觸發 404 錯誤。

---

**2023 年 8 月 1 日 – 8 月 5 日**
### 暫時回退至 Hash Mode

部署至 GitHub 後偶爾出現 404 錯誤，因此暫時切換回 Hash Mode。

---

**2023 年**
### 開發「命運扭蛋」功能

開發並部署「命運扭蛋」功能。在網路不穩定的環境下點擊卡片時，圖片載入時間較長。為解決此問題，重新檢視並修正了 lazy-load 邏輯。

---

**2024 年 3 月 10 日**
### 修正網路不良時圖片顯示不完整的問題

為解決網路不良時圖片呈現不完整的狀況，修改了處理順序以縮短扭蛋卡片的顯示等待時間。

原先的流程為點擊卡片後再透過 API 取得資料，調整後的順序如下：

使用者進入頁面 → （透過 API 取得扭蛋結果）→ 抽扭蛋（無需操作）→ 翻轉卡片（透過 API 取得下一筆扭蛋結果）→ 重複

此變更確保使用者點擊時卡片圖片已完整渲染，避免顯示不完整的問題。

---

**2024 年 3 月 19 日**
### 引入 Google Sheets API

過去新增多語系內容需要逐一手動輸入各 JSON 檔案，為簡化此流程，引入 Google Sheets API，透過 Google 試算表即可輕鬆管理多語系內容。

1. 設定 Google Sheets API
2. 將試算表資料轉換為 i18n 方法可讀取的 JSON 格式
3. 輸出轉換後的 JSON

參考文章：
- [Managing translations of an app, a web site… can be very painful.](https://morioh.com/a/4c5a331be380/manage-i18n-translations-from-google-sheet)
- [i18n什麼的交給前端來處理吧](https://ithelp.ithome.com.tw/articles/10262354?sc=iThelpR)
- [googleapis documents](https://www.npmjs.com/package/googleapis)

---

**2025 年 2 月 15 日**
### 更新 Blog 內容

為有效管理多個版型，改以環境變數設定版型參數，並在 CI 階段輸入對應指令來編譯特定版型。

---

**2026 年 5 月 14 日**

### 全面升級套件版本

將專案所有 dependencies 與 devDependencies 升級至最新版本。

主要升級項目：

| 套件 | 舊版 | 新版 |
|------|------|------|
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

調整說明：
- 移除 `eslint-config-airbnb`（未實際使用，且與 ESLint v10 不相容）
- 移除重複的 `@typescript-eslint/eslint-plugin` / `@typescript-eslint/parser`（已由 `@vue/eslint-config-typescript` 內含）
- 新增 `eslint: ^10.3.0` 作為 devDependency

---

### 建立 Unit Test 測試架構（Vitest）

導入 [Vitest](https://vitest.dev/) 建立測試環境，搭配 `@vue/test-utils` 與 `jsdom`。

測試涵蓋範圍（共 32 個測試）：

```
src/__tests__/
├── setup.ts                          # 全域設定（IntersectionObserver mock、i18n、pinia）
├── components/
│   └── AnimeDetail.test.ts           # AnimeDetail.vue 元件測試（10 項）
├── hooks/
│   └── useProtfolioCard.test.ts      # useProtfolioCard hook 測試（8 項）
├── store/
│   └── user.test.ts                  # Pinia user store 測試（8 項）
└── util/
    └── i18n.test.ts                  # i18n util 測試（6 項）
```

新增 npm 指令：

```bash
npm run test          # 互動式 watch 模式
npm run test:run      # 單次執行所有測試
npm run test:coverage # 產生覆蓋率報告
```

---

### 修正 `vite.config.ts` 與 SCSS 的 Bug

修正了以下 3 個問題：

1. **`manualChunks` 型別錯誤**：Rollup v4（Vite 8 內建）不再接受 Object，改為 Function 形式
2. **Sass `@import` 棄用警告**：在 `css.preprocessorOptions.scss` 加入 `silenceDeprecations` 抑制 Dart Sass 3.x 的棄用警告
3. **CSS 變數語法錯誤**：`src/style/workH_detail.scss` 第 277 行 `var(font_body_medium)` 缺少 `--` 前綴，導致 lightningcss minify 失敗

---

### 新增多語系 README

新增英文版（`README.en.md`）與繁體中文版（`README.zh-TW.md`），並在各語系頂部加入語言切換列。
