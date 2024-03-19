import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'
export const SUPPORT_LOCALES = [
  {
    langOption: 'en',
    langName: 'English'
  }, {
    langOption: 'jp',
    langName: '日本語'
  }, {
    langOption: 'ch',
    langName: '繁體中文'
  }
]

export function setupI18n() {
  const i18n = createI18n({
    globalInjection: true,
    legacy: false,
    locale: localStorage.getItem('lang') ?? 'en',
    fallbackLocale: localStorage.getItem('lang') ?? 'en',
    sync: true,
    messages
  })
  try {
    // console.log('setmes', localStorage.getItem('lang') )
    i18n.global.locale.value = localStorage.getItem('lang') ? localStorage.getItem('lang')! : 'en'
    // console.log('global',i18n.global.locale.value)
  } finally {
      document.querySelector('html')!.setAttribute('lang', localStorage.getItem('lang') ?? 'en')
      return i18n
  }
}

// export function setI18nLanguage(i18n: I18n, locale:string) {
//   if (i18n.mode === 'legacy') {
//     console.log('aaa')
//     i18n.global.locale = locale
//   } 
//   /**
//    * NOTE:
//    * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
//    * The following is an example for axios.
//    *
//    * axios.defaults.headers.common['Accept-Language'] = locale
//    */
// }
