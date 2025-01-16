<template>
  <div
    v-if="!IsBanner"
    v-bind="$attrs"
    :class="{ 'img-loading-wrapper img-loading-dark': isImgLoading }"
  >
    <img :src="getImageUrl(ImageUrl!)" @load="onImage" alt="Banner" />
  </div>
  <div
    v-else-if="IsBanner"
    class="banner-content-item"
    :class="{ 'img-loading-wrapper img-loading-dark': isImgLoading }"
  >
    <img
      class="banner-content-img"
      :src="getImageUrl(ImageUrl!)"
      @load="onImage"
      alt="theContentOfImg"
    />
  </div>
</template>
<script lang="ts" setup>
/// <reference types="vite/client" />
import { ref } from "vue";
const props = defineProps({
  ImageUrl: String,
  IsLight: Boolean,
  IsBanner: Boolean
});

const isImgLoading = ref(true);
const onImage = () => {
  isImgLoading.value = false;
};
const getImageUrl = (url: string) => {
  let urlNow = `../assets/images/${url}`;
  let currentUrl = import.meta.glob<{ default: string }>("../assets/images/*", {
    eager: true
  });
  let mod = currentUrl[urlNow] as { default: string };
  return mod.default;
};
</script>
<style lang="scss" scoped>
@import "../style/banner.scss";
</style>
