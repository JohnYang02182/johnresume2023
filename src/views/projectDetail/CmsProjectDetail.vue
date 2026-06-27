<template>
  <div class="inner-content-wrapper">
    <section class="inner-content-header">
      <div class="inner-col header-wrapper">
        <div class="inner-right-col btn-wrapper">
          <a
            href="javascript:void(0)"
            @click="$router.push('/project')"
            class="btn-back"
            alt="backToProject"
          >
            {{ $t("CommonActivity.BackTo") }}
          </a>
        </div>
      </div>

      <div class="info-wrapper" v-if="meta.title">
        <div class="title-wrapper">
          <p class="info-title">{{ $t("CommonTitle.Title") }}:</p>
          <h3 class="info-title-items">{{ meta.title }}</h3>
        </div>
        <ul class="list-wrapper">
          <li class="list" v-if="meta.period">
            <p class="list-title">{{ $t("CommonTitle.Period") }}:</p>
            <span class="list-content">{{ meta.period }}</span>
          </li>
          <li class="list" v-if="meta.team">
            <p class="list-title">{{ $t("CommonTitle.Team") }}:</p>
            <span class="list-content">{{ meta.team }}</span>
          </li>
          <li class="list" v-if="meta.character">
            <p class="list-title">{{ $t("CommonTitle.Character") }}:</p>
            <span class="list-content">{{ meta.character }}</span>
          </li>
          <li class="list" v-if="meta.tags?.length">
            <p class="list-title">{{ $t("CommonTitle.SkillList") }}:</p>
            <div class="skill-group">
              <span
                class="skill-tag"
                v-for="(tag, i) in meta.tags"
                :key="i"
              >{{ tag }}</span>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <div v-if="bodyLoading" class="cms-body-loading">Loading...</div>
    <div v-else class="container-wrapper project-markdown">
      <div class="markdown-body" v-html="htmlContent" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { getMarkdown } from "/@/methods/markdownAPI";
import { parseFrontmatter } from "/@/methods/parseFrontmatter";
import { renderMarkdown } from "/@/methods/markdownRenderer";
import { ENDPOINTS } from "/@/api/ENDPOINTS";

interface CmsMeta {
  title?: string
  period?: string
  team?: string
  character?: string
  tags?: string[]
  bannerImg?: string
}

const route = useRoute();
const { locale } = useI18n();
const slug = route.params.slug as string;

const meta = ref<CmsMeta>({});
const htmlContent = ref("");
const bodyLoading = ref(true);

async function loadContent() {
  bodyLoading.value = true;
  try {
    const path = ENDPOINTS.CMSGITHUBMD(locale.value as "en" | "ja" | "zh-TW", slug);
    const raw = await getMarkdown(path);
    const { data, content } = parseFrontmatter(raw);
    meta.value = data as CmsMeta;
    htmlContent.value = renderMarkdown(content);
  } catch (e) {
    console.error("Failed to load CMS project:", e);
  } finally {
    bodyLoading.value = false;
  }
}

watch(locale, loadContent, { immediate: true });
</script>
<style lang="scss" scoped>
@import "../../style/workH_detail.scss";
.cms-body-loading {
  padding: 24px 32px;
  color: var(--text_primary);
}
</style>
