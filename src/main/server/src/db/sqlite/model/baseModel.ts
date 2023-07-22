import { Model, Column, BeforeCreate, BeforeUpdate, DataType, Comment } from 'sequelize-typescript'
import { now } from '@main/utils'

class BaseModel extends Model {
  @Comment('创建时间')
  @Column({ type: DataType.STRING, field: 'created_at', defaultValue: '0000-00-00 00:00:00' })
  declare createdAt: string

  @Comment('更新时间')
  @Column({ type: DataType.STRING, field: 'updated_at', defaultValue: '0000-00-00 00:00:00' })
  declare updatedAt: string

  @Comment('业务数据更新时间')
  @Column({ type: DataType.STRING, field: 'data_updated_at', defaultValue: '0000-00-00 00:00:00' })
  declare dataUpdatedAt: string

  @Comment('创建者')
  @Column({ type: DataType.STRING, field: 'creater', defaultValue: '' })
  declare creater: string

  @Comment('修改者')
  @Column({ type: DataType.STRING, field: 'updater', defaultValue: '' })
  declare updater: string

  @BeforeCreate
  static alterCreatedAt(instance: BaseModel) {
    const nowDateTime = now()
    instance.createdAt = nowDateTime
    instance.updatedAt = nowDateTime
    instance.dataUpdatedAt = nowDateTime
  }

  @BeforeUpdate
  static alterUpdatedAt(instance: BaseModel) {
    const nowDateTime = now()
    instance.updatedAt = nowDateTime
  }
}

export { BaseModel }
