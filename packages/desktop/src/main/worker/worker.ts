import { exposeWorker } from '@main/utils'

const workerService = {
  example: () => {
    return 'hello worker'
  }
}

export type WorkerService = typeof workerService
exposeWorker(Object.assign({}, workerService))
