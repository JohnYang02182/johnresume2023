<template>
  <component :is="currentLayout" v-if="!userStore.loading" />
  <Loading v-else />
</template>
<script setup lang="ts">
import { useLayout } from "/@/composable/useLayout";
import { useUserStore } from "../../store/user";
import Loading from "./Loading.vue";
const userStore = useUserStore();
const { currentLayout } = useLayout();
</script>
