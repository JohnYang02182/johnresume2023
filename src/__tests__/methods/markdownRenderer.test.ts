import { describe, expect, it } from 'vitest'
import { renderMarkdown } from '/@/methods/markdownRenderer'

describe('renderMarkdown', () => {
    it('renders class attributes on fenced unordered lists', () => {
        const html = renderMarkdown(`::: ul {.list-wrapper}
- 每新增一次內容就會需要新增 view page，style 也需要調整。
- Google Sheets 不適合用來當作新增文章的編輯器。
:::`)

        expect(html).toContain('<ul class="list-wrapper">')
        expect(html).toContain('<li>每新增一次內容就會需要新增 view page，style 也需要調整。</li>')
        expect(html).toContain('<li>Google Sheets 不適合用來當作新增文章的編輯器。</li>')
        expect(html).not.toContain('<ul class="list-wrapper">\n<ul>')
    })

    it('renders class attributes on fenced ordered lists', () => {
        const html = renderMarkdown(`::: ol {.list-wrapper}
1. First
2. Second
:::`)

        expect(html).toContain('<ol class="list-wrapper">')
        expect(html).toContain('<li>First</li>')
        expect(html).toContain('<li>Second</li>')
        expect(html).not.toContain('<ol class="list-wrapper">\n<ol>')
    })
})
