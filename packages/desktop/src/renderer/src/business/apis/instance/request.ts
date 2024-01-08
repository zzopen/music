import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import type { ApiResult, RequestOption, ApiDescription, ApiError } from './typings'
import { isSuccess, isFail, NETWORK_ERROR_MSG } from './response'
import { delay } from '@common/utils'
import { consoleLog } from '@/business/utils'
import { useStaticMessage, type MessageStaticInstance } from '@/composables'

export class AxiosRequest {
  instance: AxiosInstance
  baseConfig: AxiosRequestConfig = {
    baseURL: 'http://localhost:8989',
    timeout: 100000,
    withCredentials: false,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  messageApi: MessageStaticInstance

  constructor(config?: AxiosRequestConfig) {
    this.messageApi = useStaticMessage()
    this.instance = axios.create(Object.assign(this.baseConfig, config))
    this.initInterceptors()
  }

  private initInterceptors() {
    this.setRequestInterceptor()
    this.setResponseInterceptor()
  }

  private setRequestInterceptor() {
    this.instance.interceptors.request.use(
      async (config: AxiosRequestConfig) => {
        // todo: 波浪线是axios bug，代码无问题，无需理会
        // 一般会请求拦截里面加token，用于后端的验证
        const token = await window.preloadContext.tokenService.getToken()
        if (token) {
          config.headers!.Authorization = token
        }

        return config
      },
      (error: any) => {
        // 可以使用全局组件进行提示
        consoleLog('request use error', error)
        return Promise.reject(error)
      }
    )
  }

  private setResponseInterceptor() {
    this.instance.interceptors.response.use(
      async (response: AxiosResponse) => {
        return response
      },
      (error: any) => {
        let message = ''
        const status = error.response?.status
        console.log('error:', error)
        switch (status) {
          case 400:
            message = '请求错误(400)'
            break
          case 401:
            message = '未授权，请重新登录(401)'
            // 这里可以做清空storage并跳转到登录页的操作
            break
          case 403:
            message = '拒绝访问(403)'
            break
          case 404:
            message = '请求出错(404)'
            break
          case 408:
            message = '请求超时(408)'
            break
          case 500:
            message = '服务器错误(500)'
            break
          case 501:
            message = '服务未实现(501)'
            break
          case 502:
            message = '网络错误(502)'
            break
          case 503:
            message = '服务不可用(503)'
            break
          case 504:
            message = '网络超时(504)'
            break
          case 505:
            message = 'HTTP版本不受支持(505)'
            break
          default:
            message = `连接出错(${error.response.status})!`
        }

        consoleLog('response error msg:', message)
        return Promise.reject(error)
      }
    )
  }

  private get<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<ApiResult<T>>> {
    return this.instance.get(url, config)
  }

  private post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<ApiResult<T>>> {
    return this.instance.post(url, data, config)
  }

  private put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<ApiResult<T>>> {
    return this.instance.put(url, data, config)
  }

  private delete<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<ApiResult<T>>> {
    return this.instance.delete(url, config)
  }

  // 自定义请求
  public async request<T = any>(
    description: ApiDescription,
    opts?: RequestOption
  ): Promise<[Nilable<ApiError>, ApiResult<T>]> {
    // 接口请求默认配置
    const defaultReqestOptions = { delayRequestTime: 0, delayResponseTime: 0, background: true }
    const reqestOptions = Object.assign({}, defaultReqestOptions, { ...opts })
    const { data, config, ...instanceConfig } = reqestOptions

    if (instanceConfig.delayRequestTime > 0) {
      await delay(instanceConfig.delayRequestTime)
    }

    const { method, url } = description
    let methodDo: Promise<AxiosResponse<ApiResult<T>>>
    if (method == 'get' || method == 'GET') {
      methodDo = this.get<T>(url, config)
    } else if (method == 'post' || method == 'POST') {
      methodDo = this.post<T>(url, data, config)
    } else if (method == 'delete' || method == 'DELETE') {
      methodDo = this.delete<T>(url, config)
    } else if (method == 'put' || method == 'PUT') {
      methodDo = this.put<T>(url, config)
    } else {
      return Promise.reject(new Error(`不支持的请求方式${method}`))
    }

    const response = await methodDo

    let failResult: Nilable<ApiError>
    const apiResult: ApiResult<T> = response!.data
    const { code, msg } = apiResult
    const tip = msg || NETWORK_ERROR_MSG

    if (isSuccess(code)) {
      //
    } else if (isFail(code)) {
      if (!instanceConfig.background) {
        this.messageApi.error(tip)
      }

      failResult = { code, msg }
    } else {
      if (!instanceConfig.background) {
        this.messageApi.error(tip)
      }
      failResult = { code, msg }
    }

    return [failResult, apiResult]
  }
}
