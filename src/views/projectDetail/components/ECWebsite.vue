<template>
  <section class="section-body">
    <div class="banner-wrapper">
      <div class="banner-content-wrapper row">
        <div class="banner-content-item">
          <img class="banner-content-img" src="/IMG/banner_work_character.png" alt="" @load="onImage" :class="{'img-loading-wrapper': isImgLoading}"/>
        </div>
        <p class="banner-content-title">My Work</p>
      </div>
    </div>
    <div class="container-wrapper col">
      <div class="content-wrapper col">
        <h2 class="main-title">{{ $t('ProjectCommon.ProjectTitle01') }}</h2>
        <p class="content-text">{{ $t('ProjectShinChiEC.Reason') }}</p>
      </div>
      <div class="content-wrapper col">
        <h2 class="main-title">{{ $t('ProjectCommon.ProjectTitle02') }}</h2>
        <ul class="list-wrapper">
          <li class="list">{{ $t('Character.PM') }} * 2</li>
          <li class="list">{{ $t('Character.UIUXDesigner') }} * 2</li>
          <li class="list">{{ $t('Character.FEDeveloper') }} * 2</li>
          <li class="list">{{ $t('Character.BDDeveloper') }} * 2</li>
        </ul>
      </div>
      <div class="content-wrapper col scrollAnimation">
        <h2 class="main-title">{{ $t('ProjectCommon.ProjectTitle06') }}</h2>
        <ul class="list-wrapper dot-style">
          <li class="list dot dot-secondary">{{ $t('ProjectShinChiEC.Point01') }}</li>
          <li class="list dot dot-secondary">{{ $t('ProjectShinChiEC.Point02') }}</li>
          <li class="list dot dot-secondary">{{ $t('ProjectShinChiEC.Point03') }}</li>
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
                  <p class="list-title">{{ $t('ProjectShinChiEC.Process01ListTitle01') }}</p>
                  <p class="list-content">{{ $t('ProjectShinChiEC.Process01ListContent01') }}</p>
                </li>
                <li class="list col shadow-main">
                  <p class="list-title">{{ $t('ProjectShinChiEC.Process01ListTitle02') }}</p>
                  <p class="list-content">{{ $t('ProjectShinChiEC.Process01ListContent02') }}</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="card">
            <div class="card-head">
              <div class="sub-title number-style">
                <span class="num">2</span>{{ $t('ProjectShinChiEC.Process02') }}
              </div>
            </div>
            <div class="card-body">
              <ul class="list-wrapper">
                <li class="list col dot-style regular-style">
                  <p class="list-title">{{ $t('ProjectShinChiEC.Process02ListTitle01') }}</p>
                  <p class="list-content dot dot-primary">{{ $t('ProjectShinChiEC.Process02ListContent01') }}</p>
                  <p class="list-content dot dot-primary">{{ $t('ProjectShinChiEC.Process02ListContent02') }}</p>
                  <p class="list-content dot dot-primary">{{ $t('ProjectShinChiEC.Process02ListContent03') }}</p>
                </li>
              </ul>
              <div class="content-img-wrapper img-middle">
                <img class="content-img-body" src="/IMG/pic_structure.png" alt="structure">
              </div>
            </div>  
          </div>
          <div class="card">
            <div class="card-head">
              <div class="sub-title number-style">
                <span class="num">3</span>{{ $t('ProjectAnime.Process05') }}
              </div>
            </div>
            <div class="card-body">
              <ul class="list-wrapper">
                <li class="list shadow-main" v-html="$t('ProjectShinChiEC.Process04ListTitle0501')" />
                <li class="list shadow-main" v-html="$t('ProjectShinChiEC.Process04ListTitle0502')" />
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
import { defineAsyncComponent, onMounted, ref, onUnmounted, onBeforeMount, nextTick } from 'vue';
import { observeScroll } from '../../../../util/lazyLoad'
const isLoading = ref(true)
// const Loading = defineAsyncComponent(() => 
//   import ('/@/components/Loading.vue')
// )
const isImgLoading = ref(true)
const onImage = ((ele: any)=> {
  console.log('getImage',ele.currentTarget)
  isImgLoading.value = false
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