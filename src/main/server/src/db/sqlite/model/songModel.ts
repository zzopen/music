import { Table, Column, DataType, Comment } from 'sequelize-typescript'
import { BaseModel } from './baseModel'

@Table({ tableName: 'song', timestamps: false })
class SongModel extends BaseModel {
  @Comment('名称')
  @Column({ type: DataType.TEXT, field: 'name', defaultValue: '' })
  declare name: string

  @Comment('歌曲本地路径')
  @Column({ type: DataType.TEXT, field: 'song_path', defaultValue: '' })
  declare songPath: string

  @Comment('歌词本地路径')
  @Column({ type: DataType.TEXT, field: 'lyric_path', defaultValue: '' })
  declare lyricPath: string
}

export { SongModel }
