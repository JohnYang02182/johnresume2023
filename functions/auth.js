export async function onRequestGet({ env }) {
  const url = `https://github.com/login/oauth/authorize?client_id=${env.GITHUB_CLIENT_ID}&scope=repo,user`
  return Response.redirect(url, 302)
}
