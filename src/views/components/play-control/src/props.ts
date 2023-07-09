const playControlProps = () => ({
  playStatus: { type: Boolean, default: false }
});

type PlayControlProps = VueExtractFnPropsType<typeof playControlProps>;

export { type PlayControlProps, playControlProps };
