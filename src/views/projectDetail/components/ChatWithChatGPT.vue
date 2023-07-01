<template>
  <section class="section-body">
    <div class="banner-wrapper">
      <div class="banner-content-wrapper">
        <div class="banner-content-item">
          <img class="banner-content-img img-side-project" style="transform: scale(-1, 1);" src="/IMG/banner_sample.png" alt=""/>
        </div>
        <p class="banner-content-title title-side-project">Side Project</p>
      </div>
    </div>
    <div class="container-wrapper col">
      <div class="content-wrapper col">
        <h2 class="main-title">{{ $t('ProjectCommon.ProjectTitle01') }}</h2>
        <p class="content-text">{{ $t('SideProjectChatGPT.Reason') }}</p>
      </div>
      <div class="content-wrapper col">
        <h2 class="main-title">{{ $t('ProjectCommon.ProjectTitle05') }}</h2>
        <ul class="list-wrapper dot-style">
          <li class="list dot dot-primary">{{ $t('SideProjectChatGPT.Point01') }}</li>
          <li class="list dot dot-primary">{{ $t('SideProjectChatGPT.Point02') }}</li>
          <li class="list dot dot-primary">{{ $t('SideProjectChatGPT.Point03') }}</li>
        </ul>
      </div>
      <div class="content-wrapper col">
        <form class="form-content content-text" @submit.prevent="onSubmit">
          <div class="input-wrapper" :class="{'active' : inputFocus}">
            <input class="input-content" type="text" name="chatContent" v-model="value" @focus="inputFocus = true" @blur="inputFocus = false">
          </div>
          <span class="tips-alert" v-if="errorMessage">{{ errorMessage }}</span>
          <button :disabled="!meta.dirty || !meta.valid" class="btn btn-submit" :class="{'btn-disable': !meta.dirty || !meta.valid}">{{ $t('CommonActivity.Submit') }}</button>
        </form>
        <div class="show-content-wrapper">
          <p class="show-content">{{ responseContent }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { ChatGPTLink } from '/@/api/ChatGPTAPI'
import { useField } from 'vee-validate';
const inputFocus = ref(false)
const inputContent = ref('')
const contentForSending = ref()
const responseContent = ref()
const sendingContent = (inputContent :string) => {
  let messageParam = {
    model: "gpt-3.5-turbo-0301",
    temperature: 1.0,
    messages: [
        {
            role: "system",
            content: "You are empathic and always encourage people when they fail, feel frustrated, feel sad. And then you give them a big hug at the end of the conversation."
        },
        {
            role: "user", 
            content: inputContent
        }
    ]
  }
  return {
    messageParam
  }
}
function validateField(value: any) {
  if (!value) {
    return 'this field is required';
  }

  return true;
}

const { value, errorMessage, meta } = useField('ChatGPTRequest', validateField);

const onSubmit = async () => {
  let loading = ref()
  let res = ref()
  try {
    loading.value = true
    contentForSending.value = sendingContent(value.value)
    res.value = await ChatGPTLink(contentForSending.value.messageParam)
    if(res.value.message) {
      console.log('resin', res.value)
      return
    }
    console.log('loading', loading.value)
  } finally {
    responseContent.value = res.value.choices[0].message.content
    loading.value = false
    console.log('loadingfinish', loading.value)
  }
  // resposneContent.value = await completion(inputContent.value)
  // console.log('test',resposneContent.value)
  // console.log('input-content',inputContent.value)
}
// onMounted(()=>{
//   console.log('env',import.meta.env.VITE_OPENAI_API_KEY)
// })
</script>
<style lang="scss" scoped>
@import url('../../../style/workH_detail.scss');
.section-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: auto;
  padding: 24px 0;
  max-width: 1440px;
  width: 75%;
  .section-title {
    color: var(--text_primary);
  }
}
</style>