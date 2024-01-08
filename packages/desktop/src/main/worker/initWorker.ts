import { resolve } from 'node:path'
import { Worker } from 'node:worker_threads'
import * as Comlink from 'comlink'
import nodeEndpoint from 'comlink/dist/esm/node-adapter'
import type { WorkerService } from './worker'

function createWorker() {
  const worker = new Worker(resolve(__dirname, './worker.js'))
  return Comlink.wrap(nodeEndpoint(worker)) as unknown as WorkerService
}

export { createWorker }
