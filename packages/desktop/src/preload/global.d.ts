import type { PreloadContext } from './preload'

declare global {
  interface Window {
    preloadContext: PreloadContext
  }
}
