import { resolve } from 'node:path'
import { Worker } from 'node:worker_threads'
import * as Comlink from 'comlink'
import nodeEndpoint from 'comlink/dist/esm/node-adapter'
import type { WorkerDbService } from './dbWorker'

function init() {
  const worker = new Worker(resolve(__dirname, './dbWorker.js'))
  return Comlink.wrap(nodeEndpoint(worker)) as unknown as WorkerDbService
}

export { init as initDbWorker }
