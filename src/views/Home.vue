<template>
  <div class="container-outer">
    <div class="container">
      <div class="section-outer" ref="bannerWrapper">
        <div class="section section-banner">
          <div class="banner_intro">
            <h2 class="section-main-title home-title">
              {{ $t("HeaderIntroduce") }}
            </h2>
            <div class="main-intro">
              {{ $t("Home.MainSelfIntro") }}
            </div>
            <a
              href="javascript:void(0)"
              @click="router.push('/personal')"
              class="button primary-button"
              >{{ $t("Nav.InfoPageTag") }}</a
            >
          </div>
          <div class="banner_image">
            <img
              :style="{
                transform: `translate(${Math.abs(
                  (x - windowWidth / 2) / 10
                )}px, ${-y / 60}px)`
              }"
              src="/IMG/me_banner.png"
              alt="banner"
            />
          </div>
          <div
            v-for="item in 4"
            :key="item"
            class="banner_background"
            :class="`banner-0${item}`"
          >
            <img
              :style="{
                transform: `translate(${-x / (30 * item)}px, ${
                  y / (30 * item)
                }px)`
              }"
              src="/IMG/pic_banner_bg.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="divid-line"></div>
      <div class="section section-profile">
        <div class="section-main-title home-title has-options">
          <font-awesome-icon class="icon-home-title" icon="fa-solid fa-flag" />
          <h2>{{ $t("CommonTitle.MyWork") }}</h2>
          <ul class="option-list">
            <li
              :class="{ active: listType === 'all' }"
              @click="listProfileCard('all')"
            >
              {{ $t("CommonTitle.All") }}
            </li>
            <li
              :class="{ active: listType === 'profolio' }"
              @click="listProfileCard('profolio')"
            >
              {{ $t("CommonTitle.Portfolio") }}
            </li>
            <li
              :class="{ active: listType === 'sideProject' }"
              @click="listProfileCard('sideProject')"
            >
              {{ $t("CommonTitle.SideProject") }}
            </li>
            <!-- <li>{{ $t("CommonTitle.Portfolio") }}</li>
            <li>{{ $t("CommonTitle.SiteProject") }}</li> -->
          </ul>
        </div>
        <router-link
          class="profile_card"
          v-for="(item, index) in listCardInfo"
          :key="index"
          :to="{
            name: 'ProjectDetail',
            params: { id: (index + 1).toString() }
          }"
        >
          <LoadingImg
            class="profile_card-pic img-loading-wrapper img-loading-light"
            :IsBanner="false"
            :IsLight="true"
            :ImageUrl="item.bannerImg"
          />
          <!-- <div class="profile_card-pic img-loading-wrapper img-loading-light">
						<img class="img-loading" :src="`${ getImgUrl(item.bannerImg) ? item.bannerImg : getImgUrl(item.bannerImg)}`" alt="profile" />
					</div> -->
          <div class="profile_card-text">
            <p class="headline_02">{{ $t(item.title) }}</p>
            <p class="content-text time">{{ item.period }}</p>
            <div class="tips-area">
              <span
                class="tips-text"
                v-for="(tags, index) in item.tags"
                :key="index"
                >{{ $t(tags) }}</span
              >
            </div>
          </div>
        </router-link>
      </div>
      <!-- <div class="divid-line"></div>
			<div class="section section-codepratice">
				<h2 class="section-main-title home-title">前端實作練習</h2>
				<a href="https://github.com/JohnYang02182/vueproject" target="_blank" class="profile_card code_card">
					<div class="profile_card-pic">
						<img src="/IMG/pic_vue.png" alt="profile">
					</div>
					<div class="profile_card-text">
						<p class="headline_02">Vue 實作練習</p>
						<p class="content-text time">2021</p>
						<div class="tips-area">
							<p class="tips-text">網頁設計</p>
							<p class="tips-text">RWD</p>
							<p class="tips-text">HTML5</p>
							<p class="tips-text">SCSS</p>
							<p class="tips-text">Vue</p>
						</div>
					</div>
				</a>
				<a href="https://codepen.io/warryymi/pen/BaWLPaR" target="_blank" class="profile_card code_card">
					<div class="profile_card-pic">
						<img src="/IMG/pic_banner_practice.png" alt="profile">
					</div>
					<div class="profile_card-text">
						<p class="headline_02">BannerSlider</p>
						<p class="content-text time">2021</p>
						<div class="tips-area">
							<p class="tips-text">HTML5</p>
							<p class="tips-text">SCSS</p>
							<p class="tips-text">Javascript</p>
						</div>
					</div>
				</a>
				<a href="https://codepen.io/warryymi/pen/roaPMY" target="_blank" class="profile_card code_card">
					<div class="profile_card-pic">
						<img src="https://assets.codepen.io/2202521/internal/screenshots/pens/roaPMY.default.png?fit=cover&format=auto&ha=true&height=540&quality=75&v=2&version=1545449021&width=960" alt="profile">
					</div>
					<div class="profile_card-text">
						<p class="headline_02">翻牌效果</p>
						<p class="content-text time">2019</p>
						<div class="tips-area">
							<p class="tips-text">HTML5</p>
							<p class="tips-text">SCSS</p>
							<p class="tips-text">jQuery</p>
						</div>
					</div>
				</a>
			</div> -->
      <div class="divid-line" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import LoadingImg from "/@/components/LoadingImg.vue";
import { onBeforeRouteUpdate } from "vue-router";
import { useMouse } from "@vueuse/core";
import type { UseMouseEventExtractor } from "@vueuse/core";
import router from "/@/router/index";
// import { getImgUrl } from '../../util/globalSrc'
// import { observeScroll, imageLazyLoad } from '../../util/lazyLoad'
import { designCardInfo } from "/@/setting/profolioCard";

const userData = ref();
const bannerWrapper = ref<HTMLElement | null>(null);
const extractor: UseMouseEventExtractor = (event) =>
  event instanceof Touch ? null : [event.x, event.offsetY];

const windowWidth = ref(window.innerWidth);
// console.log("windowwidth ", windowWidth.value);
const { x, y } = useMouse({
  target: bannerWrapper,
  touch: false,
  type: extractor
});

const listCardInfo = ref([...designCardInfo]);
const listType = ref("all");

function listProfileCard(type: string): void {
  if (type === "all") {
    listCardInfo.value = [...designCardInfo];
    listType.value = "all";
  } else if (type === "profolio") {
    listCardInfo.value = designCardInfo.filter(
      (item) => item.sideProject === false
    );
    listType.value = "profolio";
  } else if (type === "sideProject") {
    listCardInfo.value = designCardInfo.filter(
      (item) => item.sideProject === true
    );
    listType.value = "sideProject";
  }
}

onBeforeRouteUpdate(async (to, from) => {
  // only fetch the user if the id changed as maybe only the query or the hash changed
  if (to.params.id !== from.params.id) {
    userData.value = designCardInfo.find(
      (element, index) => (index + 1).toString() === to.params.id
    );
  }
});
</script>
