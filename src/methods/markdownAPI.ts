import { get, githubClient } from '../api/common/APIMethod'
import type { GitHubContentsResponse, GlobalAtobBuffer } from '../api/interface/GitHubAPI'

const OWNER = import.meta.env.VITE_GITHUB_OWNER
const REPO = import.meta.env.VITE_GITHUB_REPO

/**
 * Fetch a markdown file from the GitHub repository using the official REST API
 * Endpoint: GET /repos/{owner}/{repo}/contents/{path}
 * @param path - e.g. `/content/projects/zh-TW/build-a-cms-service.md`
 */
export async function getMarkdown(path: string): Promise<string> {
    const apiPath = `/repos/${OWNER}/${REPO}/contents${path}`

    try {
        const res = await get<GitHubContentsResponse>(githubClient, apiPath)
        const normalized = res.content.replace(/\n/g, '')
        return decodeBase64(normalized)
    } catch (error) {
        console.error(`Failed to fetch markdown content from ${apiPath}:`, error)
        throw error
    }
}

function decodeBase64(b64: string): string {
    const G = globalThis as unknown as GlobalAtobBuffer
    if (G.Buffer) {
        // Node: Buffer natively handles UTF-8
        return G.Buffer.from(b64, 'base64').toString('utf-8')
    }
    if (typeof G.atob === 'function') {
        // Browser: atob returns a Latin-1 binary string,
        // must re-encode as UTF-8 bytes then decode
        const binary = G.atob(b64)
        const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0))
        return new TextDecoder('utf-8').decode(bytes)
    }
    return decodeBase64Poly(b64)
}

function decodeBase64Poly(b64: string): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
    let str = ''
    let i = 0
    while (i < b64.length) {
        const enc1 = chars.indexOf(b64.charAt(i++))
        const enc2 = chars.indexOf(b64.charAt(i++))
        const enc3 = chars.indexOf(b64.charAt(i++))
        const enc4 = chars.indexOf(b64.charAt(i++))
        str += String.fromCharCode((enc1 << 2) | (enc2 >> 4))
        if (enc3 !== 64) str += String.fromCharCode(((enc2 & 15) << 4) | (enc3 >> 2))
        if (enc4 !== 64) str += String.fromCharCode(((enc3 & 3) << 6) | enc4)
    }
    return decodeURIComponent(escape(str))
}