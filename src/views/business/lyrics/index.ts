import type { Song, Lyrics } from "@/views/typings";

const REGEX_LINE = /\n/;
const REGEX_TIME = /\[\d{2}:\d{2}.\d{2,3}\]/;
const REGEX_LYRICS = /\[(\d{2})\:(\d{2})\.(\d{2,3})\]\s*(.+)/;

function formatLyricTime (time: string):string {
  if (!time) {
    return  ""
  }

  return ""
}


function lyricsSplit(content: string): Lyrics[] {
    if (!content) {
      return [];
    }

    const lyricsList: Lyrics[] = [];
    const contents = content.split(REGEX_LINE);
    for (const item of contents) {
        let matches = REGEX_LYRICS.exec(item);
        if (!matches) {
            continue;
        }
        let m = parseFloat(matches[1]);
        let s = parseFloat(matches[2]);
        let ms = parseFloat(matches[3]);
        let content = matches[4];
        let time = m * 60 * 1000 + s * 1000 + ms;
        let timeTxt = `${matches[1]}:${matches[2]}.${matches[3]}`;
        const uid = Math.random().toString().slice(-6);
        lyricsList.push({ uid, content, time, timeTxt });
    }

    return lyricsList;
}

export { lyricsSplit };