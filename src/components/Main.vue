<template>
  <layoutBase
    v-if="
      ($route.meta.layout === true || $route.meta.layoutInner === true) &&
      userStore.loading === false
    "
  />
  <layoutBlank
    v-else-if="
      ($route.meta.layout !== true || $route.meta.layoutInner !== true) &&
      userStore.loading === false
    "
  />
  <Loading v-else-if="userStore.loading === true" />
</template>
<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { useUserStore } from "../../store/user";
import Loading from "./Loading.vue";
const userStore = useUserStore();
const layoutBase = defineAsyncComponent(
  () => import("../layouts/layoutBase.vue")
);
const layoutBlank = defineAsyncComponent(
  () => import("../layouts/layoutBlank.vue")
);
</script>
