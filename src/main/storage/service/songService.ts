import { songDao } from '@main/storage/dao'
import { SongEntity } from '@main/storage/entity'
import { defaultZZDTOSong } from '@common/utils'

function transferSongEntity(entity?: Nilable<SongEntity>): Nilable<ZZ.DTO.Song> {
  if (!entity) {
    return null
  }

  const song: ZZ.DTO.Song = {
    ...defaultZZDTOSong,
    name: entity.name ?? ''
  }

  return song
}

async function getById(id: number): Promise<Nilable<ZZ.DTO.Song>> {
  if (!id) {
    return null
  }

  const res = (await songDao.getById(id)) as Nilable<SongEntity>
  return transferSongEntity(res)
}

async function insert(entity: ZZ.DTO.Song): Promise<boolean> {
  if (!entity) {
    return false
  }

  const songEntity = new SongEntity()
  songEntity.name = entity.name

  const res = await songDao.insert(entity)
  console.log('res:', res)
  return true
}

export default {
  getById,
  insert
}
