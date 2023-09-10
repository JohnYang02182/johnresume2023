<template>
  <div class="inner-content-wrapper">
    <section class="inner-content-header">
      <div class="inner-col header-wrapper">
        <div class="inner-right-col btn-wrapper">
          <a href="javascript:void(0)" @click="$router.push('/')" class="btn-back">
            {{ $t('CommonActivity.BackTo') }}
          </a>
        </div>
      </div>
      <div class="info-wrapper">
        <div class="title-wrapper">
          <p class="info-title">{{ $t('CommonTitle.Title') }}:
          </p>
          <h3 class="info-title-items">{{ $t(personalData.title)}}</h3>
        </div>
        <ul class="list-wrapper">
          <li class="list">
            <p class="list-title">{{ $t('CommonTitle.Period') }}：</p>
            <span class="list-content">{{ personalData.period }}</span>
          </li>
          <li class="list">
            <p class="list-title">{{ $t('CommonTitle.Team') }}：</p>
            <span class="list-content">{{ $t(personalData.team) }}</span>
          </li>
          <li class="list">
            <p class="list-title">{{ $t('CommonTitle.Character') }}:</p>
            <span class="list-content">{{ $t(personalData.character) }}</span>
          </li>
          <li class="list">
            <p class="list-title">{{ $t('CommonTitle.SkillList') }}:</p>
            <div class="skill-group">
              <span class="skill-tag" v-for="(itemTags,index) in personalData.tags" :key="index">
                {{ $t(itemTags) }}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <Suspense>
      <template #default>
        <AnimeDetail v-if="$route.params.id === '2'"  />
        <ECWebsite v-else-if="$route.params.id === '1'" />
        <BahaECShop v-else-if="$route.params.id === '3'" />
        <!-- <ChatWithChatGPT v-else-if="$route.params.id === '1'" /> -->
        <BahaWorld v-else-if="$route.params.id === '4'" />
        <Maintainance v-else /> 
      </template>
      <template #fallback>
        <Loading />
      </template>
    </Suspense>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { Ref, ref } from 'vue'
import Maintainance from '/@/components/Maintainance.vue'
// import PortfolioRecord from './components/PortfolioRecord.vue'
import AnimeDetail from './components/AnimeDetail.vue'
import ChatWithChatGPT from './components/ChatWithChatGPT.vue'
import BahaECShop from './components/BahaECShop.vue'
import ECWebsite from './components/ECWebsite.vue'
import BahaWorld from './components/BahaWorld.vue'
import Loading from '/@/components/Loading.vue'
import { CardInfoDetail } from '/@/setting/profolioCard'
const props = defineProps ({
  projectTitle: String,
})
const route = useRoute()
const personalData: Ref<CardInfoDetail> = ref(route.meta.msg1 as CardInfoDetail)
</script>