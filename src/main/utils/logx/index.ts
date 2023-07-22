import { now } from '@main/utils/timex'
import electronLog from 'electron-log'

function consoleLog(scope = 'log', ...msgs: any[]) {
  electronLog.info(`%cRed ${now()} %cGreen[${scope}]:`, 'color: red', 'color: green', ...msgs)
}

export { consoleLog }
