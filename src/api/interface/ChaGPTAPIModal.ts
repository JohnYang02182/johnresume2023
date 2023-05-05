interface ChatGPTUsage {
  promput_token: string
  completion_token: number
  total_tokens: number
}

export interface ChatGPTMessage {
  role: string
  content: string
}
export interface ChatGPTParams {
  model: string
  messages: ChatGPTMessage[]
}
interface ChatGPTChoices {
  message: ChatGPTMessage
  finish_reason: string
  index: number
}

export interface ChatGPTModal {
  id: string
  object: string
  model: string
  usage: ChatGPTUsage
  choices: ChatGPTChoices[]
}