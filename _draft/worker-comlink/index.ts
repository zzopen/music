import { initDbWorker } from './initDbWorker'

function initWorker() {
  return {
    dbService: initDbWorker()
  }
}

export type CustomWorker = ReturnType<typeof initWorker>
export { initWorker }
export type { WorkerDbService } from './dbWorker'
