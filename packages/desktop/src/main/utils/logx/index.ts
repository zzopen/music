import electronLog from 'electron-log'

function consoleLog(scope = 'log', ...msgs: any[]) {
  electronLog.debug(`[${scope}]:`, ...msgs)
}

export { consoleLog }
