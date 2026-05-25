import { describe, it, expect } from 'vitest'
import { parseFrontmatter } from '/@/methods/parseFrontmatter'

const FULL_MD = `---
title: 測試專案
date: 2024-01-01
published: true
count: 42
tags:
  - vue
  - typescript
---

# 內文標題

這裡是 **markdown** 內文。
`

describe('parseFrontmatter', () => {
    it('應正確分離 frontmatter 與 content', () => {
        const { data, content } = parseFrontmatter(FULL_MD)
        expect(data).toBeDefined()
        expect(content).toContain('# 內文標題')
        expect(content).toContain('**markdown**')
    })

    it('應解析字串欄位', () => {
        const { data } = parseFrontmatter(FULL_MD)
        expect(data.title).toBe('測試專案')
    })

    it('應解析 ISO date 欄位為 Date 物件', () => {
        const { data } = parseFrontmatter(FULL_MD)
        expect(data.date).toBeInstanceOf(Date)
    })

    it('應解析 boolean 欄位', () => {
        const { data } = parseFrontmatter(FULL_MD)
        expect(data.published).toBe(true)
    })

    it('應解析 number 欄位', () => {
        const { data } = parseFrontmatter(FULL_MD)
        expect(data.count).toBe(42)
    })

    it('應解析 block sequence 為陣列', () => {
        const { data } = parseFrontmatter(FULL_MD)
        expect(Array.isArray(data.tags)).toBe(true)
        expect(data.tags).toContain('vue')
        expect(data.tags).toContain('typescript')
    })

    it('無 frontmatter 時應回傳空 data 與原始內容', () => {
        const raw = '# 沒有 frontmatter\n\n內文'
        const { data, content } = parseFrontmatter(raw)
        expect(data).toEqual({})
        expect(content).toBe(raw)
    })

    it('應支援單引號字串值', () => {
        const md = `---\ntitle: '單引號標題'\n---\n內文`
        const { data } = parseFrontmatter(md)
        expect(data.title).toBe('單引號標題')
    })

    it('應支援雙引號字串值', () => {
        const md = `---\ntitle: "雙引號標題"\n---\n內文`
        const { data } = parseFrontmatter(md)
        expect(data.title).toBe('雙引號標題')
    })
})
