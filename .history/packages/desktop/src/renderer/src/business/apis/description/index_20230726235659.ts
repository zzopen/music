import type { ApiDescription } from '@/business/apis/instance'
import { METHOD } from '@/business/apis/instance'

// songsheet
const URL_SONGSHEET_SONG_LIST = '/songsheet/songList'
const API_SONGSHEET_SONG_LIST: ApiDescription = {
  desc: '歌单歌曲列表',
  url: URL_SONGSHEET_SONG_LIST,
  method: METHOD.GET
}

const URL_SONGSHEET_LIST = '/songsheet/list'
const API_SONGSHEET_LIST: ApiDescription = {
  desc: '歌单列表',
  url: URL_SONGSHEET_LIST,
  method: METHOD.GET
}

export { URL_SONGSHEET_SONG_LIST, API_SONGSHEET_SONG_LIST, URL_SONGSHEET_LIST, API_SONGSHEET_LIST }
