<template>
  <section class="section-body">
    <div class="banner-wrapper">
      <div class="banner-content-wrapper row">
        <div
          class="banner-content-item"
          :class="{ 'img-loading-wrapper img-loading-dark': isImgLoading }"
        >
          <img
            class="banner-content-img"
            src="/IMG/banner_work_character.png"
            alt=""
            @load="onImage"
            v-show="!isImgLoading"
          />
        </div>
        <p class="banner-content-title">My Work</p>
      </div>
    </div>
    <div class="container-wrapper col">
      <div class="content-wrapper col scrollAnimation">
        <h2 class="main-title">決定上課的理由</h2>
        <!-- Title -->
        <ul class="list-wrapper dot-style">
          <li class="list dot dot-secondary">
            為了解決至今都將重心放在功能實作而對 JS
            背後的原理的認知不夠具體的問題
          </li>
          <li class="list dot dot-secondary">
            這門課比起其他的 Coding
            課程，更著重於解說程式背後的邏輯，特別是一些很多初學者不太容易理解的部分
            ( Hoisting、undefined、prototype chain等) 搭配流程圖解說，。
          </li>
        </ul>
        <!-- Reason -->
      </div>
      <div class="content-wrapper col scrollAnimation">
        <h2 class="main-title">{{ $t("ProjectCommon.ProjectTitle03") }}</h2>
        <ul class="list-wrapper dot-style">
          <li class="list dot dot-secondary">
            {{ $t("ProjectAnime.Problem01") }}
          </li>
          <li class="list dot dot-secondary">
            {{ $t("ProjectAnime.Problem02") }}
          </li>
          <li class="list dot dot-secondary">
            {{ $t("ProjectAnime.Problem03") }}
          </li>
        </ul>
      </div>
      <div class="content-wrapper col">
        <h2 class="main-title scrollAnimation">
          {{ $t("ProjectCommon.ProjectTitle04") }}
        </h2>
        <div class="card-group col">
          <div class="card scrollAnimation">
            <div class="card-head">
              <div class="sub-title number-style">
                <span class="num">1</span>{{ $t("ProjectAnime.Process01") }}
              </div>
            </div>
            <div class="card-body">
              <p class="content-text">
                {{ $t("ProjectAnime.Process01MainTitle") }}
              </p>
              <ul class="list-wrapper row-2">
                <li class="list col shadow-main">
                  <p class="list-title">
                    {{ $t("ProjectAnime.Process01ListTitle01") }}
                  </p>
                  <p class="list-content">
                    {{ $t("ProjectAnime.Process01ListContent01") }}
                  </p>
                </li>
                <li class="list col shadow-main">
                  <p class="list-title">
                    {{ $t("ProjectAnime.Process01ListTitle02") }}
                  </p>
                  <p class="list-content">
                    {{ $t("ProjectAnime.Process01ListContent02") }}
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div class="card scrollAnimation">
            <div class="card-head">
              <div class="sub-title number-style">
                <span class="num">2</span>{{ $t("ProjectAnime.Process02") }}
              </div>
            </div>
            <div class="card-body">
              <div class="content-img-wrapper">
                <img
                  class="content-img-body"
                  src="/IMG/anime_flow.png"
                  alt="guideLine"
                />
              </div>
              <p class="content-text">
                {{ $t("ProjectAnime.Process02ListContent01") }}
              </p>
            </div>
          </div>
          <div class="card scrollAnimation">
            <div class="card-head">
              <div class="sub-title number-style">
                <span class="num">3</span>{{ $t("ProjectAnime.Process03") }}
              </div>
            </div>
            <div class="card-body">
              <div class="content-img-wrapper">
                <img
                  class="content-img-body"
                  src="/IMG/anime_guideLine.png"
                  alt="guideLine"
                />
              </div>
              <div class="content-text">
                {{ $t("ProjectAnime.Process03ListContent01") }}
              </div>
            </div>
          </div>
          <div class="card scrollAnimation">
            <div class="card-head">
              <div class="sub-title number-style">
                <span class="num">4</span>{{ $t("ProjectAnime.Process04") }}
              </div>
            </div>
            <div class="card-body">
              <ul class="list-wrapper gap-in-card_list">
                <li class="list col">
                  <p class="list-title">
                    {{ $t("ProjectAnime.Process04ListTitle01") }}
                  </p>
                  <p class="list-content">
                    {{ $t("ProjectAnime.Process04ListContent01") }}
                  </p>
                  <div class="img-group">
                    <div class="img-content">
                      <span class="img-def">before</span>
                      <div class="img-wrapper">
                        <img
                          class="img"
                          src="/IMG/pic_videoList_before.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="img-content">
                      <span class="img-def">after</span>
                      <div class="img-wrapper">
                        <img
                          class="img"
                          src="/IMG/pic_videoList_after.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list col dot-style">
                  <p class="list-title">
                    {{ $t("ProjectAnime.Process04ListTitle02") }}
                  </p>
                  <p class="list-content main-point">
                    {{ $t("ProjectAnime.Process04ListPointTitle") }}
                  </p>
                  <p class="list-content dot dot-primary">
                    {{ $t("ProjectAnime.Process04ListPointContent01") }}
                  </p>
                  <p class="list-content dot dot-primary">
                    {{ $t("ProjectAnime.Process04ListPointContent02") }}
                  </p>
                  <div class="img-content">
                    <div class="img-wrapper">
                      <img class="img" src="/IMG/pic_schedule.png" alt="" />
                    </div>
                  </div>
                  <p class="list-content">
                    {{ $t("ProjectAnime.Process04ListContent02") }}
                  </p>
                </li>
                <li class="list col">
                  <p class="list-title">
                    {{ $t("ProjectAnime.Process04ListTitle03") }}
                  </p>
                  <p class="list-content">
                    {{ $t("ProjectAnime.Process04ListContent03") }}
                  </p>
                  <div class="img-group">
                    <div class="img-content">
                      <span class="img-def">before</span>
                      <div class="img-wrapper">
                        <img
                          class="img"
                          src="/IMG/pic_cardList_before.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="img-content">
                      <span class="img-def">after</span>
                      <div class="img-wrapper">
                        <img
                          class="img"
                          src="/IMG/pic_cardList_after.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list col">
                  <p class="list-title">
                    {{ $t("ProjectAnime.Process04ListTitle04") }}
                  </p>
                  <p class="list-content">
                    {{ $t("ProjectAnime.Process04ListContent04") }}
                  </p>
                  <div class="img-group">
                    <div class="img-content">
                      <span class="img-def">before</span>
                      <div class="img-wrapper">
                        <img
                          class="img"
                          src="/IMG/pic_info_before.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="img-content">
                      <span class="img-def">after</span>
                      <div class="img-wrapper">
                        <img class="img" src="/IMG/pic_info_after.png" alt="" />
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
                <span class="num">5</span>{{ $t("ProjectAnime.Process05") }}
              </div>
            </div>
            <div class="card-body">
              <ul class="list-wrapper">
                <li
                  class="list shadow-main"
                  v-html="$t('ProjectAnime.Process04ListTitle0501')"
                />
                <li
                  class="list shadow-main"
                  v-html="$t('ProjectAnime.Process04ListTitle0502')"
                />
                <li class="list shadow-main row">
                  {{ $t("ProjectCommon.ProjectContent01")
                  }}<a class="link" :href="LinkOfAnime" target="_blank">{{
                    $t("ProjectCommon.ProjectName01")
                  }}</a>
                </li>
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
import {
  defineAsyncComponent,
  onMounted,
  ref,
  onUnmounted,
  nextTick
} from "vue";
import { observeScroll } from "../../../../util/lazyLoad";
const isLoading = ref(true);
const LinkOfAnime = "https://ani.gamer.com.tw/";
const Loading = defineAsyncComponent(() => import("/@/components/Loading.vue"));
const isImgLoading = ref(true);
const onImage = (ele: any) => {
  isImgLoading.value = false;
};
onMounted(async () => {
  await nextTick();
  const scrollDOM = ref(document.querySelectorAll(".scrollAnimation"));
  for (let i = 0; i < scrollDOM.value.length; i++) {
    const elements = ref(scrollDOM.value[i]);
    observeScroll.observe(elements.value);
  }
  isLoading.value = false;
});
onUnmounted(() => {
  observeScroll!.disconnect();
});
</script>
<style lang="scss" scoped>
@import "../../../style/workH_detail.scss";
</style>
