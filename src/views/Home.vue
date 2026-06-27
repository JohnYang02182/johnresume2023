<template>
  <div class="container-outer">
    <div class="container">
      <div class="section-outer" ref="bannerWrapper">
        <!-- Banner Section start -->
        <div class="section section-banner">
          <div class="banner_intro">
            <h2 class="section-main-title home-title">
              {{ $t("HeaderIntroduce") }}
            </h2>
            <div class="main-intro">
              {{ $t("Home.MainSelfIntro") }}
            </div>
            <router-link to="/personal" class="button primary-button">
              {{ $t("Nav.InfoPageTag") }}
            </router-link>
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
        <!-- Banner Section end -->
      </div>
      <div class="divid-line"></div>
      <!-- Project files section start -->
      <div class="section section-profile">
        <!-- Project filter start-->
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
          </ul>
        </div>
        <!-- Project filter end -->
        <!-- Project cards start-->
        <router-link
          class="profile_card"
          v-for="item in listCardInfo"
          :key="item.name"
          :to="getStaticProjectRoute(item)"
        >
          <LoadingImg
            class="profile_card-pic img-loading-wrapper img-loading-light"
            :IsBanner="false"
            :IsLight="true"
            :ImageUrl="item.bannerImg"
          />
          <div class="profile_card-text">
            <p class="headline_02">{{ item.title ? $t(item.title) : "" }}</p>
            <p class="content-text time">{{ item.period ? item.period : "" }}</p>
            <div class="tips-area">
              <span
                class="tips-text"
                v-for="tag in item.tags"
                :key="tag"
                >{{ $t(tag) }}</span
              >
            </div>
          </div>
        </router-link>
        <!-- Project cards end-->
      </div>
      <!-- Project files section end -->
      <div class="divid-line" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import LoadingImg from "/@/components/LoadingImg.vue";
import { useHomeBanner } from "/@/hooks/useHomeBanner";
import { usePortfolioCards } from "/@/hooks/usePortfolioCards";

const { bannerWrapper, windowWidth, x, y } = useHomeBanner();
const { listCardInfo, listType, listProfileCard, getStaticProjectRoute } = usePortfolioCards();
</script>
