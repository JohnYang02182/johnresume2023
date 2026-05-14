import { config } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, vi } from 'vitest'

// Mock IntersectionObserver (not available in jsdom)
const mockIntersectionObserver = vi.fn(function () {
    return {
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn()
    }
})
vi.stubGlobal('IntersectionObserver', mockIntersectionObserver)

// Mock import.meta.glob used in lazyLoad
vi.mock('../util/lazyLoad', () => ({
    observeScroll: {
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn()
    },
    useImageLoader: vi.fn(),
    imageLazyLoad: vi.fn()
}))

// i18n global setup
const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: {
            'ProjectCommon.ProjectTitle01': 'Project Background',
            'ProjectCommon.ProjectTitle02': 'Team',
            'ProjectCommon.ProjectTitle03': 'Problems',
            'ProjectCommon.ProjectTitle04': 'Process',
            'ProjectCommon.ProjectContent01': 'Link:',
            'ProjectCommon.ProjectName01': 'Anime Platform',
            'ProjectAnime.Reason': 'Reason text',
            'ProjectAnime.Problem01': 'Problem 1',
            'ProjectAnime.Problem02': 'Problem 2',
            'ProjectAnime.Problem03': 'Problem 3',
            'ProjectAnime.Process01': 'Process 01',
            'ProjectAnime.Process02': 'Process 02',
            'ProjectAnime.Process03': 'Process 03',
            'ProjectAnime.Process04': 'Process 04',
            'ProjectAnime.Process05': 'Process 05',
            'ProjectAnime.Process01MainTitle': 'Process 01 Main Title',
            'ProjectAnime.Process01ListTitle01': 'List Title 1',
            'ProjectAnime.Process01ListContent01': 'List Content 1',
            'ProjectAnime.Process01ListTitle02': 'List Title 2',
            'ProjectAnime.Process01ListContent02': 'List Content 2',
            'ProjectAnime.Process02ListContent01': 'Process 02 Content',
            'ProjectAnime.Process03ListContent01': 'Process 03 Content',
            'ProjectAnime.Process04ListTitle01': 'List Title 01',
            'ProjectAnime.Process04ListContent01': 'List Content 01',
            'ProjectAnime.Process04ListTitle02': 'List Title 02',
            'ProjectAnime.Process04ListPointTitle': 'Point Title',
            'ProjectAnime.Process04ListPointContent01': 'Point Content 01',
            'ProjectAnime.Process04ListPointContent02': 'Point Content 02',
            'ProjectAnime.Process04ListContent02': 'List Content 02',
            'ProjectAnime.Process04ListTitle03': 'List Title 03',
            'ProjectAnime.Process04ListContent03': 'List Content 03',
            'ProjectAnime.Process04ListTitle04': 'List Title 04',
            'ProjectAnime.Process04ListContent04': 'List Content 04',
            'ProjectAnime.Process04ListTitle0501': 'Process 05 Title 01',
            'ProjectAnime.Process04ListTitle0502': 'Process 05 Title 02',
            'Character.PM': 'Project Manager',
            'Character.UIUXDesigner': 'UI/UX Designer',
            'Character.BDDeveloper': 'Back-end Developer'
        }
    }
})

config.global.plugins = [i18n]

// Reset pinia before each test
beforeEach(() => {
    setActivePinia(createPinia())
})
