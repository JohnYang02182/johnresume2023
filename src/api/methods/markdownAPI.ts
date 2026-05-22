import { get, githubClient } from '../common/APIMethod'
export async function getMarkdown(url: string) {
    const mdContentUrl = `${githubClient.defaults.baseURL}/repos/${import.meta.env.VITE_GITHUB_OWNWER}/${import.meta.env.VITE_GITHUB_REPO}/contents${url}`;
    try {
        const res = await get<{ content: string }>(githubClient, mdContentUrl);
        const decodedContent = atob(res.content);
        return decodedContent;
    } catch (error) {
        console.error(`Failed to fetch markdown content from ${mdContentUrl}:`, error);
        throw error;
    }
}