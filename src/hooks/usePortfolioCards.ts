import { ref } from "vue"
import type { CardInfoDetail } from "/@/interface/CardInfoDetail"
import { designCardInfo } from "/@/setting/profolioCard"

export type PortfolioListType = "all" | "profolio" | "sideProject"

export function getStaticProjectId(item: CardInfoDetail) {
  const staticIndex = designCardInfo.findIndex((card) => card.name === item.name)

  return (staticIndex + 1).toString()
}

export function usePortfolioCards() {
  const listCardInfo = ref<CardInfoDetail[]>([...designCardInfo])
  const listType = ref<PortfolioListType>("all")

  function listProfileCard(type: PortfolioListType): void {
    listType.value = type

    if (type === "all") {
      listCardInfo.value = [...designCardInfo]
      return
    }

    listCardInfo.value = designCardInfo.filter((item) =>
      type === "sideProject" ? item.sideProject === true : item.sideProject === false
    )
  }

  function getStaticProjectRoute(item: CardInfoDetail) {
    return {
      name: "ProjectDetail",
      params: { id: getStaticProjectId(item) }
    }
  }

  return {
    listCardInfo,
    listType,
    listProfileCard,
    getStaticProjectRoute
  }
}
