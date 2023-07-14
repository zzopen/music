import { now } from '../time'
import { isDevMode } from "../env";
import chalk from "chalk";

function consoleLog (scope:string='log' ,...msgs: any[]) {
  if (isDevMode()) {
    console.log(`${chalk.bgGreenBright.whiteBright.white.red(now())} [${chalk.blueBright.bold(scope)}]:`,...msgs);
  }
};

export { consoleLog };