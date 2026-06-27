export const ENDPOINTS = {
    CMSGITHUBMD: (lang: 'en' | 'ja' | 'zh-TW', slug = 'build-a-cms-service'): string => {
        return `/content/projects/${lang}/${slug}.md`
    },
    CMSPROJECTLIST: '/api/projects'
}