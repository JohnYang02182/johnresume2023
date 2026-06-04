async function signState(secret, timestamp) {
    const key = await crypto.subtle.importKey(
        'raw',
        new TextEncoder().encode(secret),
        { name: 'HMAC', hash: 'SHA-256' },
        false,
        ['sign']
    )
    const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(timestamp))
    const hex = Array.from(new Uint8Array(sig)).map(b => b.toString(16).padStart(2, '0')).join('')
    return `${timestamp}.${hex}`
}

export async function onRequestGet({ env }) {
    const timestamp = Date.now().toString()
    const state = await signState(env.CSRF_SECRET, timestamp)

    const params = new URLSearchParams({
        client_id: env.GITHUB_CLIENT_ID,
        scope: 'repo,user',
        state,
    })

    return new Response('', {
        status: 302,
        headers: {
            Location: `https://github.com/login/oauth/authorize?${params.toString()}`,
        },
    })
}
