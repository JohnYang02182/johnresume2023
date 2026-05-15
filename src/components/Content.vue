<template>
    <div :class="['content', isCol ? 'col' : 'row']">
        <h2 class="main-title">{{ title }}</h2>
        <div v-if="isList" class="list-wrapper dot-style">
        <slot />
        </div>
        <div v-else class="content-text">
        <slot />
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    isCol: {
        type: Boolean,
        default: false
    },
    isList: {
        type: Boolean,
        default: false
    }
})
</script>