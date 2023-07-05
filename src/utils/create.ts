import {COMPONENT_NAME_PREFIX} from './constant'
import {camelize} from './format'

export function createNamespace(name: string) {
  const prefixedName = `${COMPONENT_NAME_PREFIX}-${name}`;
  return {
    name: prefixedName,
  } as const
}

export function createFullComponentName(name: string){
    return camelize(`-${name}`)
}