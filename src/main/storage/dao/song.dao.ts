import { SongEntity } from '@main/storage/entity/song.entity'
import { BaseDao } from './baseDao'

class SongDao extends BaseDao {}
const songDao = new SongDao(SongEntity)
export { songDao }
