import MarkdownIt from 'markdown-it'
import type Token from 'markdown-it/lib/token.mjs'
import markdownItContainer from 'markdown-it-container'
import markdownItAttrs from 'markdown-it-attrs'
import markdownItTaskLists from 'markdown-it-task-lists'
import DOMPurify from "dompurify"

/**
 * Matches {.className #id} inside a container info string.
 * Both class and id are optional and non-fixed.
 */
const ATTR_RE = /\{([^}]*)\}/

interface ContainerAttrs {
    class: string
    id: string
}

function parseContainerAttrs(info: string): ContainerAttrs {
    const match = ATTR_RE.exec(info)
    const result: ContainerAttrs = { class: '', id: '' }
    if (!match) return result
    for (const part of match[1].trim().split(/\s+/)) {
        if (part.startsWith('.')) result.class = result.class ? `${result.class} ${part.slice(1)}` : part.slice(1)
        else if (part.startsWith('#')) result.id = part.slice(1)
    }
    return result
}

function applyContainerAttrs(token: Token, info: string) {
    const { class: cls, id } = parseContainerAttrs(info)
    if (cls) token.attrJoin('class', cls)
    if (id) token.attrSet('id', id)
}

function transferTokenAttrs(source: Token, target: Token) {
    const cls = source.attrGet('class')
    const id = source.attrGet('id')
    if (cls) target.attrJoin('class', cls)
    if (id) target.attrSet('id', id)
}

const md = new MarkdownIt({ html: true, linkify: true, typographer: true })

// Plugin: [x] / [ ] task list items
md.use(markdownItTaskLists, { label: true })

/**
 * Custom container: ::: div {.my-class #unique-id} ... :::
 * class and id are optional and non-fixed.
 */
md.use(markdownItContainer, 'div', {
    validate: (params: string) => params.trim().startsWith('div'),
    render(tokens: Token[], idx: number) {
        const token = tokens[idx]
        if (token.nesting === 1) {
            const cls = token.attrGet('class') ?? ''
            const id = token.attrGet('id') ?? ''
            return `<div${cls ? ` class="${cls}"` : ''}${id ? ` id="${id}"` : ''}>\n`
        }
        return '</div>\n'
    },
})

for (const listTag of ['ul', 'ol']) {
    md.use(markdownItContainer, listTag, {
        validate: (params: string) => params.trim().startsWith(listTag),
        render(tokens: Token[], idx: number) {
            if (tokens[idx].nesting === 1) {
                const listToken = tokens[idx + 1]
                const expectedType = listTag === 'ul' ? 'bullet_list_open' : 'ordered_list_open'
                if (listToken?.type === expectedType) {
                    transferTokenAttrs(tokens[idx], listToken)
                    applyContainerAttrs(listToken, tokens[idx].info)
                }
            }
            return ''
        }
    })
}

// Plugin: {.class #id} attributes on inline elements and block containers.
md.use(markdownItAttrs)

/**
 * Render a markdown string to sanitized HTML.
 * Supports:
 *   ::: div {.my-class #unique-id}
 *   content
 *   :::
 *
 *   ::: ul {.list-wrapper}
 *   - list item
 *   :::
 *
 *   inline text {.class #id}
 */
export function renderMarkdown(markdown: string): string {
    const html = md.render(markdown)
    return DOMPurify.sanitize(html)
}
