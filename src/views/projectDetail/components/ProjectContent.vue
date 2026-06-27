<template>
    <div>
        <!-- Metadata (frontmatter) -->
        <!-- <pre v-if="Object.keys(metadata).length">{{ JSON.stringify(metadata, null, 2) }}</pre> -->

        <!-- Rendered HTML content -->
         <div class="container-wrapper project-markdown">
            <div class="markdown-body" v-html="htmlContent" />
         </div>
    </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue"
import { useI18n } from "vue-i18n"
import { renderMarkdown } from "/@/methods/markdownRenderer"
import { parseFrontmatter } from "/@/methods/parseFrontmatter"
import { getMarkdown } from "/@/methods/markdownAPI"
import { ENDPOINTS } from "/@/api/ENDPOINTS"

const props = defineProps<{ slug?: string }>()

const { locale } = useI18n()
const htmlContent = ref("")

const getMdContent = async () => {
    const currentAPI = ENDPOINTS.CMSGITHUBMD(
        locale.value as 'en' | 'ja' | 'zh-TW',
        props.slug
    )
    try {
        const raw = await getMarkdown(currentAPI)
        const { content } = parseFrontmatter(raw)
        htmlContent.value = renderMarkdown(content)
    } catch (error) {
        console.error(`Failed to fetch markdown content from ${currentAPI}:`, error)
    }
}

watch([locale, () => props.slug], getMdContent, { immediate: true })
</script>
<style lang="scss" scoped>
@import "../../../style/workH_detail.scss";
</style>
