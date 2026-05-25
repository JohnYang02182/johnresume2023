import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import ProjectContent from '/@/views/projectDetail/components/ProjectContent.vue'

// Mock getMarkdown
vi.mock('/@/methods/markdownAPI', () => ({
    getMarkdown: vi.fn()
}))

// Mock ENDPOINTS
vi.mock('/@/api/ENDPOINTS', () => ({
    ENDPOINTS: {
        GITHUBREPOCMSTW: '/content/projects/zh-TW/test.md'
    }
}))

import { getMarkdown } from '/@/methods/markdownAPI'

const MOCK_MARKDOWN = `---
title: 測試專案
date: 2024-01-01
tags:
  - vue
  - typescript
---

# 內文標題

這裡是 **markdown** 內文。
`

describe('ProjectContent.vue', () => {
    beforeEach(() => {
        vi.clearAllMocks()
        vi.mocked(getMarkdown).mockResolvedValue(MOCK_MARKDOWN)
    })

    it('元件應成功掛載', () => {
        const wrapper = mount(ProjectContent)
        expect(wrapper.exists()).toBe(true)
    })

    it('onMounted 後應呼叫 getMarkdown 一次', async () => {
        mount(ProjectContent)
        await flushPromises()
        expect(getMarkdown).toHaveBeenCalledTimes(1)
    })

    it('metadata 應正確解析 frontmatter', async () => {
        const wrapper = mount(ProjectContent)
        await flushPromises()
        const pre = wrapper.find('pre')
        expect(pre.exists()).toBe(true)
        const json = JSON.parse(pre.text())
        expect(json.title).toBe('測試專案')
        expect(json.date).toBeDefined()
        expect(json.tags).toContain('vue')
    })

    it('應將 markdown content 渲染為 HTML', async () => {
        const wrapper = mount(ProjectContent)
        await flushPromises()
        const html = wrapper.find('div[v-html], div').html()
        expect(html).toContain('<h1')
        expect(html).toContain('<strong>')
    })

    it('getMarkdown 失敗時應呼叫 console.error', async () => {
        vi.mocked(getMarkdown).mockRejectedValueOnce(new Error('Network Error'))
        const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => { })
        const wrapper = mount(ProjectContent)
        await flushPromises()
        expect(errorSpy).toHaveBeenCalled()
        expect(errorSpy.mock.calls[0][0]).toContain('Failed to fetch')
        expect(wrapper.exists()).toBe(true)
        errorSpy.mockRestore()
    })
})
