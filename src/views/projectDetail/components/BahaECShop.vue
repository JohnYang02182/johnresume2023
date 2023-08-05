<template>
  <section class="section-body">
    <div class="banner-wrapper">
      <div class="banner-content-wrapper row">
        <div class="banner-content-item" :class="{'img-loading-wrapper': isImgLoading}">
          <img class="banner-content-img" src="/IMG/banner_work_character.png" alt="" @load="onImage" v-show="!isImgLoading"/>
        </div>
        <p class="banner-content-title">My Work</p>
      </div>
    </div>
    <div class="container-wrapper col">
      <div class="content-wrapper col scrollAnimation">
        <h2 class="main-title">{{ $t('ProjectCommon.ProjectTitle01') }}</h2>
        <p class="content-text">{{ $t('ProjectBahashopping.Reason') }}</p>
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
        <h2 class="main-title">{{ $t('ProjectCommon.ProjectTitle03') }}</h2>
        <ul class="list-wrapper dot-style">
          <li class="list dot dot-secondary">{{ $t('ProjectBahashopping.Problem01') }}</li>
          <li class="list dot dot-secondary">{{ $t('ProjectBahashopping.Problem02') }}</li>
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
                  <p class="list-title">{{ $t('ProjectBahashopping.Process01ListTitle01') }}</p>
                  <p class="list-content">{{ $t('ProjectBahashopping.Process01ListContent01') }}</p>
                </li>
                <li class="list col shadow-main">
                  <p class="list-title">{{ $t('ProjectBahashopping.Process02ListTitle01') }}</p>
                  <p class="list-content">{{ $t('ProjectBahashopping.Process02ListContent01') }}</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="card scrollAnimation">
            <div class="card-head">
              <div class="sub-title number-style">
                <span class="num">2</span>{{ $t('ProjectBahashopping.Process02') }}
              </div>
            </div>
            <div class="card-body">
              <p class="content-text">{{ $t('ProjectBahashopping.Process04') }}</p>
              <div class="content-img-wrapper">
                <img class="content-img-body" src="/IMG/shopping_payment.png" alt="shoppingflow">
              </div>
              <p class="content-text">{{ $t('ProjectBahashopping.Process05') }}</p>
              <div class="content-img-wrapper">
                <img class="content-img-body" src="/IMG/shopping_shopping_cart.png" alt="shoppingcart">
              </div>
            </div>  
          </div>
          <div class="card scrollAnimation">
            <div class="card-head">
              <div class="sub-title number-style">
                <span class="num">3</span>{{ $t('ProjectAnime.Process04') }}
              </div>
            </div>
            <div class="card-body">
              <ul class="list-wrapper gap-in-card_list">
                <li class="list col">
                  <p class="list-title">{{ $t('ProjectBahashopping.Process03ListTitle01') }}</p>
                  <p class="list-content">{{ $t('ProjectBahashopping.Process03ListContent01') }}</p>
                  <div class="img-group">
                    <div class="img-content">
                      <span class="img-def">before</span>
                      <div class="img-wrapper">
                        <img class="img" src="/IMG/shopping_home_before.png" alt="" />
                      </div>
                    </div>
                    <div class="img-content">
                      <span class="img-def">after</span>
                      <div class="img-wrapper">
                        <img class="img" src="/IMG/shopping_home_after.png" alt="" />
                      </div>
                    </div>
                    <div class="img-content">
                      <span class="img-def">before</span>
                      <div class="img-wrapper">
                        <img class="img" src="/IMG/shopping_products_before.png" alt="" />
                      </div>
                    </div>
                    <div class="img-content">
                      <span class="img-def">after</span>
                      <div class="img-wrapper">
                        <img class="img" src="/IMG/shopping_product_after.png" alt="" />
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list col dot-style">
                  <p class="list-title">{{ $t('ProjectBahashopping.Process02ListTitle01') }}</p>
                  <p class="list-content">{{ $t('ProjectBahashopping.Process02ListContent01') }}</p>
                  <div class="img-content">
                    <div class="img-wrapper">
                      <img class="img" src="/IMG/shoppingcart_digital.png" alt="" />
                    </div>
                    <div class="img-wrapper">
                      <img class="img" src="/IMG/shopping_checklist.png" alt="" />
                    </div>
                  </div>
                  <!-- <p class="list-content">{{ $t('ProjectAnime.Process04ListContent02') }}</p> -->
                </li>
                <li class="list col">
                  <p class="list-title">{{ $t('ProjectBahashopping.Process03ListTitle02') }}</p>
                  <p class="list-content">{{ $t('ProjectBahashopping.Process03ListContent02') }}</p>
                  <div class="img-group">
                    <div class="img-content">
                      <span class="img-def">PC</span>
                      <div class="img-wrapper">
                        <img class="img" src="/IMG/shopping_product_pc.png" alt="" />
                      </div>
                    </div>
                    <div class="img-content">
                      <span class="img-def">Mobile</span>
                      <div class="img-wrapper">
                        <img class="img" src="/IMG/shopping_product_mobile.png" alt="" />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="card scrollAnimation">
            <div class="card-head">
              <div class="sub-title number-style">
                <span class="num">5</span>{{ $t('ProjectAnime.Process05') }}
              </div>
            </div>
            <div class="card-body">
              <ul class="list-wrapper">
                <li class="list shadow-main" v-html="$t('ProjectBahashopping.Process04ListTitle0501')" />
                <li class="list shadow-main row">{{ $t('ProjectCommon.ProjectContent01') }}<a class="link" :href="LinkOfBahaShop" target="_blank">{{ $t('ProjectCommon.ProjectName02') }}</a></li>
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
import { defineAsyncComponent, onMounted, ref, onUnmounted, nextTick } from 'vue';
import { observeScroll } from '../../../../util/lazyLoad'
const isLoading = ref(true)
const LinkOfBahaShop = 'https://buy.gamer.com.tw/'
const Loading = defineAsyncComponent(() => 
  import ('/@/components/Loading.vue')
)
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