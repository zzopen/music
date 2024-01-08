import { API_URL_SONGSHEET_SONG_LIST } from '@/business/apis/description'
import { req } from '@/business/apis/instance'
import { transferSongList } from './transfer'

interface SongListActionParameter {
  songsheetId: string | number
}

const songListAction = async (p: SongListActionParameter): Promise<ZZ.DTO.SongList> => {
  // restful 形式
  const apiDescription = Object.assign({}, API_URL_SONGSHEET_SONG_LIST)
  apiDescription.url += `/${p.songsheetId}`
  const [err, res] = await req.request<ZZ.DTO.SongList>(apiDescription)
  if (err) {
    return Promise.reject(err.msg)
  }

  return transferSongList(res.data)
}

const songsheet = {
  songListAction
}

export { songsheet }
