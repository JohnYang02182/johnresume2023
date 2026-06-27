const STATE_COOKIE = 'github-oauth-state'

export async function onRequestGet({ env }) {
    try {
        if (!env.GITHUB_CLIENT_ID) {
            return outputHTML({
                error: 'GitHub authorization is not configured correctly.',
                errorCode: 'AUTH_CONFIGURATION_ERROR',
            })
        }

        const state = crypto.randomUUID()

        const params = new URLSearchParams({
            client_id: env.GITHUB_CLIENT_ID,
            scope: 'repo,user',
            state,
        })

        return new Response('', {
            status: 302,
            headers: {
                Location: `https://github.com/login/oauth/authorize?${params.toString()}`,
                'Set-Cookie': `${STATE_COOKIE}=${state}; HttpOnly; Max-Age=300; Path=/; SameSite=Lax; Secure`,
            },
        })
    } catch {
        return outputHTML({
            error: 'Failed to start GitHub authorization.',
            errorCode: 'AUTH_INITIALIZATION_FAILED',
        })
    }
}

function outputHTML({ error, errorCode }) {
    const provider = 'github'
    const state = 'error'
    const content = JSON.stringify({ provider, error, errorCode })
    const message = `authorization:${provider}:${state}:${content}`

    return new Response(
        `<!doctype html><html><body><script>
      (() => {
        const message = ${JSON.stringify(message)};
        const status = document.createElement('p');
        status.textContent = ${JSON.stringify(error)};
        document.body.appendChild(status);

        if (!window.opener) {
          console.error(${JSON.stringify(errorCode)}, ${JSON.stringify(error)});
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
          console.error(${JSON.stringify(errorCode)}, ${JSON.stringify(error)});
        }, 5000);
      })();
    <\/script></body></html>`,
        {
            status: 500,
            headers: {
                'Content-Type': 'text/html;charset=UTF-8',
            },
        },
    )
}
