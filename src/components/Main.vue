
<template>
  <layoutBase v-if="$route.meta.layout === true || $route.meta.layoutInner === true" />
  <layoutBlank v-else-if="$route.meta.layout !== true || $route.meta.layoutInner !== true" />
</template>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const layoutBase = defineAsyncComponent(() => 
 import('../layouts/layoutBase.vue')
)
const layoutBlank = defineAsyncComponent(() => 
 import('../layouts/layoutBlank.vue')
)
</script>
