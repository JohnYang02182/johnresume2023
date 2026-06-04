export async function onRequestGet({ request, env }) {
    const { origin } = new URL(request.url)
    const csrfToken = crypto.randomUUID().replaceAll('-', '')

    const params = new URLSearchParams({
        client_id: env.GITHUB_CLIENT_ID,
        scope: 'repo,user',
        state: csrfToken,
    })

    return new Response('', {
        status: 302,
        headers: {
            Location: `https://github.com/login/oauth/authorize?${params.toString()}`,
            'Set-Cookie': `csrf-token=github_${csrfToken}; HttpOnly; Path=/; Max-Age=600; SameSite=Lax; Secure`,
        },
    })
}
