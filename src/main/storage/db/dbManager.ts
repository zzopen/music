import Database from 'better-sqlite3'
import { join } from 'node:path'
import { DEFAULT_DB_NAME } from '@main/configs'
import { consoleLog, isDev } from '@main/utils'
import { existsSync, removeSync } from 'fs-extra'
import { TABLES } from '@main/storage/sql'
let db: Database.Database

function getDBInstance(): Database.Database {
  return db
}

function init() {
  const dbPath = join(`${global.shareState.dbDirPath}`, `${DEFAULT_DB_NAME}.db`)
  consoleLog('db-init', `${dbPath}`)
  if (existsSync(dbPath)) {
    consoleLog('db-init', `${dbPath} 已存在`)
    if (isDev) {
      // removeSync(dbPath)
    } else {
      // https://www.sqlite.org/pragma.html#pragma_optimize
      db.exec('PRAGMA optimize;')
    }
  }

  db = new Database(dbPath)
  db.pragma('journal_mode = WAL')

  initTables()
}

function initTables() {
  for (const sql of TABLES) {
    db.exec(sql)
  }
}

export { init as initDB, getDBInstance }
