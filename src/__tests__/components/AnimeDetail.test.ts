import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AnimeDetail from '/@/views/projectDetail/components/AnimeDetail.vue'

describe('AnimeDetail.vue', () => {
    const createWrapper = () =>
        mount(AnimeDetail, {
            global: {
                stubs: {
                    Loading: true
                }
            }
        })

    it('元件應成功掛載', () => {
        const wrapper = createWrapper()
        expect(wrapper.exists()).toBe(true)
    })

    it('應渲染 .section-body 根元素', () => {
        const wrapper = createWrapper()
        expect(wrapper.find('.section-body').exists()).toBe(true)
    })

    it('應渲染 banner 區域', () => {
        const wrapper = createWrapper()
        expect(wrapper.find('.banner-wrapper').exists()).toBe(true)
    })

    it('應渲染 "My Work" 標題文字', () => {
        const wrapper = createWrapper()
        expect(wrapper.find('.banner-content-title').text()).toBe('My Work')
    })

    it('應渲染 5 張 process 卡片', () => {
        const wrapper = createWrapper()
        const cards = wrapper.findAll('.card')
        expect(cards.length).toBe(5)
    })

    it('應渲染 3 個 ProjectTitle 主標題 h2', () => {
        const wrapper = createWrapper()
        const titles = wrapper.findAll('h2.main-title')
        // 5 個 process 卡片中沒有 h2，主區塊有 ProjectTitle01~04
        expect(titles.length).toBeGreaterThanOrEqual(4)
    })

    it('team 清單應有 3 個成員條目', () => {
        const wrapper = createWrapper()
        const teamLists = wrapper.findAll('.list-wrapper:not(.dot-style) .list')
        // 第一個 list-wrapper 是 team 清單
        const firstListWrapper = wrapper.findAll('.list-wrapper')[0]
        const teamItems = firstListWrapper.findAll('.list')
        expect(teamItems.length).toBe(3)
    })

    it('問題清單應有 3 個問題條目', () => {
        const wrapper = createWrapper()
        const dotLists = wrapper.find('.list-wrapper.dot-style')
        const problemItems = dotLists.findAll('.list')
        expect(problemItems.length).toBe(3)
    })

    it('process 卡片的 number badge 應顯示 1 到 5', () => {
        const wrapper = createWrapper()
        const nums = wrapper.findAll('.num')
        const numTexts = nums.map((n) => n.text())
        expect(numTexts).toContain('1')
        expect(numTexts).toContain('2')
        expect(numTexts).toContain('3')
        expect(numTexts).toContain('4')
        expect(numTexts).toContain('5')
    })

    it('外部連結應指向 ani.gamer.com.tw', () => {
        const wrapper = createWrapper()
        const link = wrapper.find('a.link')
        expect(link.attributes('href')).toBe('https://ani.gamer.com.tw/')
        expect(link.attributes('target')).toBe('_blank')
    })
})
