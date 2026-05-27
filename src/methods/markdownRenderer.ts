import MarkdownIt from 'markdown-it'
import type Token from 'markdown-it/lib/token.mjs'
import markdownItContainer from 'markdown-it-container'
import markdownItAttrs from 'markdown-it-attrs'
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
        if (part.startsWith('.')) result.class = part.slice(1)
        else if (part.startsWith('#')) result.id = part.slice(1)
    }
    return result
}

const md = new MarkdownIt({ html: true, linkify: true, typographer: true })

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
            console.log('cls = ', { cls: cls === '' ? 'empty string' : cls })
            const id = token.attrGet('id') ?? ''
            return `<div${cls ? ` class="${cls}"` : ''}${id ? ` id="${id}"` : ''}>\n`
        }
        return '</div>\n'
    },
})

/**
 * Core rule: pre-store container attrs on the token BEFORE markdown-it-attrs
 * strips {.class #id} from token.info.
 */
md.core.ruler.before('normalize', 'container_attrs', (state) => {
    for (const token of state.tokens) {
        if (token.type === 'container_div_open') {
            const { class: cls, id } = parseContainerAttrs(token.info)
            if (cls) token.attrSet('class', cls)
            if (id) token.attrSet('id', id)
        }
    }
})

// Plugin: {.class #id} attributes on inline elements — must load AFTER core rule
md.use(markdownItAttrs)

/**
 * Render a markdown string to sanitized HTML.
 * Supports:
 *   ::: div {.my-class #unique-id}
 *   content
 *   :::
 *
 *   inline text {.class #id}
 */
export function renderMarkdown(markdown: string): string {
    const html = md.render(markdown)
    return DOMPurify.sanitize(html)
}
