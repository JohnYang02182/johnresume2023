<template>
  <div class="section-body">
    <div class="banner-wrapper">
      <div class="banner-content">
        <img class="banner-content-item" src="/IMG/banner_sample.png" alt="">
      </div>
    </div>
    <div class="container-wrapper">
      <h2 class="section-main-title">背景</h2>
      <p class="content-text">舊版動畫播放網頁服務未更新時間過長，隨時間推移使用者在 2020 年末急速上漲 、以及過去的 UX 現在已有落差，在需求會議與UX部門的討論後，決定這次的改版。</p>
      <h2 class="section-main-title">參與人員</h2>
      <ul>
        <li>Project Manager * 1</li>
        <li>User Interface Designer * 1</li>
        <li>Back-end developer * 2</li>
      </ul>
      <h2 class="section-main-title">目的</h2>
      <ul>
        <li>使用者動線混亂，看不懂動畫播放先後順序。</li>
        <li>ＴＶ版與手機版的版型支援不完全。</li>
        <li>彈幕過多有抖動的情況發生。</li>
      </ul>
      <h2 class="section-main-title">執行專案</h2>
      <div class="headline_03">1. 確定目標</div>
      <p class="content-text">在設計頁面前先確認設計準則：</p>
      <ul>
        <li>
          <p>具備一致性：</p>
          <p>讓用戶不會因為巨大的風格差異而迷惘。</p>
        </li>
        <li>
          <p>資訊要清楚：</p>
          <p>讓使用者在做短的時間內能達到目的。</p>
        </li>
      </ul>
      <div class="content-wrapper">
        <h3 class="headline_03">2. 製作 User Flow</h3>
        <div class="content-img-wrapper">
          <img class="content-img-body" src="/IMG/anime_guideLine.png" alt="guideLine">
        </div>
        <p class="content-text">釐清整體服務動線，與頁面結構。繪製 User Flow 與 PM 進行流程優化。</p>
      </div>
      <div class="content-wrapper">

      </div>
      <div class="headline_03">3. 定義 UI Components ＆ Color themes</div>
      <div class="content-text">定義暗亮色的元件，並建立 UI library 增加繪製 Mockup 速度。</div>
      <div class="headline_03">4. 優化既有設計</div>
      <ul>
        <li>
          <p>動畫排列：</p>
          <p>將排列由左至右，增加動態互動效果引導使用者動線。</p>
        </li>
        <li>
          <p>新增週期表：</p>
          <p>將已一週為單位的動畫節目文字化，提供使用者更直接的資訊。</p>
        </li>
        <li>
          <p>元件一致化：</p>
          <p>將功能相似的元件進行分類，並在視覺上進行統一。</p>
        </li>
        <li>
          <p>動線優化：</p>
          <p>重新依據功能進行分類，簡化頁面複雜度。</p>
        </li>
      </ul>
      <div class="headline_03">5. 成果</div>
      <ul>
        <li>PV 超過原本預期的 800萬 至 900萬。</li>
        <li>半年內付費會員成長率從 4% 到 8%。</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
.section-body {
  position: relative;
  margin: 7.5vw 0;
}
.banner-wrapper {
  position: relative;
  width: 100%;
  background-color: #353855;
  .banner-content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7.5vw 0;
    min-height: 360px;
    height: 50vw;
    .banner-content-item {
      object-fit: contain;
      height: 100%;
      overflow: hidden;
    }
  }
}
.container-wrapper {
  position: relative;
  margin: 4vw auto;
  max-width: 1280px;
  width: 75%;
  .content-text {
    color: var(--text_primary);
  }
}
.content-img-wrapper {
  position: relative;
  display: block;
  width: 80%;
  .content-img-body {
    object-fit: contain;
    width: 100%;
  }
}
</style>