
import { ref } from 'vue'
import type { Ref } from 'vue'

export interface ImageLoaderOptions {
  rootMargin?: string
  threshold?: number
}

export const useImageLoader = (options: ImageLoaderOptions = {}) => {
  const imageCache = new Map<string, string>()
  const isLoading: Ref<boolean> = ref(true)

  const observer = new IntersectionObserver((enters) => {
    enters.forEach((entry) => {
      if(entry.isIntersecting) {
        const img = entry.target as HTMLImageElement
        if(img.dataset.src) {
          loadImage(img.dataset.src).then((url) => {
            img.src = url
            img.classList.remove('loading')
          })
          observer.unobserve(img)
        }
      }
    })
  }, {
    rootMargin: options.rootMargin || '50px',
    threshold: options.threshold || 0
  })

  const loadImage = async (url: string): Promise<string> => {
    if(imageCache.has(url)) {
      return imageCache.get(url) !
    }
    try {
      const urlNow = `../src/assets/images/${url}`
      const currentUrl = import.meta.glob<{default: string}>('../assets/images/*', { 
        eager: true 
      })
      const mod = currentUrl[urlNow] as {default: string}
      imageCache.set(url, mod.default)
      return mod.default
    } catch (error) {
      console.error('Image loading error:', error)
      throw error
    }
  }
  return {
    observer,
    isLoading,
    loadImage
  }
}

export const observeScroll = new IntersectionObserver((scrollHTML: IntersectionObserverEntry[]) => {
  scrollHTML?.forEach((ele: IntersectionObserverEntry) => {
    if(ele.isIntersecting) {
      ele.target.classList.add('scrolled')
    } else {
      ele.target.classList.remove('scrolled')
    }
  })
})

export const imageLazyLoad = (e: any) => {
  e.classList.remove('img-loading-wrapper')
  if(e.querySelector('img') !== null){
    e.querySelector('img')!.classList.remove('img-loading')
  }
}
