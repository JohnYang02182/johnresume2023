import { defineStore } from 'pinia'
import { setupI18n } from '../util/i18n'
import { app } from '../src/main'
interface State {
  lang: string,
}
const state: State = {
  lang: 'en'
}
export const useUserStore = defineStore('user', {
  state: () => state,
  actions: {
    // async loadTranslations(lang: string){
    //   const transLangList = await import(`../locales/${lang}.json`)
    //   this.lang = lang
    // },
    async setLanguage(langParam: string){
      // const i18nset =  await setupI18n(langParam)
      this.lang = langParam
      console.log('setlanguage')
      localStorage.setItem('lang', langParam)
    },
    getLanguage() {
      const thisLang = localStorage.getItem('lang') ?? 'en'
      this.setLanguage(thisLang)
      this.lang = thisLang
    }
  }
})
// i18n.global.watchLocale((newLocale) => {
//   useI18n().setLanguage(newLocale);
// });