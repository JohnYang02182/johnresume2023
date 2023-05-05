<template>
  <div class="container-outer">
		<div class="container">
			<div class="section-outer">
				<div class="section section-banner">
					<div class="banner_intro">
						<h2>{{ $t('HeaderIntroduce') }}</h2>
						<p class="headline_03" v-html="$t('Home.MainSelfIntro')" />
						<a href="https://johnyang02182.github.io/johnyang705202108/my-profile_page.html" class="button primary-button">{{ $t('Nav.InfoPageTag') }}</a>
					</div>
					<div class="banner_image">
						<img :src="GloSrc('/me_banner.png')" alt="banner">
					</div>
					<div v-for="item in 4" :key="item" class="banner_background" :class="`banner-0${item}`">
						<img :src="GloSrc('/pic_banner_bg.png')" alt="">
					</div>
				</div>
			</div>
			<div class="divid-line"></div>
			<div class="section section-profile">
				<h2>{{ $t('CommonTitle.MyWork') }}</h2>
				<template v-for="(item, index) in designCardInfo" :key="index">
					<a href="javascript:void(0)" @click="$router.push({path: `/project/detail/${item.params}`})" class="profile_card">
						<div class="profile_card-pic">
							<img :src="`${ httpDetect.test(item.bannerImg) ? item.bannerImg : GloSrc(''+item.bannerImg+'') }`" alt="profile">
						</div>
						<div class="profile_card-text">
							<p class="headline_02">{{ $t(item.title) }}</p>
							<p class="content-text time">{{ item.period }}</p>
							<div class="tips-area">
								<span class="tips-text" v-for="(tags,index) in item.tags" :key="index">{{ $t(tags) }}</span>
							</div>
						</div>
					</a>
				</template>
			</div>
			<div class="divid-line"></div>
			<div class="section section-codepratice">
				<h2>前端實作練習</h2>
				<a href="https://github.com/JohnYang02182/vueproject" target="_blank" class="profile_card code_card">
					<div class="profile_card-pic">
						<img :src="GloSrc('/pic_vue.png')" alt="profile">
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
						<img :src="GloSrc('/pic_banner_practice.png')" alt="profile">
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
			</div>
			<div class="divid-line" />
			<ChatWithChatGPT />
		</div>
	</div>
</template>
<script lang="ts" setup>
import { GloSrc } from '../../util/globalSrc'
import ChatWithChatGPT from './ChatWithChatGPT.vue'
import { designCardInfo } from '/@/setting/profolioCard'
const httpDetect = new RegExp(/http/g)
</script>