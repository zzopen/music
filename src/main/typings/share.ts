interface ShareState {
  isDev: boolean
  songDirPath: string
}

const defaultShareState: ShareState = {
  isDev: true,
  songDirPath: ''
}

export type { ShareState }
export { defaultShareState }
