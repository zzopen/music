import { VueElement, h } from 'vue'
import { ItemType } from 'ant-design-vue'

function getItem(
  label: VueElement | string,
  key: string,
  icon?: any,
  children?: ItemType[],
  type?: 'group'
): ItemType {
  return {
    key,
    icon,
    children,
    label,
    type
  } as ItemType
}

export { getMenuItem }
