const menuSectionProps = () => ({
  title: { type: String, default: '' }
})
type MenuSectionProps = VueExtractFnPropsType<typeof menuSectionProps>
export { type MenuSectionProps, menuSectionProps }
