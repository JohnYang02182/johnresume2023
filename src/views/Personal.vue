<template>
  <div class="container-outer">
    <div class="container">
      <div class="section section-intro-myself">
        <div class="intro-myself-image">
          <img src="/IMG/pic_myself.png" alt="mypic" />
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
        <template v-for="skillGroup in skillGroups" :key="skillGroup.key">
          <p class="section-sub-title">
            {{ $t(skillGroup.titleKey, skillGroup.titleParams || {}) }}
          </p>
          <div class="tips-area">
            <p
              class="tips-text"
              v-for="skill in skillGroup.skills"
              :key="skill"
            >
              {{ $t(skill) }}
            </p>
          </div>
        </template>
        <p class="section-sub-title">{{ $t("PersonalPage.SubTitleLang") }}</p>
        <div class="language-block">
          <div
            class="language-block_card"
            v-for="language in languageItems"
            :key="language.nameKey"
          >
            <p class="content-text lang-title">{{ $t(language.nameKey) }}</p>
            <p class="inline-text lang-level">
              {{ $t(language.levelKey, language.levelParams || {}) }}
            </p>
          </div>
        </div>
      </div>
      <div class="divid-line"></div>
      <div class="section section-work-history">
        <p class="section-sub-title">
          {{ $t("PersonalPage.SubTitleExperience") }}
        </p>
        <div
          class="work-block-area"
          v-for="workHistory in workHistoryItems"
          :key="workHistory.key"
        >
          <div class="work-block">
            <div class="work-title-block">
              <p :class="['work-company_title', workHistory.headlineClass]">
                {{ $t(workHistory.companyKey) }}
              </p>
              <div class="divid-block"></div>
              <p :class="['work-job_title', workHistory.headlineClass]">
                {{ $t(workHistory.jobKey) }}
              </p>
            </div>
            <p class="work-time inline-text">{{ $t(workHistory.periodKey) }}</p>
            <div class="work-content">
              <ul>
                <li
                  v-for="workIndex in workHistory.listCount"
                  :key="`${workHistory.key}-${workIndex}`"
                >
                  {{ $t(`${workHistory.listKeyPrefix}.List0${workIndex}`) }}
                </li>
              </ul>
            </div>
          </div>
          <div class="work-flow">
            <svg class="circle">
              <circle
                :class="{ active: workHistory.active }"
                cx="10"
                cy="10"
                r="10"
              ></circle>
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
import { languageItems, skillGroups, workHistoryItems } from "/@/models/personalInfo";
</script>
