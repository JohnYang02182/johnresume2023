<template>
{{ mdContent }}
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue"
import { getMarkdown } from "/@/methods/markdownAPI"
import { ENDPOINTS } from "/@/api/ENDPOINTS"
const currentAPI = ENDPOINTS.GITHUBREPOCMSTW;
const mdContent = ref("")
const getMdContent = async () => {
    try {
        const content = await getMarkdown(currentAPI)
        mdContent.value = content
        console.log("Fetched markdown content:", content)
    } catch (error) {
        console.error(`Failed to fetch markdown content from ${currentAPI}:`, error)
        throw error
    }
}

onMounted(() => {
    getMdContent()
})
</script> 