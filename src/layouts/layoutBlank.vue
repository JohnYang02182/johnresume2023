<template>
  <div class="tagPage-wrapper">
    <router-view />
  </div>
  <Footer />
</template>
<script setup lang="ts">
import Footer from '../components/Footer.vue'
</script>
<style lang="scss" scoped>
@import '../style/main_page.scss';
:deep(){
  @import '../style/main_page.scss';
}
.tagPage-wrapper {
  position: relative;
  width: calc(100dvw - (100dvw - 100%));
  background-color: var(--bg_primary);
}
</style>