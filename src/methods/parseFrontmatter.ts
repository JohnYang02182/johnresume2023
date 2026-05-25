import yaml from 'js-yaml'

export interface FrontmatterResult {
    data: Record<string, unknown>
    content: string
}

/**
 * Browser-safe frontmatter parser using js-yaml.
 * js-yaml has no Node.js Buffer dependency and works in the browser.
 */
export function parseFrontmatter(raw: string): FrontmatterResult {
    const match = raw.match(/^---\r?\n([\s\S]*?)\n---\r?\n?([\s\S]*)$/)
    if (!match) {
        return { data: {}, content: raw }
    }

    let data: Record<string, unknown> = {}
    try {
        const parsed = yaml.load(match[1])
        if (parsed && typeof parsed === 'object') {
            data = parsed as Record<string, unknown>
        }
    } catch (e) {
        console.warn('Failed to parse frontmatter YAML:', e)
    }

    return { data, content: match[2] }
}
