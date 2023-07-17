// import * as Comlink from 'comlink'

// const obj = {
//   counter: 0,
//   inc() {
//     this.counter++
//   }
// }

// Comlink.expose(obj)

import { parentPort, workerData } from 'worker_threads'

const port = parentPort
if (!port) throw new Error('IllegalState')

port.on('message', () => {
  port.postMessage(`hello ${workerData}`)
})
