import { VueElement, h } from 'vue'
import { ItemType } from 'ant-design-vue'

function getMenuItem(
  label: VueElement | string,
  key: string,
  title?: string,
  icon?: any,
  children?: ItemType[],
  type?: 'group'
): ItemType {
  return {
    label,
    key,
    title,
    icon,
    children,
    type
  } as ItemType
}

export { getMenuItem }
