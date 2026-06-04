export async function onRequestGet({ env }) {
    const params = new URLSearchParams({
        client_id: env.GITHUB_CLIENT_ID,
        scope: 'repo,user',
    })

    return new Response('', {
        status: 302,
        headers: {
            Location: `https://github.com/login/oauth/authorize?${params.toString()}`,
        },
    })
}
