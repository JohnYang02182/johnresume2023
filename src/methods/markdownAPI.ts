interface ProjectContentResponse {
    content: string
}

/**
 * Fetch a project's markdown content through the Cloudflare Pages Function proxy
 * (functions/api/project-content.js), which keeps the GitHub token server-side.
 * @param path - built via ENDPOINTS.CMSGITHUBMD, e.g. `/api/project-content?lang=en&slug=build-a-cms-service`
 */
export async function getMarkdown(path: string): Promise<string> {
    const res = await fetch(path)
    if (!res.ok) throw new Error(`GET ${path} failed with status ${res.status}`)

    const data: ProjectContentResponse = await res.json()
    return data.content
}
