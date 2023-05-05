<template>
  <form class='selecter-wrapper'>
    <label class='selecter-label'>
      <!-- {{ i18n.locale }} -->
    </label>
    <ul class="selecter-list">
      <li></li>
      <li class="selecter-list-content">
        <a href="javascript:void(0)"></a>
      </li>
      <li class="selecter-list-content"></li>
      <li class="selector-list-content"></li>
    </ul>
    <select v-model="selectLanguage" @change="switchLanguage($event)">
      <option v-for='(item, index) in SUPPORT_LOCALES' :key='index' :value="item.langOption">
      {{ item.langName }}
      </option>
    </select>
  </form>
</template>
<script lang='ts' setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n'
import { useUserStore } from '../../../store/user'
import { SUPPORT_LOCALES } from '../../../util/i18n'
console.log(SUPPORT_LOCALES)
const userStore = useUserStore()

const i18n = useI18n();

const selectLanguage = computed({
  get: () => userStore.lang,
  set: (lang: string) => userStore.setLanguage(lang)
})
const switchLanguage = (event: Event) => {
  selectLanguage.value = (event.target as HTMLInputElement).value
  i18n.locale.value = selectLanguage.value
}
</script>