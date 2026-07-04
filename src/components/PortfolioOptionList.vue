<template>
  <ul class="option-list">
    <li
      v-for="option in options"
      :key="option.type"
      :class="{ active: activeType ? activeType === option.type : option.type === 'all' ? true : false }"
      @click="emit('select', option.type)"
    >
      {{ $t(option.labelKey) }}
    </li>
  </ul>
</template>
<script setup lang="ts">
import type { PortfolioListType } from "/@/hooks/usePortfolioCards"

interface OptionItem {
  type: PortfolioListType
  labelKey: string
}

defineProps<{
  activeType: PortfolioListType
}>()

const emit = defineEmits<{
  select: [type: PortfolioListType]
}>()

const options: OptionItem[] = [
  { type: "all", labelKey: "CommonTitle.All" },
  { type: "profolio", labelKey: "CommonTitle.Portfolio" },
  { type: "sideProject", labelKey: "CommonTitle.SideProject" }
]
</script>
