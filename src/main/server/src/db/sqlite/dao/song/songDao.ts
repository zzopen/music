import { SongModel } from '@main/server/src/db/sqlite/model/songModel'
import { Op } from 'sequelize'
class SongDao {
  public async getById(id: number) {
    return await SongModel.findOne<SongModel>({ where: { id: id } })
  }

  public async getByIds(ids: (number | string)[]) {
    return await SongModel.findAll<SongModel>({ where: { id: { [Op.in]: ids } } })
  }
}
const songDao = new SongDao()
export { songDao, SongDao }
