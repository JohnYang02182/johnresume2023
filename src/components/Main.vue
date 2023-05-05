
<template>
  <layoutBase v-if="$route.meta.layout === true || $route.meta.layoutInner === true" />
  <layoutBlank v-else-if="$route.meta.layout !== true || $route.meta.layoutInner !== true" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import layoutBase from '../layouts/layoutBase.vue'
import layoutBlank from '../layouts/layoutBlank.vue';
</script>
<style lang="scss" scoped>
.read-the-docs {
  color: #888;
}
</style>
