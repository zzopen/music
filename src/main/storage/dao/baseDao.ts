import { getDbContext } from '@main/storage/db'

export class BaseDao {
  public entity: any

  public constructor(entity: any) {
    this.entity = entity
  }

  public async getQueryBuilder() {
    return getDbContext().conn.getRepository(this.entity).createQueryBuilder()
  }

  public async getById(id: number) {
    const builder = await this.getQueryBuilder()
    return builder.where('id = :id', { id }).limit(1).getOne()
  }

  public async deleteById(id: number): Promise<boolean> {
    const res = this.getById(id)
    if (!res) {
      return true
    }

    const builder = await this.getQueryBuilder()
    await builder.delete().where('id = :id', { id }).execute()
    return true
  }

  public async insert(data: any) {
    const builder = await this.getQueryBuilder()
    return await builder.insert().values(data).execute()
  }

  public async count() {
    const builder = await this.getQueryBuilder()
    return builder.getCount()
  }
}
