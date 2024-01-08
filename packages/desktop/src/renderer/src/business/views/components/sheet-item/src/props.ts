const sheetItemProps = () => ({
  title: { type: String, default: '' },
  route: { type: String, default: '' }
})
type SheetItemProps = VueExtractFnPropsType<typeof sheetItemProps>

export { type SheetItemProps, sheetItemProps }
