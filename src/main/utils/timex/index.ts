import { dayjs } from '@common/utils'
const now = (): string => {
  return dayjs().format('YYYY-MM-DD HH:mm:ss')
}

const nowTMDHM = (): string => {
  return dayjs().format('YYYY-MM-DD HH:mm')
}

const currentDate = (): string => {
  return dayjs().format('YYYY-MM-DD')
}

const delay = (time: any) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}

export { now, nowTMDHM, currentDate, delay }
