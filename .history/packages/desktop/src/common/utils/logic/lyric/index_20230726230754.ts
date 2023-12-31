import { readFile } from 'fs-extra'
const REGEX_LINE = /\n/
const REGEX_TIME = /\[\d{2}:\d{2}.\d{2,3}\]/
const REGEX_LYRIC = /\[(\d{2})\:(\d{2})\.(\d{2,3})\]\s*(.+)/

async function loadLyricFromFile(file: string) {
  if (!file) {
    return ''
  }

  const res = await readFile(file)
  console.log('res:', res)
  return res.toString()
}

async function lyricSplitFromFile(file: string): Promise<[Lyrics, string]> {
  if (!file) {
    return [[], '']
  }

  const content = await loadLyricFromFile(file)
  return [lyricSplit(content), content]
}

function lyricSplit(content: string): Lyrics {
  if (!content) {
    return []
  }

  const lyricList: Lyrics = []
  const contents = content.split(REGEX_LINE)
  for (const item of contents) {
    const matches = REGEX_LYRIC.exec(item)
    if (!matches) {
      continue
    }
    const m = parseFloat(matches[1])
    const s = parseFloat(matches[2])
    const ms = parseFloat(matches[3])
    const text = matches[4]
    const time = m * 60 * 1000 + s * 1000 + ms
    const timeText = `${matches[1]}:${matches[2]}.${matches[3]}`
    const uid = Math.random().toString().slice(-6)
    lyricList.push({ uid, text, time, timeText })
  }

  return lyricList
}

function getCurLyricIndex(curTime: number, lastIndex = -1, lyricList: Lyrics = []) {
  const len = lyricList.length
  if (len === 0) {
    return -1
  }

  if (lastIndex === len - 1) {
    return lastIndex
  }

  let i = 0 // 默认从开始遍历，如果有参照index的话，就从参照index开始遍历
  if (lastIndex != -1) {
    i = lastIndex
  }

  for (i; i < len; i++) {
    if (curTime * 1000 < lyricList[i].time) {
      return i - 1
    }
  }

  return len - 1
}

export { lyricSplitFromFile, lyricSplit, getCurLyricIndex }
