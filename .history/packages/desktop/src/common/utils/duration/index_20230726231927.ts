import { dayjs } from '@common/utils'

function minute(val: number) {
  return dayjs(val * 1000).format('mm:ss')
}

export { minute }
