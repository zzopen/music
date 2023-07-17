import { join } from 'node:path'
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { DEFAULT_DB_NAME } from '@main/configs'
import { entities } from '@main/storage/entity'
import { to } from '@main/utils'

let connection: DataSource

function isInitialized() {
  return !!connection && connection.isInitialized
}

async function initDatabase(dbDirPath: string): Promise<boolean> {
  dbDirPath = dbDirPath ? dbDirPath : global.shareState.dbDirPath
  const dbPath = join(`${dbDirPath}`, `${DEFAULT_DB_NAME}.db`)
  if (isInitialized()) {
    return true
  }

  if (!connection) {
    connection = new DataSource({
      type: 'better-sqlite3',
      database: dbPath,
      entities: [...entities],
      synchronize: true,
      logging: false
    })
  }

  if (isInitialized()) {
    return true
  }

  const [err] = await to(connection.initialize())
  if (err) {
    return Promise.reject(err)
  }

  return true
}

function getConnection() {
  return connection
}

export { initDatabase, isInitialized, getConnection }
