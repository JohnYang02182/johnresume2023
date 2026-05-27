<template>
    <div>
        <!-- Metadata (frontmatter) -->
        <pre v-if="Object.keys(metadata).length">{{ JSON.stringify(metadata, null, 2) }}</pre>

        <!-- Rendered HTML content -->
         <div class="container-wrapper">
            <div v-html="htmlContent" />
         </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue"
import { renderMarkdown } from "/@/methods/markdownRenderer"
import { parseFrontmatter } from "/@/methods/parseFrontmatter"
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
        // 解析 frontmatter → metadata (JSON) + markdown content
        const { data, content } = parseFrontmatter(raw)
        metadata.value = data
        htmlContent.value = renderMarkdown(content)
    } catch (error) {
        console.error(`Failed to fetch markdown content from ${currentAPI}:`, error)
    }
}

onMounted(() => {
    getMdContent()
})
</script> 