import type {ShareState} from '@electron/typings'
export {}
declare global {
  namespace globalThis {
        var shareState: ShareState
    }
}
