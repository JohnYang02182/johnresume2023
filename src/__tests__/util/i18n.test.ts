import { describe, it, expect } from 'vitest'
import { SUPPORT_LOCALES } from '../../../util/i18n'

describe('i18n util', () => {
    describe('SUPPORT_LOCALES', () => {
        it('應包含 3 種語言', () => {
            expect(SUPPORT_LOCALES).toHaveLength(3)
        })

        it('應包含 en、ja、zh-TW', () => {
            const options = SUPPORT_LOCALES.map((l) => l.langOption)
            expect(options).toContain('en')
            expect(options).toContain('ja')
            expect(options).toContain('zh-TW')
        })

        it('每個語言項目應有 langOption 與 langName', () => {
            SUPPORT_LOCALES.forEach((locale) => {
                expect(locale).toHaveProperty('langOption')
                expect(locale).toHaveProperty('langName')
                expect(typeof locale.langOption).toBe('string')
                expect(typeof locale.langName).toBe('string')
            })
        })

        it('English 對應 en', () => {
            const en = SUPPORT_LOCALES.find((l) => l.langOption === 'en')
            expect(en?.langName).toBe('English')
        })

        it('日本語 對應 ja', () => {
            const ja = SUPPORT_LOCALES.find((l) => l.langOption === 'ja')
            expect(ja?.langName).toBe('日本語')
        })

        it('繁體中文 對應 zh-TW', () => {
            const zhTW = SUPPORT_LOCALES.find((l) => l.langOption === 'zh-TW')
            expect(zhTW?.langName).toBe('繁體中文')
        })
    })
})
