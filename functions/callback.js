const STATE_COOKIE = 'github-oauth-state'

function getCookie(request, name) {
    const cookieHeader = request.headers.get('Cookie')
    if (!cookieHeader) return ''

    const cookies = cookieHeader.split(';').map(cookie => cookie.trim())
    const cookie = cookies.find(cookie => cookie.startsWith(`${name}=`))
    if (!cookie) return ''

    return decodeURIComponent(cookie.slice(name.length + 1))
}

function verifyState(request, state) {
    const storedState = getCookie(request, STATE_COOKIE)
    return Boolean(state && storedState && state === storedState)
}

export async function onRequestGet({ request, env }) {
    try {
        const { searchParams } = new URL(request.url)
        const code = searchParams.get('code')
        const state = searchParams.get('state')
        const githubError = searchParams.get('error')
        const githubErrorDescription = searchParams.get('error_description')

        if (githubError) {
            return outputHTML({
                error: githubErrorDescription || githubError,
                errorCode: 'GITHUB_AUTHORIZATION_DENIED',
            })
        }

        if (!verifyState(request, state)) {
            return outputHTML({ error: 'Potential CSRF attack detected.', errorCode: 'CSRF_DETECTED' })
        }

        if (!code) {
            return outputHTML({ error: 'Failed to receive an authorization code.', errorCode: 'AUTH_CODE_REQUEST_FAILED' })
        }

        if (!env.GITHUB_CLIENT_ID || !env.G_C_S) {
            return outputHTML({
                error: 'GitHub token exchange is not configured correctly.',
                errorCode: 'TOKEN_CONFIGURATION_ERROR',
            })
        }

        const response = await requestAccessToken(code, env)

        if (!response.ok) {
            return outputHTML({
                error: 'GitHub rejected the access token request.',
                errorCode: 'TOKEN_RESPONSE_FAILED',
            })
        }

        const payload = await parseAccessTokenResponse(response)

        if (payload.error) {
            return outputHTML({
                error: payload.error_description || payload.error,
                errorCode: 'TOKEN_EXCHANGE_FAILED',
            })
        }

        if (!payload.access_token) {
            return outputHTML({
                error: 'GitHub did not return an access token.',
                errorCode: 'TOKEN_MISSING',
            })
        }

        return outputHTML({ token: payload.access_token })
    } catch {
        return outputHTML({ error: 'Failed to request an access token.', errorCode: 'TOKEN_REQUEST_FAILED' })
    }
}

async function requestAccessToken(code, env) {
    return fetch('https://github.com/login/oauth/access_token', {
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
}

async function parseAccessTokenResponse(response) {
    try {
        return await response.json()
    } catch {
        return {
            error: 'Failed to read GitHub access token response.',
            error_description: 'The GitHub token response was not valid JSON.',
        }
    }
}

function outputHTML({ token, error, errorCode }) {
    const provider = 'github'
    const state = error ? 'error' : 'success'
    const content = JSON.stringify(error ? { provider, error, errorCode } : { provider, token })
    const message = `authorization:${provider}:${state}:${content}`
    const statusMessage = error ? error : 'Authorization completed. You can close this window.'

    return new Response(
        `<!doctype html><html><body><script>
      (() => {
        const provider = ${JSON.stringify(provider)};
        const message = ${JSON.stringify(message)};
        const status = document.createElement('p');
        status.textContent = ${JSON.stringify(statusMessage)};
        document.body.appendChild(status);

        if (!window.opener) {
          ${error ? `console.error(${JSON.stringify(errorCode)}, ${JSON.stringify(error)});` : ''}
          return;
        }

        let completed = false;
        const notify = (targetOrigin = '*') => {
          if (completed) return;
          window.opener.postMessage(message, targetOrigin);
        };

        window.addEventListener('message', ({ data, origin }) => {
          if (data === 'authorizing:${provider}') {
            notify(origin);
            completed = true;
          }
        });

        window.opener.postMessage('authorizing:${provider}', '*');
        const timer = window.setInterval(() => {
          if (completed) {
            window.clearInterval(timer);
            return;
          }
          window.opener.postMessage('authorizing:${provider}', '*');
        }, 500);

        window.setTimeout(() => {
          if (completed) return;
          completed = true;
          window.clearInterval(timer);
          ${error ? `console.error(${JSON.stringify(errorCode)}, ${JSON.stringify(error)});` : ''}
        }, 5000);
      })();
    <\/script></body></html>`,
        {
            headers: {
                'Content-Type': 'text/html;charset=UTF-8',
                'Set-Cookie': `${STATE_COOKIE}=deleted; HttpOnly; Max-Age=0; Path=/; SameSite=Lax; Secure`,
            },
        },
    )
}
