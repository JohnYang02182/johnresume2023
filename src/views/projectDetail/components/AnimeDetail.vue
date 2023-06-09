<template>
  <section class="section-body">
    <div class="banner-wrapper">
      <div class="banner-content scrollAnimation">
        <img class="banner-content-item" src="/IMG/banner_sample.png" alt="" @load="onImage" :class="{'img-loading': isImgLoading}"/>
      </div>
    </div>
    <div class="container-wrapper col">
      <div class="content-wrapper col scrollAnimation">
        <h2 class="main-title">{{ $t('ProjectCommon.ProjectTitle01') }}</h2>
        <p class="content-text">{{ $t('ProjectAnime.Reason') }}</p>
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
          <li class="list dot dot-secondary">{{ $t('ProjectAnime.Problem01') }}</li>
          <li class="list dot dot-secondary">{{ $t('ProjectAnime.Problem02') }}</li>
          <li class="list dot dot-secondary">{{ $t('ProjectAnime.Problem03') }}</li>
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
              <p class="content-text">{{ $t('ProjectAnime.Process01MainTitle') }}</p>
              <ul class="list-wrapper row-2">
                <li class="list col shadow-main">
                  <p class="list-title">{{ $t('ProjectAnime.Process01ListTitle01') }}</p>
                  <p class="list-content">{{ $t('ProjectAnime.Process01ListContent01') }}</p>
                </li>
                <li class="list col shadow-main">
                  <p class="list-title">{{ $t('ProjectAnime.Process01ListTitle02') }}</p>
                  <p class="list-content">{{ $t('ProjectAnime.Process01ListContent02') }}</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="card scrollAnimation">
            <div class="card-head">
              <div class="sub-title number-style">
                <span class="num">2</span>{{ $t('ProjectAnime.Process02') }}
              </div>
            </div>
            <div class="card-body">
              <div class="content-img-wrapper">
                <img class="content-img-body" src="/IMG/anime_flow.png" alt="guideLine">
              </div>
              <p class="content-text">{{ $t('ProjectAnime.Process02ListContent01') }}</p>
            </div>  
          </div>
          <div class="card scrollAnimation">
            <div class="card-head">
              <div class="sub-title number-style">
                <span class="num">3</span>{{ $t('ProjectAnime.Process03') }}
              </div>
            </div>
            <div class="card-body">
              <div class="content-img-wrapper">
                <img class="content-img-body" src="/IMG/anime_guideLine.png" alt="guideLine">
              </div>
              <div class="content-text">{{ $t('ProjectAnime.Process03ListContent01') }}</div>
            </div>
          </div>
          <div class="card scrollAnimation">
            <div class="card-head">
              <div class="sub-title number-style">
                <span class="num">4</span>{{ $t('ProjectAnime.Process04') }}
              </div>
            </div>
            <div class="card-body">
              <ul class="list-wrapper gap-in-card_list">
                <li class="list">
                  <p class="list-title">{{ $t('ProjectAnime.Process04ListTitle01') }}</p>
                  <p class="list-content">{{ $t('ProjectAnime.Process04ListContent01') }}</p>
                  <div class="img-group">
                    <div class="img-content">
                      <span class="img-def">before</span>
                      <div class="img-wrapper">
                        <img class="img" src="/IMG/pic_videoList_before.png" alt="" />
                      </div>
                    </div>
                    <div class="img-content">
                      <span class="img-def">after</span>
                      <div class="img-wrapper">
                        <img class="img" src="/IMG/pic_videoList_after.png" alt="" />
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list dot-style">
                  <p class="list-title">{{ $t('ProjectAnime.Process04ListTitle02') }}</p>
                  <p class="list-content main-point">{{ $t('ProjectAnime.Process04ListPointTitle') }}</p>
                  <p class="list-content dot dot-primary">{{ $t('ProjectAnime.Process04ListPointContent01') }}</p>
                  <p class="list-content dot dot-primary">{{ $t('ProjectAnime.Process04ListPointContent02') }}</p>
                  <div class="img-content">
                    <div class="img-wrapper">
                      <img class="img" src="/IMG/pic_schedule.png" alt="" />
                    </div>
                  </div>
                  <p class="list-content">{{ $t('ProjectAnime.Process04ListContent02') }}</p>
                </li>
                <li class="list">
                  <p class="list-title">{{ $t('ProjectAnime.Process04ListTitle03') }}</p>
                  <p class="list-content">{{ $t('ProjectAnime.Process04ListContent03') }}</p>
                  <div class="img-group">
                    <div class="img-content">
                      <span class="img-def">before</span>
                      <div class="img-wrapper">
                        <img class="img" src="/IMG/pic_cardList_before.png" alt="" />
                      </div>
                    </div>
                    <div class="img-content">
                      <span class="img-def">after</span>
                      <div class="img-wrapper">
                        <img class="img" src="/IMG/pic_cardList_after.png" alt="" />
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list">
                  <p class="list-title">{{ $t('ProjectAnime.Process04ListTitle04') }}</p>
                  <p class="list-content">{{ $t('ProjectAnime.Process04ListContent04') }}</p>
                  <div class="img-group">
                    <div class="img-content">
                      <span class="img-def">before</span>
                      <div class="img-wrapper">
                        <img class="img" src="/IMG/pic_info_before.png" alt="" />
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
                <span class="num">5</span>{{ $t('ProjectAnime.Process05') }}
              </div>
            </div>
            <div class="card-body">
              <ul class="list-wrapper">
                <li class="list shadow-main" v-html="$t('ProjectAnime.Process04ListTitle0501')" />
                <li class="list shadow-main" v-html="$t('ProjectAnime.Process04ListTitle0502')" />
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

@keyframes opacityShowUp {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.scrollAnimation {
  animation: opacityShowUp 0.4s ease-in 0.2s;
  opacity: 0;
}
.scrolled {
  opacity: 1;
}
.section-body {
  position: relative;
  margin: 7.5vw 0;
}
.banner-wrapper {
  position: relative;
  width: 100%;
  background-color: #353855;
  .banner-content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7.5vw 0;
    min-height: 360px;
    height: 50vw;
    .banner-content-item {
      object-fit: contain;
      height: 100%;
      overflow: hidden;
      &.img-loading {
        background-color: #fff;
      }
    }
  }
}
.img-group {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin: 2vw 0 0 0;
  &.row {
    flex-direction: row;
  }
  &.col {
    flex-direction: column;
  }
  .img-content {
    margin: 0;
  }
}
.img-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin: 1vw 0 0 0;
}
.img-def {
  font-size: var(font_body_medium);
  font-weight: 600;
  color: #323232;
}
.img-wrapper {
  border: 1px solid var(--primary_50);
  border-radius: 8px;
  overflow: hidden;
  >img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.col {
  display: flex;
  flex-direction: column;
}
.row {
  display: flex;
  flex-direction: row;
}
.dot-style {
  .dot {
    &:before {
      content: '';
      display: block;
    }
  }
  .dot-primary {
    &:before {
      margin: 0 4px;
      width: 6px;
      height: 6px;
      border-radius: 12px;
      background-color: var(--primary);
    }
  }
  .dot-secondary {
    &:before {
      margin: 0 8px;
      width: 8px;
      height: 8px;
      border-radius: 12px;
      background-color: var(--tertiary);
    }
  }
}
.number-style {
  .num {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(var(--font_title_small)*1.2);
    height: calc(var(--font_title_small)*1.2);
    border-radius: 2px;
    background-color: var(--primary);
    color: var(--text_tertiary);
    font-size: var(--font_title_small);
  }
}

.hightLight {
  font-size: var(--font_title_large);
  color: var(--primary);
}
.content-wrapper {
  row-gap: 20px;
}
.list-wrapper {
  display: grid;
  row-gap: clamp(0px, 1vw, 4px);
  &.row-2 {
    grid-template-columns: repeat(2, clamp(240px, 25dvw, 420px));
    >.list {
      padding: 36px 0;
      width: clamp(240px, 25dvw, 420px);
    }
  }
  .list {
    display: flex;
    align-items: center;
    font-size: var(--font_body_medium);
    color: var(--text_primary);
    font-weight: 400;
    &.col {
      align-items: start;
    }
    .heighLight {
      font-size: var(--font_title_small);
      color: var(--primary);
    }
  }
  .list-content {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 4px;
    font-size: var(--font_body_medium);
    color: var(--text_primary);
    &.main-point {
      margin-top: 8px;
    }
  }
  .list-title {
    font-size: var(--font_body_medium);
    color: var(--text_primary);
    font-weight: 800;
  }
}
.card-group {
  display: grid;
  gap: clamp(1.75rem, 4.5vw, 42px);
}
.card {
  .shadow-main {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .card-body {
    display: grid;
    gap: 12px;
    margin-block-start: 1em;
    .list-wrapper {
      gap: 24px;
      .list {
        position: relative;
        padding: 16px;
        align-items: start;
        flex-direction: column;
        gap: 4px;
        &:not(.shadow-main) {
          padding: 4px 16px;
          margin-left: 10px;
          border-left: 3px solid var(--secondary);
          &:before {
            content: '';
            display: block;
            position: absolute;
            left: -7.5px;
            bottom: -6px;
            width: 12px;
            height: 12px;
            border-radius: 12px;
            background-color: var(--secondary);
          }
          &:after {
            content: '';
            display: block;
            position: absolute;
            top: -6px;
            left: -7.5px;
            width: 12px;
            height: 12px;
            border-radius: 12px;
            background-color: var(--secondary);
          }
        }
      }
    }
    .gap-in-card_list {
      margin-top: 1em;
      gap: 48px;
    }
  }
}
.container-wrapper {
  position: relative;
  row-gap: clamp(2.5rem, 4vw, 84px);
  margin: 4vw auto;
  max-width: 1280px;
  width: 75%;
  .content-text {
    color: var(--text_primary);
  }
  .main-title {
    font-size: clamp(1.2rem, 2vw, var(--font_title_large));
  }
  .sub-title {
    font-size: clamp(1rem, 1.8vw, var(--font_title_small));
    line-height: 1.5;
    font-weight: unset;
    &.number-style {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      gap: 8px;
    }
  }
}
.content-img-wrapper {
  position: relative;
  display: block;
  margin: clamp(0px, 1vw, 16px) 0;
  width: 80%;
  .content-img-body {
    object-fit: contain;
    width: 100%;
  }
}
</style>