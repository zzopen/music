// import { resolve } from 'node:path'
// import * as Comlink from 'comlink'
// import nodeEndpoint from 'comlink/dist/esm/node-adapter'
import creatWorker from './worker?nodeWorker'
import callFork from './fork'

// async function initDbServiceWorker() {
//   const worker = creatWorker({})
//   console.log('worker:', worker)
//   const obj = Comlink.wrap(nodeEndpoint(worker))
//   console.log(`Counter: ${await obj.counter}`)
//   await obj.inc()
//   console.log(`Counter: ${await obj.counter}`)
// }

// export { initDbServiceWorker }

creatWorker({ workerData: 'worker' })
  .on('message', (message) => {
    console.log(`\nMessage from worker: ${message}`)
  })
  .postMessage('')

callFork()
