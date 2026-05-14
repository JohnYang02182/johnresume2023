import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useUserStore } from '../../../store/user'

describe('useUserStore', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
        localStorage.clear()
    })

    it('初始狀態：lang 預設為 en', () => {
        const store = useUserStore()
        expect(store.lang).toBe('en')
    })

    it('初始狀態：loading 預設為 false', () => {
        const store = useUserStore()
        expect(store.loading).toBe(false)
    })

    it('setLanguage：應更新 lang 並存入 localStorage', async () => {
        const store = useUserStore()
        await store.setLanguage('jp')
        expect(store.lang).toBe('jp')
        expect(localStorage.getItem('lang')).toBe('jp')
    })

    it('getLanguage：應從 localStorage 讀取語言', async () => {
        localStorage.setItem('lang', 'ch')
        const store = useUserStore()
        store.getLanguage()
        expect(store.lang).toBe('ch')
    })

    it('getLanguage：localStorage 無值時預設 en', () => {
        const store = useUserStore()
        store.getLanguage()
        expect(store.lang).toBe('en')
    })

    it('loadingStart：應將 loading 設為 true', () => {
        const store = useUserStore()
        store.loadingStart()
        expect(store.loading).toBe(true)
    })

    it('loadingEnd：應將 loading 設回 false', () => {
        const store = useUserStore()
        store.loadingStart()
        store.loadingEnd()
        expect(store.loading).toBe(false)
    })

    it('loadingStart / loadingEnd 連續呼叫', () => {
        const store = useUserStore()
        store.loadingStart()
        expect(store.loading).toBe(true)
        store.loadingEnd()
        expect(store.loading).toBe(false)
        store.loadingStart()
        expect(store.loading).toBe(true)
    })
})
