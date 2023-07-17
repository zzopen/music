import { exposeWorker } from '@main/utils'
import * as storage from '@main/storage/db'
import * as service from '@main/storage/service'

const workerDbService = {
  ...storage,
  ...service
}

export type WorkerDbService = typeof workerDbService

console.log('workerDbService:', workerDbService)
exposeWorker(Object.assign({}, workerDbService))
