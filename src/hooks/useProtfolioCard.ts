import { designCardInfo, CardInfoDetail } from '/@/setting/profolioCard'
import { ref, Ref } from 'vue'
export const getCardInfo = (params: number): CardInfoDetail => {
  const CardData :Ref<CardInfoDetail | undefined> = ref()
  console.log('params ', params)
  CardData.value = designCardInfo.find(((element,index) => (index+1) === params))!
  console.log('return carddata ', CardData.value)
  return CardData.value
}