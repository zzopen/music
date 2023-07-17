import { type DataSource } from 'typeorm'

interface DbContext {
  conn: DataSource
}

export type { DbContext }
