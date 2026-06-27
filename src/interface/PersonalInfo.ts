export interface SkillGroup {
  key: string
  titleKey: string
  titleParams?: Record<string, string>
  skills: string[]
}

export interface LanguageItem {
  nameKey: string
  levelKey: string
  levelParams?: Record<string, string>
}

export interface WorkHistoryItem {
  key: string
  companyKey: string
  jobKey: string
  periodKey: string
  listKeyPrefix: string
  listCount: number
  headlineClass: string
  active?: boolean
}
