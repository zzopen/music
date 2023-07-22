import { createWorker } from './initWorker'

function init() {
  return { ...createWorker() }
}

export type CustomWorker = ReturnType<typeof createWorker>
export { init as initWorker }
export type { WorkerService } from './worker'
