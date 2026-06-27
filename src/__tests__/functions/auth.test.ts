import { describe, it, expect } from 'vitest'
// @ts-expect-error – plain JS file with no types
import { onRequestGet } from '../../../functions/auth.js'

describe('auth.js – onRequestGet', () => {
    it('returns 500 error HTML when GITHUB_CLIENT_ID is missing', async () => {
        const res = await onRequestGet({ env: {} })
        expect(res.status).toBe(500)
        const html = await res.text()
        expect(html).toContain('AUTH_CONFIGURATION_ERROR')
        expect(html).toContain('GitHub authorization is not configured correctly.')
    })

    it('returns 302 redirect when GITHUB_CLIENT_ID is present', async () => {
        const res = await onRequestGet({ env: { GITHUB_CLIENT_ID: 'test-client-id' } })
        expect(res.status).toBe(302)
        const location = res.headers.get('Location') ?? ''
        expect(location).toMatch(/^https:\/\/github\.com\/login\/oauth\/authorize/)
        expect(location).toContain('client_id=test-client-id')
        expect(location).toContain('scope=repo%2Cuser')
        expect(location).toContain('state=')
    })

    it('sets a short-lived HttpOnly Secure state cookie on redirect', async () => {
        const res = await onRequestGet({ env: { GITHUB_CLIENT_ID: 'client-id' } })
        const cookie = res.headers.get('Set-Cookie') ?? ''
        expect(cookie).toMatch(/github-oauth-state=[0-9a-f-]+/)
        expect(cookie).toContain('HttpOnly')
        expect(cookie).toContain('Secure')
        expect(cookie).toContain('Max-Age=300')
        expect(cookie).toContain('SameSite=Lax')
    })

    it('state in cookie matches state in redirect URL', async () => {
        const res = await onRequestGet({ env: { GITHUB_CLIENT_ID: 'client-id' } })
        const location = res.headers.get('Location') ?? ''
        const cookie = res.headers.get('Set-Cookie') ?? ''

        const stateInUrl = new URL(location).searchParams.get('state') ?? ''
        const cookieMatch = cookie.match(/github-oauth-state=([^;]+)/)
        const stateInCookie = cookieMatch?.[1] ?? ''

        expect(stateInUrl).toBeTruthy()
        expect(stateInUrl).toBe(stateInCookie)
    })
})

describe('auth.js – outputHTML handshake (error path)', () => {
    async function getErrorHTML(): Promise<string> {
        const res = await onRequestGet({ env: {} })
        return res.text()
    }

    it('contains setInterval retry and setTimeout fallback', async () => {
        const html = await getErrorHTML()
        expect(html).toContain('setInterval')
        expect(html).toContain('setTimeout')
    })

    it('registers message listener BEFORE posting authorizing signal', async () => {
        const html = await getErrorHTML()
        const listenerIdx = html.indexOf("if (data === 'authorizing:github')")
        const firstPostIdx = html.indexOf("postMessage('authorizing:github'")
        expect(listenerIdx).toBeGreaterThan(-1)
        expect(firstPostIdx).toBeGreaterThan(-1)
        // listener must be set up before we start posting the handshake signal
        expect(listenerIdx).toBeLessThan(firstPostIdx)
    })

    it('sends the message payload only after receiving the handshake (inside notify)', async () => {
        const html = await getErrorHTML()
        const notifyDefIdx = html.indexOf('const notify =')
        const notifyCallIdx = html.indexOf('notify(origin)')
        const listenerIdx = html.indexOf("if (data === 'authorizing:github')")
        // notify is called inside the listener callback, after the handshake
        expect(notifyCallIdx).toBeGreaterThan(listenerIdx)
        expect(notifyCallIdx).toBeGreaterThan(notifyDefIdx)
    })

    it('does NOT directly postMessage the payload before the handshake listener', async () => {
        const html = await getErrorHTML()
        // The raw message postMessage should only appear inside notify(), which is
        // invoked after the handshake. Its position must be after the listener setup.
        const directMsgIdx = html.indexOf('postMessage(message,')
        const listenerIdx = html.indexOf("if (data === 'authorizing:github')")
        expect(directMsgIdx).toBeGreaterThan(listenerIdx)
    })
})
