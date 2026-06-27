const OWNER = 'JohnYang02182'
const REPO = 'johnportfolio-content'
const RAW_BASE = `https://raw.githubusercontent.com/${OWNER}/${REPO}/main/public/uploads/`
const PER_PAGE = 10
const ALLOWED_LANGS = ['zh-TW', 'en', 'ja']

const CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
}

function jsonResponse(data, status = 200) {
    return new Response(JSON.stringify(data), {
        status,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    })
}

function decodeContent(b64) {
    const normalized = b64.replace(/\n/g, '')
    const binary = atob(normalized)
    const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0))
    return new TextDecoder('utf-8').decode(bytes)
}

/**
 * Minimal YAML parser for frontmatter preview fields.
 * Supports scalar values and simple block lists like tags.
 */
function parseFrontmatterScalars(raw) {
    const match = raw.match(/^---\r?\n([\s\S]*?)\n---/)
    if (!match) return {}

    const result = {}
    let currentListKey = ''

    for (const line of match[1].split('\n')) {
        const listItemMatch = line.match(/^\s*-\s*(.+)$/)
        if (listItemMatch && currentListKey) {
            result[currentListKey].push(listItemMatch[1].trim().replace(/^["']|["']$/g, ''))
            continue
        }

        if (/^[\s\t]/.test(line)) continue

        const colonIdx = line.indexOf(':')
        if (colonIdx === -1) {
            currentListKey = ''
            continue
        }

        const key = line.slice(0, colonIdx).trim()
        const val = line.slice(colonIdx + 1).trim().replace(/^["']|["']$/g, '')
        if (!key) continue

        if (!val) {
            result[key] = []
            currentListKey = key
            continue
        }

        result[key] = val
        currentListKey = ''
    }

    return result
}

function rewriteBannerImg(bannerImg) {
    if (!bannerImg) return ''
    if (bannerImg.startsWith('/uploads/')) {
        return RAW_BASE + bannerImg.slice('/uploads/'.length)
    }
    return bannerImg
}

function parseBoolean(value) {
    return value === true || value === 'true'
}

function createFallbackProject(slug) {
    return {
        slug,
        isCMS: true,
        name: slug,
        title: slug,
        bannerImg: '',
        link: '',
        team: '',
        period: '',
        character: '',
        tags: [],
        sideProject: false,
    }
}

export async function onRequestGet({ request, env }) {
    const { searchParams } = new URL(request.url)
    const langParam = searchParams.get('lang')
    const lang = ALLOWED_LANGS.includes(langParam) ? langParam : 'zh-TW'
    const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10))

    const ghHeaders = {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'johnresume-portfolio',
        ...(env.GITHUB_TOKEN ? { Authorization: `Bearer ${env.GITHUB_TOKEN}` } : {}),
    }

    // Step 1: list directory contents
    const dirUrl = `https://api.github.com/repos/${OWNER}/${REPO}/contents/content/projects/${lang}`
    let dirRes
    try {
        dirRes = await fetch(dirUrl, { headers: ghHeaders })
    } catch {
        return jsonResponse({ error: 'Failed to reach GitHub API' }, 502)
    }

    if (!dirRes.ok) {
        return jsonResponse(
            { error: 'Failed to list projects', githubStatus: dirRes.status },
            dirRes.status === 404 ? 404 : 502,
        )
    }

    const files = await dirRes.json()
    if (!Array.isArray(files)) {
        return jsonResponse({ error: 'Unexpected GitHub API response' }, 502)
    }

    const mdFiles = files.filter((f) => f.type === 'file' && f.name.endsWith('.md'))
    const total = mdFiles.length
    const totalPages = Math.max(1, Math.ceil(total / PER_PAGE))
    const safePage = Math.min(page, totalPages)
    const slice = mdFiles.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE)

    // Step 2: fetch each file in parallel and extract preview fields from frontmatter
    const items = await Promise.all(
        slice.map(async (file) => {
            const slug = file.name.replace(/\.md$/, '')
            try {
                const fileRes = await fetch(file.url, { headers: ghHeaders })
                if (!fileRes.ok) return createFallbackProject(slug)
                const fileData = await fileRes.json()
                const raw = decodeContent(fileData.content)
                const fm = parseFrontmatterScalars(raw)
                console.log("fm log = ", fm);
                return {
                    slug,
                    isCMS: true,
                    name: fm.name || slug,
                    title: fm.title || slug,
                    bannerImg: rewriteBannerImg(fm.bannerImg || ''),
                    link: fm.link || '',
                    team: fm.team || '',
                    period: fm.period || '',
                    character: fm.character || '',
                    tags: Array.isArray(fm.tags) ? fm.tags : [],
                    sideProject: parseBoolean(fm.sideProject),
                }
            } catch {
                return createFallbackProject(slug)
            }
        }),
    )

    return jsonResponse({ items, total, page: safePage, perPage: PER_PAGE, totalPages })
}

export async function onRequestOptions() {
    return new Response(null, { status: 204, headers: CORS_HEADERS })
}
