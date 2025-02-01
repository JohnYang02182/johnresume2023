import { defineAsyncComponent, computed } from 'vue'
import { useRoute } from 'vue-router'

export const useLayout = () => {
  
  const route = useRoute()
  const layoutBase = defineAsyncComponent(() => import('/@/layouts/layoutBase.vue'))
  const layoutBlank = defineAsyncComponent(() => import('/@/layouts/layoutBlank.vue'))

  const currentLayout = computed(() => {
    switch (route.meta.layout) {
      case 'Base': 
        return layoutBase;
      case 'Blank':
        return layoutBlank;
      default: 
        return layoutBlank;
    }
  })

  return {
    currentLayout
  }

}