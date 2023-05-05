<template>
  <div class="section-wrapper">
    <p class="section-title headline_02">Try to chat with it!</p>
    <form class="form-content content-text" @submit.prevent="onSubmit">
      <div class="input-wrapper" :class="{'active' : inputFocus}">
        <input class="input-content" type="text" name="chatContent" v-model="inputContent" @focus="inputFocus = true" @blur="inputFocus = false">
      </div>
      <button class="btn btn-submit">submit</button>
    </form>
    <div class="show-content-wrapper">
      <p class="show-content">{{ responseContent }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ChatGPTLink } from '/@/api/ChatGPTAPI'
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
            content: "You are empathic and always encourage people when they fail, feel frustrated, feel sad."
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
// const messageParam = ref({
//   model: "gpt-3.5-turbo-0301",
//   temperature: 1.0,
//   messages: [
//       {
//           role: "system",
//           content: "You are empathic and always encourage people when they fail, feel frustrated, feel sad."
//       },
//       {
//           role: "user", 
//           content: "I feel san today"
//       }
//   ]}
// )
const onSubmit = async () => {
  contentForSending.value = sendingContent(inputContent.value)
  let res = await ChatGPTLink(contentForSending.value)
  responseContent.value = res.choices[0].message.content
  // resposneContent.value = await completion(inputContent.value)
  // console.log('test',resposneContent.value)
  // console.log('input-content',inputContent.value)
  // console.log(responseContent.value)
}
// onMounted(()=>{
//   console.log('env',import.meta.env.VITE_OPENAI_API_KEY)
// })
</script>
<style lang="scss" scoped>
.section-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
  max-width: 1440px;
  width: 100%;
  .section-title {
    color: #323232;
  }
  .btn-submit {
    margin-top: 12px;
    padding: 8px 20px;
    font-size: 16px;
    color: var(--text_tertiary);
    background-color: var(--primary);
    border: none;
    outline-style: none;
    border-radius: 4px;
    &:hover {
      box-shadow: 1px 1px 12px 0 var(--primary);
    }
  }
  .form-content {
    width: 100%;
    .input-wrapper {
      height: 240px;
      border-radius: 8px;
      overflow: hidden;
      border: 2px solid #90b4ce;
    }
    .active {
      border-color: var(--primary);
    }
    .input-content {
      display: block;
      padding: 4px 16px;
      width: 100%;
      color: var(--text_primary);
      background-color: var(--bg_primary);
      border: none;
      &:active, &:hover, &:focus, &:focus-visible {
        border: none;
        outline-width: 0px;
      }
    }
  }
  .show-content-wrpper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    max-width: 1440px;
  }
  .show-content {
    padding: 24px;
    width: 100%;
    font-size: 24px;
    color: var(--text_tertiary);
    background-color: #323232;
    border-radius: 8px;
    white-space: break-spaces;
  }
}
</style>