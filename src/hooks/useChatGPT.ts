import { ChatGPTLink } from '/@/api/ChatGPTAPI'
import { ChatGPTParams } from "../api/interface/ChaGPTAPIModal";
export const linkOpenAi = async (params: ChatGPTParams) => {
  let loading = false
  async function getOpenAiResponse() {
    try {
      loading = true
      const res = await ChatGPTLink(params)
    } finally {
      loading = false
    }
  }
}
