<template>
  <section class="section-body">
    <div class="banner-wrapper">
      <div class="banner-content-wrapper row">
        <div class="banner-content-item maginationLoading">
          <img class="banner-content-img img-loading" src="/IMG/banner_work_character.png" alt="" :ref="isImgLoading2" />
        </div>
        <p class="banner-content-title">My Work</p>
      </div>
    </div>
    <div class="container-wrapper col">
      <div class="content-wrapper col scrollAnimation">
        <h2 class="main-title">{{ $t('ProjectCommon.ProjectTitle01') }}</h2>
        <p class="content-text">{{ $t('ProjectBahaworld.Reason') }}</p>
      </div>
      <div class="content-wrapper col scrollAnimation">
        <h2 class="main-title">{{ $t('ProjectCommon.ProjectTitle02') }}</h2>
        <ul class="list-wrapper">
          <li class="list">{{ $t('Character.PM') }} * 1</li>
          <li class="list">{{ $t('Character.UIUXDesigner') }} * 1</li>
          <li class="list">{{ $t('Character.BDDeveloper') }} * 2</li>
        </ul>
      </div>
      <div class="content-wrapper col scrollAnimation">
        <h2 class="main-title">{{ $t('ProjectCommon.ProjectTitle06') }}</h2>
        <ul class="list-wrapper dot-style">
          <li class="list dot dot-secondary">{{ $t('ProjectBahaworld.Point01') }}</li>
          <li class="list dot dot-secondary">{{ $t('ProjectBahaworld.Point02') }}</li>
        </ul>
      </div>
      <div class="content-wrapper col">
        <h2 class="main-title scrollAnimation">{{ $t('ProjectCommon.ProjectTitle04') }}</h2>
        <div class="card-group col">
          <div class="card scrollAnimation">
            <div class="card-head">
              <div class="sub-title number-style">
                <span class="num">1</span>{{ $t('ProjectAnime.Process01') }}
              </div>
            </div>
            <div class="card-body">
              <ul class="list-wrapper row-2">
                <li class="list col shadow-main">
                  <p class="list-title">{{ $t('ProjectBahaworld.Process01ListTitle01') }}</p>
                  <p class="list-content">{{ $t('ProjectBahaworld.Process01ListContent01') }}</p>
                </li>
                <li class="list col shadow-main">
                  <p class="list-title">{{ $t('ProjectBahaworld.Process01ListTitle02') }}</p>
                  <p class="list-content">{{ $t('ProjectBahaworld.Process01ListContent02') }}</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="card scrollAnimation">
            <div class="card-head">
              <div class="sub-title number-style">
                <span class="num">2</span>{{ $t('ProjectBahaworld.Process02') }}
              </div>
            </div>
            <div class="card-body">
              <p class="content-text">{{ $t('Projectbahaworld.Process02ListContent01') }}</p>
              <div class="content-img-wrapper maginationLoading">
                <img class="content-img-body img-loading" src="/IMG/pic_bahaworld_prototype.png" alt="guideLine" :ref="isImgLoading2">
              </div>
            </div>  
          </div>
          <div class="card scrollAnimation">
            <div class="card-head">
              <div class="sub-title number-style">
                <span class="num">3</span>{{ $t('ProjectAnime.Process02') }}
              </div>
            </div>
            <div class="card-body">
              <div class="content-text">{{ $t('ProjectBahaworld.Process03ListContent01') }}</div>
              <div class="content-img-wrapper maginationLoading">
                <img class="content-img-body img-loading" src="/IMG/pic_bahaworld_guideline.png" :ref="isImgLoading2" alt="guideLine">
              </div>
              <div class="content-text">{{ $t('ProjectBahaworld.Process03ListContent02') }}</div>
              <div class="content-img-wrapper maginationLoading">
                <img class="content-img-body img-loading" src="/IMG/pic_bahaworld_components.png" :ref="isImgLoading2" alt="guideLine">
              </div>
            </div>
          </div>
          <div class="card scrollAnimation">
            <div class="card-head">
              <div class="sub-title number-style">
                <span class="num">4</span>{{ $t('ProjectAnime.Process05') }}
              </div>
            </div>
            <div class="card-body">
              <ul class="list-wrapper">
                <li class="list shadow-main" v-html="$t('ProjectBahaworld.Process04ListTitle0501')" />
                <li class="list shadow-main" v-html="$t('ProjectBahaworld.Process04ListTitle0502')" />
              </ul> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <Loading v-else-if="isLoading === true" /> -->
</template>
<script lang="ts" setup>
import { onMounted, ref, Ref, ComponentPublicInstance, onUnmounted, nextTick, computed, ImgHTMLAttributes, VNodeRef } from 'vue';
import { observeScroll, imageLazuLoad } from '../../../../util/lazyLoad'
const isLoading = ref(true)

// const imgContent = ref<ComponentPublicInstance | null | HTMLElement>(null)
// const isImgLoading = ref(true)
// const isImgLoadingNow = computed(() => {return isImgLoading})
const isImgLoading2 = (imgContents: any) => {
  imageLazuLoad(imgContents)
}
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