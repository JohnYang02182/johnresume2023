<template>
  <section class="section-body">
    <div class="banner-wrapper">
      <div class="banner-content-wrapper row">
        <LoadingImg
          :ImageUrl="DetailBanner"
          :IsLight="false"
          :IsBanner="true"
        />
        <p class="banner-content-title">Side Project</p>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import LoadingImg from "../../../components/LoadingImg.vue";
import { ref } from "vue";
const DetailBanner = ref("banner_sample.png");
</script>
