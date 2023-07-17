import { dayjs } from '@main/utils/day'
const now = (): string => {
  return dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')
}

const delay = (time: any) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}

export { now, delay }
