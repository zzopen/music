import { req } from '@/business/apis/instance'
import { API_SONGSHEET_SONG_LIST, API_SONGSHEET_LIST } from '@/business/apis/description'
import { transferSongList, transferSongsheetList } from './transfer'

interface SongListActionParameter {
  songsheetId: string | number
}

const songListAction = async (p: SongListActionParameter): Promise<ZZ.DTO.SongList> => {
  // restful 形式
  const apiDescription = Object.assign({}, API_SONGSHEET_SONG_LIST)
  apiDescription.url += `/${p.songsheetId}`
  const [err, res] = await req.request<ZZ.DTO.SongList>(apiDescription)
  if (err) {
    return Promise.reject(err.msg)
  }

  return transferSongList(res.data)
}

const songsheetListAction = async (): Promise<ZZ.DTO.SongsheetList> => {
  const apiDescription = Object.assign({}, API_SONGSHEET_LIST)
  const [err, res] = await req.request<ZZ.DTO.SongsheetList>(apiDescription)
  if (err) {
    return Promise.reject(err.msg)
  }

  return transferSongsheetList(res.data)
}

const songsheet = {
  songListAction,
  songsheetListAction
}

export { songsheet }
