<template>
  <div
    v-bind="$attrs"
    :class="[
      IsBanner ? 'banner-content-item' : '',
      { 'img-loading-wrapper img-loading-dark': isLoading }
    ]"
  >
    <img
      :class="[IsBanner ? 'banner-content-img' : '', { loaded: !isLoading }]"
      :src="getImageUrl(ImageUrl!)"
      @load="onImageLoad"
      alt="Banner"
    />
  </div>
  <!-- <div
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
  </div> -->
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { useImageLoader } from "../../util/lazyLoad";

const props = defineProps({
  ImageUrl: String,
  IsLight: Boolean,
  IsBanner: Boolean
});

const { observer, isLoading, loadImage } = useImageLoader({
  rootMargin: "100px"
});

const onImageLoad = () => {
  isLoading.value = false;
};

onMounted(() => {
  if (props.ImageUrl) {
    const img = document.querySelector(
      `[data-src="${props.ImageUrl}"]`
    ) as HTMLImageElement;
    if (img) {
      observer.observe(img);
    }
  }
});

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
.img-loading-wrapper {
  position: relative;
  overflow: hidden;
}

.loading-skeleton {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

img {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &.loaded {
    opacity: 1;
  }
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
