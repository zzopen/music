import type { ApiDescription } from '@/business/apis/instance'
import { METHOD } from '@/business/apis/instance'

// songsheet
const URL_SONGSHEET_SONG_LIST = '/songsheet/songList'
const API_URL_SONGSHEET_SONG_LIST: ApiDescription = {
  desc: '歌单歌曲列表',
  url: URL_SONGSHEET_SONG_LIST,
  method: METHOD.GET
}

export { URL_SONGSHEET_SONG_LIST, API_URL_SONGSHEET_SONG_LIST }
