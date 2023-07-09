interface Song {
  name: string;
  singer: string;
  album: string;
  lyrics: Lyrics[];
  lyricsText: string;
  translation?: string
}

interface Lyrics {
    uid: string
    time: Number
    timeTxt: string
    content: string
}

export type { Song, Lyrics };