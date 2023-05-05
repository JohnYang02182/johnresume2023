<template>
  <div class="inner-content-wrapper">
    <section class="inner-content-header">
      <div class="inner-col header-wrapper">
        <div class="inner-right-col btn-wrapper">
          <a href="javascript:void(0)" @click="$router.push('/')" class="btn-back">
            {{ $t('CommonActivity.BackTo') }}
          </a>
        </div>
      </div>
      <div class="info-wrapper">
        <div class="title-wrapper">
          <p class="info-title">{{ $t('CommonTitle.Title') }}:
          </p>
          <h3 class="info-title-items">從 ChatGPT 上尋求慰藉吧</h3>
        </div>
        <ul class="list-wrapper">
          <li class="list">
            <p class="list-title">{{ $t('CommonTitle.Period') }}：</p>
            <span class="list-content">202304</span>
          </li>
          <li class="list">
            <p class="list-title">{{ $t('CommonTitle.Team') }}：</p>
            <span class="list-content">自己</span>
          </li>
          <li class="list">
            <p class="list-title">{{ $t('CommonTitle.Character') }}:</p>
            <span class="list-content">front-end developer</span>
          </li>
          <li class="list">
            <p class="list-title">{{ $t('CommonTitle.SkillList') }}:</p>
            <div class="skill-group">
              <span class="skill-tag">Vue 3</span>
              <span class="skill-tag">HTML5</span>
              <span class="skill-tag">SCSS</span>
              <span class="skill-tag">JavaScript</span>
              <span class="skill-tag">TypeScript</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="inner-content-main">
      <PortfolioRecord v-if="$route.params.id === '1'"  />
    </section>
  </div>
</template>
<script setup lang="ts">
import PortfolioRecord from './compoenets/PortfolioRecord.vue';
import router from '/@/router';
</script>
<style lang="scss" scoped>
.skill-group {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.skill-tag {
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid var(--text_primary);
}
.btn-back {
  font-size: var(--font_title);
}
.info-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: auto;
  max-width: 1280px;
  width: 75%;
  .list-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 2;
    gap: 4px;
  }
  .list {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .info-title, .list-title {
    font-size: 14px;
    color: var(--text_primary);
  }
  .list-content {
    font-size: 18px;
    color: var(--text_secondary);
  }
  .title-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .info-title-items {
    font-size: 32px;
    color: var(--text_secondary);
  }
}

.inner-content-wrapper {
  position: relative;
  width: 100dvw;
  height: 100dvh;
  background-color: #fff;
  color: var(--text_secondary);
  .inner-content-header {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%;
    max-width: 1440px;
  }
  .inner-col {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: 1fr;
    gap: 16px;
    padding: 16px;
  }
  .inner-left-col {
    grid-area: 1 / 1 / 1 / 3;
  }
  .inner-middle-col {
    grid-area: 1 / 3 / 1 / 8;
  }
  .inner-right-col {
    grid-area: 1 / 8 / 1 / 10;
  }
  .btn-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .btn-back {
    padding: 2px 12px;
    font-size: 16px;
    color: var(--text_primary);
    border: 1px solid var(--text_primary);
    border-radius: 8px;
    &:hover {
      color: var(--text_secondary);
      border: 1px solid var(--text_secondary);
    }
  }
}
</style>