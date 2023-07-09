type VueExtractFnPropsType<T extends (...args: any) => any> = Partial<ExtractPropTypes<ReturnType<T>>>;
