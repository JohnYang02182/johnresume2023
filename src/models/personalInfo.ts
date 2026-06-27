import type { LanguageItem, SkillGroup, WorkHistoryItem } from "/@/interface/PersonalInfo"

export const skillGroups: SkillGroup[] = [
  {
    key: "expertise",
    titleKey: "PersonalPage.SkillRankExpertise",
    titleParams: { num: "5" },
    skills: [
      "Skill.UIAndUX",
      "Skill.RWD",
      "Skill.HTML5",
      "Skill.SCSS",
      "Skill.Sketch",
      "Skill.iOS",
      "Skill.Andriod",
      "Skill.AI",
      "Skill.PS",
      "Skill.jQuery"
    ]
  },
  {
    key: "intermediate",
    titleKey: "PersonalPage.SkillRange",
    titleParams: { nums: "3", nume: "5" },
    skills: ["Skill.JavaScript", "Skill.GSAP"]
  },
  {
    key: "beginner",
    titleKey: "PersonalPage.SkillRange",
    titleParams: { nums: "1", nume: "3" },
    skills: ["Skill.TypeScript", "Skill.Vue3", "Skill.Vite", "Skill.i18n"]
  }
]

export const languageItems: LanguageItem[] = [
  { nameKey: "Common.ZH-TW", levelKey: "LangLevel.Native" },
  { nameKey: "Common.EN", levelKey: "LangLevel.Business" },
  { nameKey: "Common.JA", levelKey: "LangLevel.Passed", levelParams: { exam: "JLPT N1" } }
]

export const workHistoryItems: WorkHistoryItem[] = [
  {
    key: "work-history-5",
    companyKey: "WorkHistory5.Company",
    jobKey: "Character.Engineer",
    periodKey: "WorkHistory5.Period",
    listKeyPrefix: "WorkHistory5",
    listCount: 2,
    headlineClass: "headline_05",
    active: true
  },
  {
    key: "work-history-4",
    companyKey: "WorkHistory4.Company",
    jobKey: "Character.FEDeveloper",
    periodKey: "WorkHistory4.Period",
    listKeyPrefix: "WorkHistory4",
    listCount: 3,
    headlineClass: "headline_04"
  },
  {
    key: "work-history-3",
    companyKey: "WorkHistory3.Company",
    jobKey: "Character.FEDeveloper",
    periodKey: "WorkHistory3.Period",
    listKeyPrefix: "WorkHistory3",
    listCount: 3,
    headlineClass: "headline_03"
  },
  {
    key: "work-history-2",
    companyKey: "WorkHistory2.Company",
    jobKey: "Character.UIUXDesigner",
    periodKey: "WorkHistory2.Period",
    listKeyPrefix: "WorkHistory2",
    listCount: 5,
    headlineClass: "headline_03"
  },
  {
    key: "work-history-1",
    companyKey: "WorkHistory1.Company",
    jobKey: "Character.UIUXDesigner",
    periodKey: "WorkHistory1.Period",
    listKeyPrefix: "WorkHistory1",
    listCount: 2,
    headlineClass: "headline_03"
  }
]
