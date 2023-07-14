const camelizeRE = /-(\w)/g // 匹配{-xxx}类型

export const camelize = (str: string): string => str.replace(camelizeRE, (_, c) => c.toUpperCase())
