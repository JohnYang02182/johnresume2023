async function verifyState(secret, state) {
    const [timestamp, receivedHex] = state.split('.')
    if (!timestamp || !receivedHex) return false

    // Reject if older than 10 minutes
    if (Date.now() - parseInt(timestamp) > 600_000) return false

    const key = await crypto.subtle.importKey(
        'raw',
        new TextEncoder().encode(secret),
        { name: 'HMAC', hash: 'SHA-256' },
        false,
        ['sign']
    )
    const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(timestamp))
    const expectedHex = Array.from(new Uint8Array(sig)).map(b => b.toString(16).padStart(2, '0')).join('')
    return receivedHex === expectedHex
}

export async function onRequestGet({ request, env }) {
    const { searchParams } = new URL(request.url)
    const code = searchParams.get('code')
    const state = searchParams.get('state')

    if (!state || !(await verifyState(env.CSRF_SECRET, state))) {
        return outputHTML({ error: 'Potential CSRF attack detected.', errorCode: 'CSRF_DETECTED' })
    }

    if (!code) {
        return outputHTML({ error: 'Failed to receive an authorization code.', errorCode: 'AUTH_CODE_REQUEST_FAILED' })
    }

    let response

    try {
        response = await fetch('https://github.com/login/oauth/access_token', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                code,
                client_id: env.GITHUB_CLIENT_ID,
                client_secret: env.G_C_S,
            }),
        })
    } catch {
        return outputHTML({ error: 'Failed to request an access token.', errorCode: 'TOKEN_REQUEST_FAILED' })
    }

    const { access_token: token, error } = await response.json()

    return outputHTML({ token, error })
}

function outputHTML({ token, error, errorCode }) {
    const provider = 'github'
    const state = error ? 'error' : 'success'
    const content = error ? { provider, error, errorCode } : { provider, token }

    return new Response(
        `<!doctype html><html><body><script>
      (() => {
        window.addEventListener('message', ({ data, origin }) => {
          if (data === 'authorizing:${provider}') {
            window.opener?.postMessage(
              'authorization:${provider}:${state}:${JSON.stringify(content)}',
              origin
            );
          }
        });
        window.opener?.postMessage('authorizing:${provider}', '*');
      })();
    <\/script></body></html>`,
        {
            headers: {
                'Content-Type': 'text/html;charset=UTF-8',
                'Set-Cookie': 'csrf-token=deleted; HttpOnly; Max-Age=0; Path=/; SameSite=Lax; Secure',
            },
        },
    )
}
