import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('song')
export class SongEntity {
  @PrimaryGeneratedColumn()
  id?: number

  @Column({ type: 'text', length: 80 })
  name?: string

  @Column({
    name: 'created_at',
    type: 'text',
    nullable: false,
    default: '0000-00-00 00:00:00'
  })
  createdAt?: string

  @Column({
    name: 'updated_at',
    type: 'text',
    nullable: false,
    default: '0000-00-00 00:00:00'
  })
  updatedAt?: string

  // @Column({ type: 'text', length: 300 })
  // lyricUrl?: string

  // @Column({ type: 'text', length: 300 })
  // url?: string
}
