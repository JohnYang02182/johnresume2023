import { describe, it, expect, vi, afterEach } from 'vitest'
// @ts-expect-error – plain JS file with no types
import { onRequestGet } from '../../../functions/callback.js'

const STATE_COOKIE = 'github-oauth-state'
const VALID_STATE = 'abc-123'

function makeRequest(params: Record<string, string>, stateCookie = VALID_STATE) {
    const url = new URL('https://example.com/callback')
    for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v)
    return new Request(url.toString(), {
        headers: { Cookie: `${STATE_COOKIE}=${stateCookie}` },
    })
}

const validEnv = { GITHUB_CLIENT_ID: 'client-id', G_C_S: 'client-secret' }

afterEach(() => vi.restoreAllMocks())

// ---------------------------------------------------------------------------
// Error paths
// ---------------------------------------------------------------------------
describe('callback.js – onRequestGet error paths', () => {
    it('returns error HTML when GitHub sends an error param', async () => {
        const req = makeRequest({ error: 'access_denied', error_description: 'User denied', state: VALID_STATE })
        const res = await onRequestGet({ request: req, env: validEnv })
        const html = await res.text()
        expect(html).toContain('GITHUB_AUTHORIZATION_DENIED')
        expect(html).toContain('User denied')
    })

    it('returns CSRF error when state does not match cookie', async () => {
        const req = makeRequest({ code: 'code-xyz', state: 'wrong-state' }, VALID_STATE)
        const res = await onRequestGet({ request: req, env: validEnv })
        const html = await res.text()
        expect(html).toContain('CSRF_DETECTED')
    })

    it('returns CSRF error when state cookie is missing', async () => {
        const url = new URL('https://example.com/callback')
        url.searchParams.set('code', 'code-xyz')
        url.searchParams.set('state', VALID_STATE)
        const req = new Request(url.toString()) // no Cookie header
        const res = await onRequestGet({ request: req, env: validEnv })
        const html = await res.text()
        expect(html).toContain('CSRF_DETECTED')
    })

    it('returns error when code is missing', async () => {
        const req = makeRequest({ state: VALID_STATE })
        const res = await onRequestGet({ request: req, env: validEnv })
        const html = await res.text()
        expect(html).toContain('AUTH_CODE_REQUEST_FAILED')
    })

    it('returns error when env vars are missing', async () => {
        const req = makeRequest({ code: 'code-xyz', state: VALID_STATE })
        const res = await onRequestGet({ request: req, env: {} })
        const html = await res.text()
        expect(html).toContain('TOKEN_CONFIGURATION_ERROR')
    })

    it('returns error when GitHub API returns non-ok HTTP status', async () => {
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('', { status: 500 })))
        const req = makeRequest({ code: 'code-xyz', state: VALID_STATE })
        const res = await onRequestGet({ request: req, env: validEnv })
        const html = await res.text()
        expect(html).toContain('TOKEN_RESPONSE_FAILED')
    })

    it('returns error when token response JSON contains error field', async () => {
        const body = JSON.stringify({ error: 'bad_verification_code', error_description: 'Code expired' })
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(body, { status: 200 })))
        const req = makeRequest({ code: 'old-code', state: VALID_STATE })
        const res = await onRequestGet({ request: req, env: validEnv })
        const html = await res.text()
        expect(html).toContain('TOKEN_EXCHANGE_FAILED')
        expect(html).toContain('Code expired')
    })

    it('returns error when token response has no access_token', async () => {
        const body = JSON.stringify({ scope: 'repo,user', token_type: 'bearer' })
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(body, { status: 200 })))
        const req = makeRequest({ code: 'code-xyz', state: VALID_STATE })
        const res = await onRequestGet({ request: req, env: validEnv })
        const html = await res.text()
        expect(html).toContain('TOKEN_MISSING')
    })

    it('returns generic error when fetch throws', async () => {
        vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('network failure')))
        const req = makeRequest({ code: 'code-xyz', state: VALID_STATE })
        const res = await onRequestGet({ request: req, env: validEnv })
        const html = await res.text()
        expect(html).toContain('TOKEN_REQUEST_FAILED')
    })
})

// ---------------------------------------------------------------------------
// Success path
// ---------------------------------------------------------------------------
describe('callback.js – onRequestGet success path', () => {
    it('returns success HTML with the access token in the postMessage', async () => {
        const body = JSON.stringify({ access_token: 'gho_test_token', token_type: 'bearer' })
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(body, { status: 200 })))
        const req = makeRequest({ code: 'code-xyz', state: VALID_STATE })
        const res = await onRequestGet({ request: req, env: validEnv })
        const html = await res.text()
        expect(html).toContain('gho_test_token')
        expect(html).toContain('authorization:github:success:')
    })

    it('always clears the state cookie in the response', async () => {
        // test on both error and success paths
        const req = makeRequest({ state: VALID_STATE }) // triggers AUTH_CODE_REQUEST_FAILED
        const res = await onRequestGet({ request: req, env: validEnv })
        const cookie = res.headers.get('Set-Cookie') ?? ''
        expect(cookie).toContain(`${STATE_COOKIE}=deleted`)
        expect(cookie).toContain('Max-Age=0')
    })
})

// ---------------------------------------------------------------------------
// outputHTML handshake structure
// ---------------------------------------------------------------------------
describe('callback.js – outputHTML handshake (success & error)', () => {
    it('success HTML contains setInterval and setTimeout', async () => {
        const body = JSON.stringify({ access_token: 'gho_test_token' })
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(body, { status: 200 })))
        const req = makeRequest({ code: 'code-xyz', state: VALID_STATE })
        const res = await onRequestGet({ request: req, env: validEnv })
        const html = await res.text()
        expect(html).toContain('setInterval')
        expect(html).toContain('setTimeout')
    })

    it('registers message listener before posting authorizing signal', async () => {
        const req = makeRequest({ state: VALID_STATE }) // error path
        const res = await onRequestGet({ request: req, env: validEnv })
        const html = await res.text()
        const listenerIdx = html.indexOf("if (data === 'authorizing:github')")
        const firstPostIdx = html.indexOf("postMessage('authorizing:github'")
        expect(listenerIdx).toBeGreaterThan(-1)
        expect(firstPostIdx).toBeGreaterThan(-1)
        expect(listenerIdx).toBeLessThan(firstPostIdx)
    })
})
