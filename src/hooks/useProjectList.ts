import { computed, onMounted, ref, watch } from "vue"
import { useI18n } from "vue-i18n"
import type { CardInfoDetail } from "/@/interface/CardInfoDetail"
import type { ProjectListItem, ProjectListResponse } from "/@/api/interface/GitHubAPI"
import { ENDPOINTS } from "/@/api/ENDPOINTS"
import { designCardInfo } from "/@/setting/profolioCard"
import { getStaticProjectId } from "/@/hooks/usePortfolioCards"
import type { PortfolioListType } from "/@/hooks/usePortfolioCards"

export type ProjectCardItem = CardInfoDetail | ProjectListItem

export function useProjectList() {
  const { locale, t } = useI18n()
  const page = ref(1)
  const totalPages = ref(1)
  const loading = ref(false)
  const error = ref("")
  const listType = ref<PortfolioListType>("all")
  const allProjectItems = ref<ProjectCardItem[]>([])
  const projectItems = computed(() => {
    if (listType.value === "all") return allProjectItems.value

    return allProjectItems.value.filter((item) =>
      listType.value === "sideProject" ? item.sideProject === true : item.sideProject === false
    )
  })

  async function fetchProjects() {
    loading.value = true
    error.value = ""

    try {
      const url = `${ENDPOINTS.CMSPROJECTLIST}?lang=${locale.value}&page=${page.value}`
      const res = await fetch(url)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)

      const data: ProjectListResponse = await res.json()
      allProjectItems.value = [...data.items, ...designCardInfo]
      totalPages.value = data.totalPages
    } catch (e) {
      allProjectItems.value = []
      error.value = "Failed to load projects."
      console.error(e)
    } finally {
      loading.value = false
    }
  }

  function isCmsProject(item: ProjectCardItem): item is ProjectListItem {
    return "isCMS" in item && item.isCMS === true
  }

  function getProjectKey(item: ProjectCardItem) {
    return isCmsProject(item) ? `cms-${item.slug}` : `static-${item.name}`
  }

  function getProjectRoute(item: ProjectCardItem) {
    if (isCmsProject(item)) {
      return { name: "CmsProjectDetail", params: { slug: item.slug } }
    }

    return { name: "ProjectDetail", params: { id: getStaticProjectId(item) } }
  }

  function getProjectTitle(item: ProjectCardItem) {
    return isCmsProject(item) ? item.title : t(item.title)
  }

  function getProjectTag(item: ProjectCardItem, tag: string) {
    return isCmsProject(item) ? tag : t(tag)
  }

  function listProfileCard(type: PortfolioListType) {
    listType.value = type
  }

  function goPage(n: number) {
    page.value = n
  }

  watch([page, locale], fetchProjects)
  onMounted(fetchProjects)

  return {
    projectItems,
    listType,
    page,
    totalPages,
    loading,
    error,
    listProfileCard,
    goPage,
    getProjectKey,
    getProjectRoute,
    getProjectTitle,
    getProjectTag
  }
}
