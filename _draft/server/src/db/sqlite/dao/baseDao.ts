// import type { Model } from 'sequelize-typescript'
// import { getDbContext } from '@main/storage'

/**
 * 因为数据库是异步初始化的，所以repostory不能提前设置
 */
// export class BaseDao<T extends Model> {
// public model: new () => T
// public constructor(model: new () => T) {
//   this.model = model
// }
// public getRepostory() {
//   return getDbContext().conn.getRepository<T>(this.model)
// }
// public async getById(id: number) {
//   const repostory = this.getRepostory()
//   return await repostory.findOne<T>({ where: { id: id } })
// }
// public async deleteById(id: number): Promise<boolean> {
//   const res = this.getById(id)
//   if (!res) {
//     return true
//   }
//   const builder = await this.getQueryBuilder()
//   await builder.delete().where('id = :id', { id }).execute()
//   return true
// }
// public async insert(data: any) {
//   const builder = await this.getQueryBuilder()
//   return await builder.insert().values(data).execute()
// }
// public async count() {
//   const builder = await this.getQueryBuilder()
//   return builder.getCount()
// }
// }
