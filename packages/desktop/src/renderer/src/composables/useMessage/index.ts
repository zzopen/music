import { message } from 'ant-design-vue'
import type { MessageInstance } from 'ant-design-vue/es/message/interface'

message.config({
  top: `10px`,
  duration: 2.5,
  maxCount: 3,
  rtl: true
})

function useMessage() {
  const [messageApi, contextHolder] = message.useMessage()
  return {
    messageApi,
    contextHolder
  }
}

function useStaticMessage() {
  return {
    info: message.info,
    error: message.error,
    warning: message.warning,
    success: message.success
  }
}

export { useMessage, useStaticMessage }
type MessageStaticInstance = ReturnType<typeof useStaticMessage>
export type { MessageInstance, MessageStaticInstance }
