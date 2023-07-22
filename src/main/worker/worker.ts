import { exposeWorker } from '@main/utils'

const workerService = {}

export type WorkerService = typeof workerService

console.log('WorkerService:', workerService)
exposeWorker(Object.assign({}, workerService))
