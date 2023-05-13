import { Configuration, OpenAIApi } from "openai";
import { ChatGPTMessage, ChatGPTModal, ChatGPTParams } from "./interface/ChaGPTAPIModal";
import { post } from "./common/APIMethod"


// const configuration = new Configuration({
//     organization: "org-0WE6MMTqaQ4l9MCiC4ZdGWsH",
//     apiKey: import.meta.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);
// export const completion = async (Inputparams: string) => await openai.createChatCompletion({
//     model: "gpt-3.5-tubo",
//     messages: [
//         {
//             role: "system",
//             content: "You are empathic and always encourage people when they fail, feel frustrated, feel sad."
//         },
//         {
//             role: "user", 
//             content: Inputparams
//         }
//     ]
// })
export const ChatGPTLink = async (params: ChatGPTParams) => {
    console.log('submit')
    return await post<ChatGPTModal>('https://api.openai.com/v1/chat/completions',params)
}