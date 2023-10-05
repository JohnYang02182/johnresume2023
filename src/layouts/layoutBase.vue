<template>
  <Header />
  <main>
    <router-view />
  </main>
  <Footer />
</template>
<script lang="ts" setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>
<style lang="scss" scoped>
@import '../style/main_page.scss';
:deep(){
  @import '../style/main_page.scss';
}
</style>