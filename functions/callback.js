export async function onRequestGet({ request, env }) {
    const url = new URL(request.url)
    const code = url.searchParams.get('code')

    const response = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            client_id: env.GITHUB_CLIENT_ID,
            client_secret: env.G_C_S,
            code
        })
    })

    const data = await response.json()
    const token = data.access_token

    const html = `<!DOCTYPE html>
<html>
<body>
<script>
  (function() {
    function receiveMessage(e) {
      window.opener.postMessage(
        'authorization:github:success:{"token":"${token}","provider":"github"}',
        e.origin
      )
    }
    window.addEventListener('message', receiveMessage, false)
    window.opener.postMessage('authorizing:github', '*')
  })()
</script>
</body>
</html>`

    return new Response(html, {
        headers: { 'Content-Type': 'text/html' }
    })
}
