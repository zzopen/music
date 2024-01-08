const menuItemProps = () => ({
  type: { type: String, default: '' },
  route: { type: String, default: '' }
})

type MenuItemProps = VueExtractFnPropsType<typeof menuItemProps>

export { type MenuItemProps, menuItemProps }
