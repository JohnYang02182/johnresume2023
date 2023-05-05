import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'

export const SUPPORT_LOCALES = [
  {
    langOption: 'en',
    langName: 'English'
  }, {
    langOption: 'ja',
    langName: '日本語'
  }, {
    langOption: 'ch',
    langName: '繁體中文'
  }
]

export async function setupI18n(options:string) {
  const i18n = await createI18n({
    legacy: false,
    locale: options || 'en',
    fallbackLocale: options || 'en',
    sync: true,
    messages
  })
  try {
    console.log('setmes', messages )
    console.log('setops', options )
    i18n.global.locale.value = options
    console.log('global',i18n.global.locale.value)
  } finally {
     document.querySelector('html')!.setAttribute('lang', options)
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
