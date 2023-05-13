import { designCardInfo, CardInfoDetail } from '/@/setting/profolioCard'
import { ref, Ref } from 'vue'
export const getCardInfo = (params: number): CardInfoDetail => {
  const CardData :Ref<CardInfoDetail | undefined> = ref()
  CardData.value = designCardInfo.find((element => element.params === params.toString()))!
  return CardData.value
}