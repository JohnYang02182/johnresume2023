<template>
  <div class="section">
    <h2 class="section-title error-page-title">Page not found !</h2>
    <div class="button-wrapper">
      <button class="button-content" @click="redirectToHome()">back</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
  const redirectToHome = () => {
    router.push({ path: '/' })
  }
</script>
<style lang="scss" scoped>
.error-page-title {
  margin: auto;
  color: var(--text_primary);
}
.button-wrapper {
  display: block;
  margin: 240px auto;
  .button-content {
    color: var(--gradient_100);
    padding: 4px 12px;
    border: 1px solid var(--primary);
    border-radius: 8px;
    overflow: hidden;
  }
  .button-content-text {
    font-size: var(--font_body_medium);
    color: var(--gradient_100);
  }
}
</style>