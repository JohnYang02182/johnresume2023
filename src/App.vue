<template>
  <div class="main-wrapper" v-motion
    :initial="{
      opacity: 0,
      y: -100,
    }"
    :enter="{
      opacity: 1,
      y: 0,
        transition: {
        duration: 500,
        ease: 'linear',
      },
    }">
    <Main />
  </div>
</template>

<script setup lang="ts">
import Main from './components/Main.vue'
import './style/reset.scss'
import './style/variety.scss'
</script>
<style lang="scss">
@import './style/basic.scss';
</style>

