<template>
<div class="loading-wrapper">
  <div class="loading-container">
    <div class="loading-line" v-for="(item,index) in 5" :key="index" />
  </div>
</div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
@keyframes loadingFullAnime {
  0% {
    max-height: .75vw;
    background: linear-gradient(45deg, var(--secondary) 0%, var(--primary) 100%);
  }
  100% {
    max-height: 8vw;
    background: linear-gradient(45deg, var(--tertiary) 0%, var(--primary) 100%);
  }
}
@for $i from 1 through 5 {
  .loading-line:nth-child(#{$i}){
    animation-delay: $i*150ms;
  }
}
.loading-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  background-color: var(--bg-primary);
  overflow: hidden;
  z-index: 999;
}
.loading-container {
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 1vw;
  .loading-line {
    max-height: .75vw;
    height: 100%;
    width: .75vw;
    border-radius: 120px;
    background: linear-gradient(45deg, var(--secondary) 0%, var(--primary) 100%);
    transition: all 3s linear;
    transform-origin: bottom center;
    transition: max-height;
    animation-name: loadingFullAnime;
    animation-duration: 400ms;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
  }
}
</style>