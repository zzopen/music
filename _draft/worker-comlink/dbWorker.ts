import { exposeWorker } from '@main/utils'
import * as db from '@main/sqlite/db'
import * as service from '@main/sqlite/service'

const workerDbService = {
  ...db,
  ...service
}

export type WorkerDbService = typeof workerDbService

console.log('workerDbService:', workerDbService)
exposeWorker(Object.assign({}, workerDbService))
