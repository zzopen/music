/// <reference types="vite-plugin-electron/electron-env" />

import type { ShareState } from '@main/typings'

declare namespace NodeJS {
  interface ProcessEnv {
    DIST: string
    /** /dist/ or /public/ */
    PUBLIC: string
  }

  interface globalThis {
    shareState: ShareState
  }
}
