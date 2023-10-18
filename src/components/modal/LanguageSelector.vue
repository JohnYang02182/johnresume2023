<template>
  <div class="selector-wrapper" @mouseover="switchLanListOn()" @mouseleave="switchLanListOff()">
    <label class='selector-label'>
      <font-awesome-icon class="icon-home-title" icon="fa-solid fa-globe" />
      {{ $t(`Common.${i18n.locale.value.toUpperCase()}`) }}
      <font-awesome-icon icon="fa-solid fa-chevron-down" class="icon-arrow" :class="{'active': listIsOpen, 'close': !listIsOpen}" />
    </label>
    <ul class="selector-list" :class="{'active': listIsOpen, 'close': !listIsOpen}" @mouseenter="switchLanListOn()" @mouseleave="switchLanListOff()">
      <li v-for='(item, index) in SUPPORT_LOCALES' :key='index' class="selector-list-n-content">
        <a class="list-items" href="javascript:void(0)" @click="switchLanguage(item.langOption);switchLanListOff();">{{ item.langName }}</a>
      </li>
    </ul>
  </div>
</template>
<script lang='ts' setup>
import { computed, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n'
import { useUserStore } from '../../../store/user'
import { SUPPORT_LOCALES } from '../../../util/i18n'
const userStore = useUserStore()
const listIsOpen = ref(false)
const i18n = useI18n()
onMounted(() => {
  const windowWidth = ref(window.innerWidth)
})
const selectLanguage = computed({
  get: () => userStore.lang,
  set: (lang: string) => userStore.setLanguage(lang)
})
const switchLanguage = (event: string) => {
  selectLanguage.value = event
  i18n.locale.value = selectLanguage.value
}
const switchLanListOn = () => {
  listIsOpen.value = true
}
const switchLanListOff = () => {
  listIsOpen.value = false
}
</script>