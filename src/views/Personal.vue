<template>
  <div class="container-outer">
		<div class="container">
			<div class="section section-intro-myself">
				<div class="intro-myself-image">
					<img :src="GloSrc('/pic_myself.png')" alt="mypic">
				</div>
				<div class="intro-myself-content">
					<p class="headline_02">Hi，我是John，是一名前端工程 / 網頁設計師</p>
					<p class="content-text">HTML / CSS / Javascript 有五年經驗。從網頁設計的圖像設計、版型切版做為起點逐步深入前端領域，最開始學習活用jQuery實現基本動態效果、串接api，後面開始為了深入Javascript理解js本質原理開始只使用JS，這過程中對前端技術的熱情有增無減，持續通過各式網路資源增強自己的前端實力。</p>
					<p class="content-text">在三個月前開始透過Udemy學習Vue.js，將課程中的練習以及筆記分別記錄在github以及linked。</p>
				</div>
			</div>
			<div class="divid-line"></div>
			<div class="section section-skill">
				<p class="section-sub-title">擅長技能</p>
				<div class="tips-area">
					<p class="tips-text">網頁設計</p>
					<p class="tips-text">RWD</p>
					<p class="tips-text">HTML5</p>
					<p class="tips-text">SCSS</p>
					<p class="tips-text">Javascript</p>
					<p class="tips-text">GSAP</p>
					<p class="tips-text">jQuery</p>
				</div>
				<p class="section-sub-title">語言能力</p>
				<div class="language-block">
					<div class="language-block_card">
						<p class="content-text lang-title">繁體中文</p>
						<p class="inline-text lang-level">母語</p>
					</div>
					<div class="language-block_card">
						<p class="content-text lang-title">英文</p>
						<p class="inline-text lang-level">TOEIC 500</p>
					</div>
					<div class="language-block_card">
						<p class="content-text lang-title">日文</p>
						<p class="inline-text lang-level">N3程度</p>
					</div>
				</div>
			</div>
			<div class="divid-line"></div>
			<div class="section section-work-history">
				<p class="section-sub-title">工作經歷</p>
				<div class="work-block-area">
					<div class="work-block">
						<div class="work-title-block">
							<p class="work-company_title headline_03">環盛有限公司</p>
							<div class="divid-block"></div>
							<p class="work-job_title headline_03">UI設計師</p>
						</div>
						<p class="work-time inline-text">2016~2017</p>
						<div class="work-content">
							<ul>
								<li>與PM溝通需求，並製作草稿圖(Wireframe)進行需求確認。</li>
								<li>設計產品介面視覺，製作視覺規範及視覺相關文件。</li>
								<li>前端語法(HTML5/Sass/JQ/JS)撰寫。</li>
								<li>製作各式RWD網頁及Mobile版網站。</li>
								<li>製作介面所需的視覺元件，如：banner、icon等。</li>
								<li>製作系統架構圖、介面流程圖(UI-Flow)。</li>
							</ul>
						</div>
					</div>
					<div class="work-flow">
						<svg class="circle">
							<circle cx="10" cy="10" r="10"></circle>
						</svg>
						<div class="line"></div>
					</div>
				</div>
				<div class="work-block-area">
					<div class="work-block">
						<div class="work-title-block">
							<p class="work-company_title headline_03">旺普網路有限公司</p>
							<div class="divid-block"></div>
							<p class="work-job_title headline_03">UI設計師</p>
						</div>
						<p class="work-time inline-text">2018~2021</p>
						<div class="work-content">
							<ul>
								<li>設計巴哈姆特動態牆APP(Android、iOS) 。</li>
								<li>設計新版巴哈姆特APP(Android、iOS) 。</li>
								<li>設計巴哈姆特新版商城改版(含HTML，SCSS)。</li>
								<li>設計巴哈姆特新版動態牆網頁版(含HTML，SCSS) 。</li>
								<li>設計巴哈姆特新版動畫瘋網頁版(含HTML，SCSS) 。</li>
								<li>繪製節慶主題賀年卡。</li>
								<li>製作GNN年度資料視覺化。</li>
								<li>製作電玩展場刊--產品介紹部分 。</li>
								<li>繪製廠商連動banner。</li>
							</ul>
						</div>
					</div>
					<div class="work-flow">
						<svg class="circle">
							<circle cx="10" cy="10" r="10"></circle>
						</svg>
						<div class="line"></div>
					</div>
				</div>
			</div>
			<div class="divid-line"></div>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { GloSrc } from '../../util/globalSrc'
</script>