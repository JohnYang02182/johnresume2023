import { ref } from "vue"
import { useMouse } from "@vueuse/core"
import type { UseMouseEventExtractor } from "@vueuse/core"

export function useHomeBanner() {
  const bannerWrapper = ref<HTMLElement | null>(null)
  const windowWidth = ref(window.innerWidth)
  const extractor: UseMouseEventExtractor = (event) =>
    event instanceof Touch ? null : [event.x, event.offsetY]

  const { x, y } = useMouse({
    target: bannerWrapper,
    touch: false,
    type: extractor
  })

  return {
    bannerWrapper,
    windowWidth,
    x,
    y
  }
}
