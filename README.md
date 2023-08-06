# [GitHub] コミットの記録

:::info
:bulb:　もしGitHub Actionsについて詳しく知りたい場合は、以下のリンクをクリックしてください。

**[GitHub Actions Link](https://github.com/JohnYang02182/johnresume2023/actions/workflows/deploy.yml)**

:::

## :page_facing_up: コミットルール

| String | Action |
| -------- | -------- |
| feat     | New the functions / methods / components.  |
| fix     | Fix the bugs or issues.     |
| docs     | Change the documents.     |
| style     | Change the format of the code (e.g. Use code beautifier or code formatter ).    |
| refactor     | Refactor the codes.     |
| perf     | Enhance the performance.     |
| test     | Update testing code.     |
| build     | Change the structure of the project (e.g. scopes: webpack, gulp, npm ...).     |
| ci     | Change the command in the package or way to deploy.     |
| chore     | Change the assistant tools or the routines.     |
| revert     |  Undo the Commits   |
| art     | Change the files which located in 'assets'.     

:::info 
コミットルールについて：

[String]: Describe the purpose of the process.

e.g. [ci]: Update the CNAME file to customize the workflow.

:::




## :gear: ワークフロー

To deploy Vue3 project to GitHub page. I used the workplace refered to the Vue3 official website.

```lang=yal
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

## :calendar: 開発の日程 

### ６月22日から初めて GitHub にデプロイした。



デプロイした後、エーラが出った。

エラーコード：
:::danger
"Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "video/mp2t". Strict MIME type checking is enforced for module scripts per HTML spec."
:::

原因：

私は Vueをバンドルするために、自分で新しいワークフローを作ったが、デプロイの過程で、デフォルトのワークフローがカスタマイズされたワークフローを上書きして、プログラムをバンドルする前の状態に戻ってしまった。

![](https://hackmd.io/_uploads/S1KFI8qs3.png)

赤い四角に囲まれたのはデフォルトのワークフローです。

------------------

### 解決策が二つある：


一つ目：

ワークフローの手順を変更し、カスタマイズされたワークフローをデフォルトのワークフローの後に実行するようにした。

二つ目：

カスタマイズされたワークフローのみを処理するために、GitHub Pageのデプロイ設定を「Deploy from 'main' branch」から「GitHub Actions」に切り替えった。

------------------

### 7月

* i18nを調整する
* 作品集ページをデザインする
* 作品集の内容を翻訳する
* ポートフォリオの素材を描く
* アニメションを作る

---------

**7月1日**
### Loading pageをデプロイする

説明：

ページの読み込み時間だけでなく、lazy-load機能も一緒にデプロイしました。
lazy-loadの実装について、Vue3のSuspendというコンポーネントを使用して、非同期コンポーネントの処理が終了するまでフォールバックコンテンツを表示するようになる。これにより、コードをより簡潔に書くことができる。

---------

**7月5日**
### OpenAIでChatGPTを再現することを暫く取り消す

説明：

Open AI Access Keyについて、資料の安全性に関する懸念があるため、フロントエンドでAccess Keyを保存することは危険だと判断した。そのため、FirebaseにNode.jsでバックエンド環境を構築し、Access Keyを安全に保存する仕組みを完成させるまで、一時的にChatGPTの再現を中止することにした。

---------

**7月7日**
### headerのRWDを修正する

RWDを修正するために、モニターの幅の判断が不可欠だと考えした。そして、モニターの幅の変化を監視するために、ウォッチャーを追加した。

### 作品集の翻訳内容を追加する

日本語と英語の翻訳内容を追加した。

--------

**7月８日〜7月13日**

### 作品集のプロジェクトの翻訳内容を一気に修正する

日本語と英語の翻訳内容をより自然なものにするために、ChatGPTだけでなく、チューターや言語交換の相手にも協力をお願いし、一緒に内容を改善した。

### 不足の素材を補足する

バナーなど不足の素材を描いていた。

-----

**7月14日〜7月31日**

### 最後の作品ページを完成した

バハムート商品部時期のウェブデザイン経験を整理し、日本語と英語を翻訳するとぺージをデプロイした。

### Home page に動的要素を取り入れる

VueUseでマウスの動きにあわせて動的要素を取り入れるようにした。


```javascript=
<div class="banner_image">
	<img :style="{ 'transform': `translate(${ Math.abs((x-(windowWidth/2))/10) }px, ${-y/60}px)`}" src="/IMG/me_banner.png" alt="banner">
</div>
```

```javascript=
import { useMouse } from '@vueuse/core'

const { x, y } = useMouse(taget: currentElement, touch: false)
```

### Hash Mode から History Mode に変換した

"＃"を取り除くために、Hash ModeからHistory Modeに切り替えた。

アプリケーションのルートはホームページ以外、リロードを行うと 404 エラーになってしまう。

これは、index.html のみが実体として存在しているだけなので、アクセス先が無い状態だ。

この状況を避けるために、変換した前に準備をしておいた。

１。カスタマイズされた 404.html をデポロイする。

２。”vite-plugin-rewrite-all”をインストールする。

こうするとリロードすると index.html に流れるように 404 エラーが発生しなくなった。

-----

**8月1日 ~ 8月5日**

### 暫く Hash Mode に戻った

GitHubにデプロイすると時折 404 エラーが現れたので、暫くモードを Hash Mode に戻させた。



