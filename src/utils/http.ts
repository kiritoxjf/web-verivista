import axios, { AxiosError, type AxiosInstance, type AxiosRequestConfig } from 'axios'

// Axios实例
const instance: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 10000, // 超时时间 10秒
  withCredentials: true
})

// 请求拦截器
instance.interceptors.request.use((config) => {
  // 请求前的操作
  return config
})

// 响应拦截器
instance.interceptors.response.use((response) => {
  // 响应前的操作
  return response
})

type iHttpType = 'GET' | 'POST' | 'PUT' | 'DELETE'

// 封装 Axios T 传参类型  R 返回值类型
export const http = <T, R>(
  method: iHttpType,
  url: string,
  params?: T,
  config?: AxiosRequestConfig
): Promise<R> => {
  return new Promise((resolve, reject) => {
    switch (method) {
      case 'GET':
        instance
          .get<R>(url, { ...config, params })
          .then((res) => {
            resolve(res.data)
          })
          .catch((err: AxiosError) => {
            reject(err)
          })
        break
      case 'POST':
        instance
          .post<R>(url, params, { headers: { 'Content-Type': 'application/json' }, ...config })
          .then((res) => {
            resolve(res.data)
          })
          .catch((err: AxiosError) => {
            reject(err)
          })
        break
      case 'PUT':
        instance
          .put<R>(url, params, { headers: { 'Content-Type': 'application/json' }, ...config })
          .then((res) => {
            resolve(res.data)
          })
          .catch((err: AxiosError) => {
            reject(err)
          })
        break
      case 'DELETE':
        instance
          .delete<R>(url, { ...config, params })
          .then((res) => {
            resolve(res.data)
          })
          .catch((err: AxiosError) => {
            reject(err)
          })
        break
    }
  })
}
