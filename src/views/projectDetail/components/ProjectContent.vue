<template>
    <div>
        <!-- Metadata (frontmatter) -->
        <pre v-if="Object.keys(metadata).length">{{ JSON.stringify(metadata, null, 2) }}</pre>

        <!-- Rendered HTML content -->
        <div v-html="htmlContent" />
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue"
import { marked } from "marked"
import { parseFrontmatter } from "/@/methods/parseFrontmatter"
import DOMPurify from "dompurify"
import { getMarkdown } from "/@/methods/markdownAPI"
import { ENDPOINTS } from "/@/api/ENDPOINTS"

const currentAPI = ENDPOINTS.GITHUBREPOCMSTW;
const metadata = ref<Record<string, unknown>>({})
const htmlContent = ref("")

const getMdContent = async () => {
    const isError = ref(false)
    try {
        const raw = await getMarkdown(currentAPI)
        if(typeof raw === 'number') {
            isError.value = true
            console.log(`Failed to fetch markdown content from ${currentAPI}: Status code ${raw}`)
            return
        }
        // 1. 解析 frontmatter → metadata (JSON)
        const { data, content } = parseFrontmatter(raw)
        metadata.value = data

        // 2. 將 markdown content → HTML，並 sanitize
        const html = await marked(content)
        htmlContent.value = DOMPurify.sanitize(html)

        console.log("Metadata:", data)
        console.log("HTML:", htmlContent.value)
    } catch (error) {
        console.error(`Failed to fetch markdown content from ${currentAPI}:`, error)
    }
}

onMounted(() => {
    getMdContent()
})
</script> 