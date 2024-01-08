const SUCCESS_CODE = 0
const FAIL_CODE = 1

const NETWORK_ERROR_MSG = '网络异常，建议您刷新页面或者稍后再试'

function isSuccess(code: number | string) {
  return code == SUCCESS_CODE
}

function isFail(code: number | string) {
  return code == FAIL_CODE
}

export { isSuccess, isFail, NETWORK_ERROR_MSG }
