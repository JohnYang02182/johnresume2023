<template>
<div class="section-body">
  <div class="banner-wrapper">
    <div class="banner-content-wrapper row">
      <LoadingImg :ImageUrl="DetailBanner" :IsLight="false" :IsBanner="true" />
      <p class="banner-content-title">Side Project</p>
    </div>
  </div>
  <div class="container-wrapper　col">
    <div class="content-wrapper col scrollAnimation">
      <h2 class="main-title">{{ $t('ProjectCommon.ProjectTitle01') }}</h2>
      <p class="content-text">{{ $t('SideProjectFortune.Reason') }}</p>
    </div>
    <div class="content-wrapper col scrollAnimation">
      <h2 class="main-title">{{ $t('SideProjectFortune.PointTitle01') }}</h2>
      <ul class="list-wrapper dot-style">
        <li class="list dot dot-secondary">{{ $t('SideProjectFortune.Point01') }}</li>
        <li class="list dot dot-secondary">{{ $t('SideProjectFortune.Point02') }}</li>
      </ul>
    </div>
    <div class="card-wrapper">
      <div class="card" @click="clickCard()">
        <div class="card-content" :class="{'transCardBack': isClick, 'card-back': isClick, 'card-front': !isClick, 'transCardFront': !isClick && currentItem}">
          <img src="/IMG/foutune_cardbackground.png" alt="">
        </div>
        <div class="card-content" v-if="currentItem" :class="{'transCardBack': !isClick, 'card-back': !isClick, 'card-front': isClick, 'transCardFront': isClick && currentItem}">
          <LoadingImg :ImageUrl="currentItem.imageUrl" :IsLight="false" :IsBanner="false" />
        </div>
      </div>
    </div>
    <div class="btn-group">
      <button class="btn-primary" @click="clickCard()">{{ isClick ? 'もう一回' : '引きましょう'}}</button>
    </div>
  </div>
</div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, onMounted, ref, computed, onUnmounted, nextTick } from 'vue';
import { observeScroll } from '../../../../util/lazyLoad'
import { cardInfo, CardContent } from '../../../setting/cardRate'
import LoadingImg from '/@/components/LoadingImg.vue'
const loading = ref(false)
const clickOrNot = ref(false)
const currentItem = ref()
const item = ref()
const DetailBanner = ref('banner_sample.png')
const isClick = computed(() => {
  return clickOrNot.value
})
onMounted(() => {
  drawCard()
})
function getRandom(num: number){
  return Math.floor(Math.random()*num)
}
async function getCardInfo(): Promise<Array<CardContent>> {
  let cardIn = cardInfo
  return cardIn
}
function delayTheTrigger(time: number) {
  setTimeout(() => {
    loading.value = false
  }, time);
}
async function drawCard(){
  let rateNumber = getRandom(100)
  try {
    item.value = await getCardInfo()
  } finally {
    let rate = 0
    let i = 0
    while(rateNumber >= rate) {
      rate = rate + item.value[i].probability
      i++
    }
    currentItem.value = item.value[i-1]
  }
}
const clickCard = async() => {
  if(loading.value === true){
    return
  } 
  loading.value = true
  clickOrNot.value = !clickOrNot.value
  delayTheTrigger(600)
  if(clickOrNot.value === true) return
  setTimeout(async () => {
    await drawCard()
  },300)
}
const isLoading = ref(true)
const Loading = defineAsyncComponent(() => 
  import ('/@/components/Loading.vue')
)
const isImgLoading = [ref(true)]
const count = ref(0)
const onImage = ((ele: any)=> {
  console.log('getImage',ele.currentTarget)
  isImgLoading[count.value].value = false
  console.log('isImgLoad', isImgLoading[count.value].value)
  count.value++;
})

onMounted( async () => {
  await nextTick()
  const scrollDOM = ref(document.querySelectorAll('.scrollAnimation'))
  for (let i=0; i < scrollDOM.value.length; i++) {
    const elements = ref(scrollDOM.value[i])
    observeScroll.observe(elements.value)
  }
  isLoading.value = false
})
onUnmounted(() => {
  observeScroll!.disconnect()
})
</script>
<style lang="scss" scoped>
  @import '../../../style/workH_detail.scss';
</style>