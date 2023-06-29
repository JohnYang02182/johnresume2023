import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import { showStatus } from './Status'

const baseUrl = 'https://api.openai.com/v1/chat/completions'
axios.defaults.baseURL = baseUrl
axios.defaults.timeout = 10000
// axios.defaults.withCredentials = true

// const axiosinstance: AxiosInstance = axios.create({
//   baseURL: window.location.origin,
//   timeout: 10000,
//   headers: {
//     'Authorization': 'Bearer ' + import.meta.env.OPENAI_API_KEY
//   }
// })
// Add request Interceptor
axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers!.Authorization = 'Bearer ' + import.meta.env.VITE_OPENAI_API_KEY
  console.log('openai',import.meta.env.VITE_OPENAI_API_KEY);
  return config
}, (error: any) => {
  return Promise.reject(error)
})

// Add response interceptor
axios.interceptors.response.use((response: AxiosResponse) => {
  // Handle any custom response data or errors here
  if(response.status>=200 && response.status < 300){
    if (response.data.code !== '993') {
      return Promise.resolve(response)
    } else {
      console.log('access overtime!')
    }
  } 
  return response;
}, (error: any) => {
  return Promise.reject(error);
});

// axios.interceptors.response.use((res) => {
//   if (res.status === 200) {
//     if (res.data.code !== '993') {
//       return Promise.resolve(res)
//     } else {
//       console.log('overtime')
//     }
//   } else {
//     return Promise.reject(res)
//   }
// })
const detectStatusCode = (response: AxiosResponse) => {
  if (response.status >= 200 && response.status < 300) {
    // Successful response
    return response.data;
  } else {
    // Error response
    throw new Error(`Request failed with status code ${response.status}`);
  }
}

export async function get<T>(url: string){
  try {
    const response = await axios.get<T>(url)
    return response
  } catch(error) {
    throw new Error(`Error data when require get ${url}`)
  }
}

export async function post<T>(url: string, data: object){
  try {
    const response = await axios.post<T>(url,data)
    console.log('response ',response)
    return detectStatusCode(response)
  } catch(error) {
    console.log('error', error)
    return error
    throw new Error(`Error data when require post ${url}`)
  }
}

export async function pull<T>(url: string, data: object){
  try {
    const response = await axios.put<T>(url, data)
    return detectStatusCode(response)
  } catch(error) {
    throw new Error (`Error data when require put ${ url }`)
  }
}

export async function del<T>(url: string){
  try {
    const response = await axios.delete(url)
    return detectStatusCode(response)
  } catch(error) {
    throw new Error (`Error data when require dele ${ url }`)
  }
}