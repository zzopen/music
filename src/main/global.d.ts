/// <reference types="vite-plugin-electron/electron-env" />

/* eslint-disable no-var */
import { ShareState } from '@main/typings'

declare namespace NodeJS {
  interface ProcessEnv {
    DIST: string
    PUBLIC: string
  }
}

declare global {
  var shareState: ShareState
}
