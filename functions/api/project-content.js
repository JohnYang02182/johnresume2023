const OWNER = 'JohnYang02182'
const REPO = 'johnportfolio-content'
const ALLOWED_LANGS = ['zh-TW', 'en', 'ja']
const SLUG_PATTERN = /^[a-zA-Z0-9._-]+$/

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

export async function onRequestGet({ request, env }) {
    const { searchParams } = new URL(request.url)
    const langParam = searchParams.get('lang')
    const slug = searchParams.get('slug') || ''
    const lang = ALLOWED_LANGS.includes(langParam) ? langParam : 'zh-TW'

    if (!SLUG_PATTERN.test(slug)) {
        return jsonResponse({ error: 'Invalid slug' }, 400)
    }

    const ghHeaders = {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'johnresume-portfolio',
        ...(env.GITHUB_TOKEN ? { Authorization: `Bearer ${env.GITHUB_TOKEN}` } : {}),
    }

    const fileUrl = `https://api.github.com/repos/${OWNER}/${REPO}/contents/content/projects/${lang}/${slug}.md`

    let fileRes
    try {
        fileRes = await fetch(fileUrl, { headers: ghHeaders })
    } catch {
        return jsonResponse({ error: 'Failed to reach GitHub API' }, 502)
    }

    if (!fileRes.ok) {
        return jsonResponse(
            { error: 'Failed to fetch project content', githubStatus: fileRes.status },
            fileRes.status === 404 ? 404 : 502,
        )
    }

    const fileData = await fileRes.json()
    const content = decodeContent(fileData.content)

    return jsonResponse({ content })
}

export async function onRequestOptions() {
    return new Response(null, { status: 204, headers: CORS_HEADERS })
}
