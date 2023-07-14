export const devMode = 'development'
export const prodMode = 'production'

export function getEnvMode(): string {
  return import.meta.env.MODE
}

export function isDevMode(): boolean {
  return import.meta.env.DEV
}

export function isProdMode(): boolean {
  return import.meta.env.PROD
}
