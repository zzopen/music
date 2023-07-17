import { now } from '@main/utils/time'
import chalk from 'chalk'

function consoleLog(scope = 'log', ...msgs: any[]) {
  console.log(
    `${chalk.bgGreenBright.whiteBright.white.red(now())} [${chalk.blueBright.bold(scope)}]:`,
    ...msgs
  )
}

export { consoleLog }
