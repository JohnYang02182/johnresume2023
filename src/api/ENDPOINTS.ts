export const ENDPOINTS = {
    CMSGITHUBMD: (lang: 'en' | 'ja' | 'zh-TW', slug = 'build-a-cms-service'): string => {
        return `/api/project-content?lang=${lang}&slug=${slug}`
    },
    CMSPROJECTLIST: '/api/projects'
}