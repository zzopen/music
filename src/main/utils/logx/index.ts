import { now } from '../time'
import chalk from 'chalk'

function consoleLog(scope: string = 'log', ...msgs: any[]) {
  console.log(
    `${chalk.bgGreenBright.whiteBright.white.red(now())} [${chalk.blueBright.bold(scope)}]:`,
    ...msgs
  )
}

export { consoleLog }
