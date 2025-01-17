<template>
  <div class="container-outer">
    <div class="container">
      <div class="section section-intro-myself">
        <div class="intro-myself-image">
          <img src="/IMG/pic_myself.png" alt="mypic" :ref="isImgLoading" />
        </div>
        <div class="intro-myself-content">
          <p class="headline_02">{{ $t("PersonalPage.SectionOneTitle") }}</p>
          <p class="content-text">{{ $t("PersonalPage.SectionOneContent") }}</p>
        </div>
      </div>
      <div class="divid-line" />
      <div class="section section-skill">
        <h2 class="section-main-title">
          {{ $t("PersonalPage.SubTitleSkill") }}
        </h2>
        <p class="section-sub-title">
          {{ $t("PersonalPage.SkillRankExpertise", { num: "5" }) }}
        </p>
        <div class="tips-area">
          <p class="tips-text">{{ $t("Skill.UIAndUX") }}</p>
          <p class="tips-text">{{ $t("Skill.RWD") }}</p>
          <p class="tips-text">{{ $t("Skill.HTML5") }}</p>
          <p class="tips-text">{{ $t("Skill.SCSS") }}</p>
          <p class="tips-text">{{ $t("Skill.Sketch") }}</p>
          <p class="tips-text">{{ $t("Skill.iOS") }}</p>
          <p class="tips-text">{{ $t("Skill.Andriod") }}</p>
          <p class="tips-text">{{ $t("Skill.AI") }}</p>
          <p class="tips-text">{{ $t("Skill.PS") }}</p>
          <p class="tips-text">{{ $t("Skill.jQuery") }}</p>
        </div>
        <p class="section-sub-title">
          {{ $t("PersonalPage.SkillRange", { nums: "3", nume: "5" }) }}
        </p>
        <div class="tips-area">
          <p class="tips-text">{{ $t("Skill.JavaScript") }}</p>
          <p class="tips-text">{{ $t("Skill.GSAP") }}</p>
        </div>
        <p class="section-sub-title">
          {{ $t("PersonalPage.SkillRange", { nums: "1", nume: "3" }) }}
        </p>
        <div class="tips-area">
          <p class="tips-text">{{ $t("Skill.TypeScript") }}</p>
          <p class="tips-text">{{ $t("Skill.Vue3") }}</p>
          <p class="tips-text">{{ $t("Skill.Vite") }}</p>
          <p class="tips-text">{{ $t("Skill.i18n") }}</p>
        </div>
        <p class="section-sub-title">{{ $t("PersonalPage.SubTitleLang") }}</p>
        <div class="language-block">
          <div class="language-block_card">
            <p class="content-text lang-title">{{ $t("Common.CH") }}</p>
            <p class="inline-text lang-level">{{ $t("LangLevel.Native") }}</p>
          </div>
          <div class="language-block_card">
            <p class="content-text lang-title">{{ $t("Common.EN") }}</p>
            <p class="inline-text lang-level">{{ $t("LangLevel.Business") }}</p>
          </div>
          <div class="language-block_card">
            <p class="content-text lang-title">{{ $t("Common.JP") }}</p>
            <p class="inline-text lang-level">
              {{ $t("LangLevel.Passed", { exam: "JLPT N1" }) }}
            </p>
          </div>
        </div>
      </div>
      <div class="divid-line"></div>
      <div class="section section-work-history">
        <p class="section-sub-title">
          {{ $t("PersonalPage.SubTitleExperience") }}
        </p>
        <div class="work-block-area">
          <div class="work-block">
            <div class="work-title-block">
              <p class="work-company_title headline_05">
                {{ $t("WorkHistory5.Company") }}
              </p>
              <div class="divid-block"></div>
              <p class="work-job_title headline_05">
                {{ $t("Character.Engineer") }}
              </p>
            </div>
            <p class="work-time inline-text">{{ $t("WorkHistory5.Period") }}</p>
            <div class="work-content">
              <ul>
                <li v-for="workH5 in 2" :key="'w5' + workH5">
                  {{ $t("WorkHistory5.List0" + workH5 + "") }}
                </li>
              </ul>
            </div>
          </div>
          <div class="work-flow">
            <svg class="circle">
              <circle class="active" cx="10" cy="10" r="10"></circle>
            </svg>
            <div class="line"></div>
          </div>
        </div>
        <div class="work-block-area">
          <div class="work-block">
            <div class="work-title-block">
              <p class="work-company_title headline_04">
                {{ $t("WorkHistory4.Company") }}
              </p>
              <div class="divid-block"></div>
              <p class="work-job_title headline_04">
                {{ $t("Character.FEDeveloper") }}
              </p>
            </div>
            <p class="work-time inline-text">{{ $t("WorkHistory4.Period") }}</p>
            <div class="work-content">
              <ul>
                <li v-for="workH4 in 3" :key="'w4' + workH4">
                  {{ $t("WorkHistory4.List0" + workH4 + "") }}
                </li>
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
              <p class="work-company_title headline_03">
                {{ $t("WorkHistory3.Company") }}
              </p>
              <div class="divid-block"></div>
              <p class="work-job_title headline_03">
                {{ $t("Character.FEDeveloper") }}
              </p>
            </div>
            <p class="work-time inline-text">{{ $t("WorkHistory3.Period") }}</p>
            <div class="work-content">
              <ul>
                <li v-for="workH3 in 3" :key="'w3' + workH3">
                  {{ $t("WorkHistory3.List0" + workH3 + "") }}
                </li>
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
              <p class="work-company_title headline_03">
                {{ $t("WorkHistory2.Company") }}
              </p>
              <div class="divid-block"></div>
              <p class="work-job_title headline_03">
                {{ $t("Character.UIUXDesigner") }}
              </p>
            </div>
            <p class="work-time inline-text">{{ $t("WorkHistory2.Period") }}</p>
            <div class="work-content">
              <ul>
                <li v-for="workH2 in 5" :key="'w2' + workH2">
                  {{ $t("WorkHistory2.List0" + workH2 + "") }}
                </li>
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
              <p class="work-company_title headline_03">
                {{ $t("WorkHistory1.Company") }}
              </p>
              <div class="divid-block"></div>
              <p class="work-job_title headline_03">
                {{ $t("Character.UIUXDesigner") }}
              </p>
            </div>
            <p class="work-time inline-text">{{ $t("WorkHistory1.Period") }}</p>
            <div class="work-content">
              <ul>
                <li v-for="workH1 in 2" :key="'w3' + workH1">
                  {{ $t("WorkHistory1.List0" + workH1 + "") }}
                </li>
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
import { getImgUrl } from "../../util/globalSrc";
import { observeScroll, imageLazyLoad } from "../../util/lazyLoad";
const isImgLoading = (imgContents: any) => {
  console.log("personal trigger");
};
</script>
