import axios, { AxiosInstance, AxiosResponse } from 'axios'

// ─── 設定型別 ────────────────────────────────────────────────
export interface APIClientConfig {
  baseURL: string
  timeout?: number
  headers?: Record<string, string>
}

// ─── 建立獨立 instance ────────────────────────────────────────
function createAPIClient(config: APIClientConfig): AxiosInstance {
  const instance = axios.create({
    baseURL: config.baseURL,
    timeout: config.timeout ?? 10000,
    headers: config.headers ?? {},
  })

  instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: any) => Promise.reject(error)
  )

  return instance
}

// ─── 通用 Status Code 檢查 ────────────────────────────────────
function detectStatusCode(response: AxiosResponse) {
  if (response.status >= 200 && response.status < 300) {
    return response.data
  }
  // For any non-2xx status, throw an error so caller wrappers can handle/convert it
  throw new Error(`Request failed with status code ${response.status}`)
}

// ─── 通用 CRUD 方法 ───────────────────────────────────────────
export async function get<T>(instance: AxiosInstance, url: string) {
  try {
    const response = await instance.get<T>(url)
    return detectStatusCode(response)
  } catch (error) {
    throw new Error(`GET ${url} failed`)
  }
}

export async function post<T>(instance: AxiosInstance, url: string, data: object) {
  try {
    const response = await instance.post<T>(url, data)
    return detectStatusCode(response)
  } catch (error) {
    throw new Error(`POST ${url} failed`)
  }
}

export async function put<T>(instance: AxiosInstance, url: string, data: object) {
  try {
    const response = await instance.put<T>(url, data)
    return detectStatusCode(response)
  } catch (error) {
    throw new Error(`PUT ${url} failed`)
  }
}

export async function del<T>(instance: AxiosInstance, url: string) {
  try {
    const response = await instance.delete<T>(url)
    return detectStatusCode(response)
  } catch (error) {
    throw new Error(`DELETE ${url} failed`)
  }
}

// ─── 預設 API Clients ─────────────────────────────────────────
export const openAIClient = createAPIClient({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
  },
})

export const githubClient = createAPIClient({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github+json',
    ...(import.meta.env.VITE_GITHUB_TOKEN
      ? { Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}` }
      : {}),
  },
})

// export const rawGithubClient = createAPIClient({
//   baseURL: 'https://raw.githubusercontent.com',
//   // headers: { Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}` },
// })

// export const directusClient = createAPIClient({
//   baseURL: import.meta.env.VITE_DIRECTUS_URL,
// })
// export const directusClient = createAPIClient({
//   baseURL: import.meta.env.VITE_DIRECTUS_URL,
// })