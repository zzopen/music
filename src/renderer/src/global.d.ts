import type { ExtractPropTypes } from 'vue'

declare global {
  /**** vue ****/
  type VueExtractFnPropsType<T extends (...args: any) => any> = Partial<
    ExtractPropTypes<ReturnType<T>>
  >
}
