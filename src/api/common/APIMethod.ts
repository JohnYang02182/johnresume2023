import { AxiosInstance, AxiosResponse } from 'axios'

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

