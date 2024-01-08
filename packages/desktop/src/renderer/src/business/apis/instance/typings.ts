import type { AxiosRequestConfig, Method } from 'axios'

interface RequestOption<T = any> {
  data?: T // post参数
  config?: AxiosRequestConfig // axios config
  delayRequestTime?: number
  delayResponseTime?: number
  background?: boolean
  [propName: string]: any
}

interface ApiDescription {
  desc: string // 描述
  url: string // 对应后端接口地址
  method: Method // 请求方式
}

type ApiResult<T> = {
  code: number | string
  msg: string
  data: T
  [propName: string]: any
}

type ApiError = {
  code: number | string
  msg: string
  [propName: string]: any
}

const METHOD = {
  GET: 'get' as Method,
  POST: 'post' as Method,
  PUT: 'put' as Method,
  DELETE: 'delete' as Method
}

export type { ApiDescription, RequestOption, ApiResult, ApiError }
export { METHOD }
