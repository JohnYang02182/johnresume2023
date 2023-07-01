import { defineStore } from 'pinia'
import { setupI18n } from '../util/i18n'
import { app } from '../src/main'
interface State {
  lang: string,
  loading: boolean
}
const state: State = {
  lang: 'en',
  loading: false
}
export const useUserStore = defineStore('user', {
  state: () => state,
  actions: {
    async setLanguage(langParam: string){
      this.lang = langParam
      localStorage.setItem('lang', langParam)
    },
    getLanguage() {
      const thisLang = localStorage.getItem('lang') ?? 'en'
      this.setLanguage(thisLang)
      this.lang = thisLang
    },
    loadingStart() {
      this.loading = true
    },
    loadingEnd() {
      this.loading = false
    }
  }
})