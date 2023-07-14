import type { ExtractPropTypes } from 'vue'

declare global {
  /**** base ****/
  type Nullable<T> = T | null | undefined
  type Recordable<T> = Record<string, T>
  type ReadonlyRecordable<T> = {
    readonly [key: string]: T
  }

  type Indexable<T> = {
    [key: string]: T
  }

  type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>
  }

  type TimeoutHandle = ReturnType<typeof setTimeout>
  type IntervalHandle = ReturnType<typeof setInterval>

  /**** vue ****/
  type VueExtractFnPropsType<T extends (...args: any) => any> = Partial<
    ExtractPropTypes<ReturnType<T>>
  >
}
