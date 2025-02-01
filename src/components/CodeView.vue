<template>
  <pre>
    <code :class="`language-${language}`">{{ code }}</code>
  </pre>
</template>
<script setup lang="ts">
import { onMounted, watch } from "vue";
import Prism from "prismjs";

const props = defineProps<{
  code: string;
  language: string;
}>();

const highlight = () => {
  Prism.highlightAll();
};

onMounted(() => {
  highlight();
});
</script>
