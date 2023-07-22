import 'reflect-metadata'
import { Sequelize } from 'sequelize-typescript'
import { join } from 'node:path'
import { DEFAULT_DB_NAME } from '@common/configs'
import { consoleLog } from '@main/utils'
import { entities } from '@main/server/src/db/sqlite/model'
import { SongModel } from '@main/server/src/db/sqlite'

let connection: Sequelize

async function isInitialized(): Promise<boolean> {
  if (!connection) {
    return false
  }

  try {
    await connection.authenticate()
    return true
  } catch (error) {
    consoleLog('Sequelize Error', error)
    return false
  }
}

async function init(dbDirPath: string): Promise<boolean> {
  dbDirPath = dbDirPath ? dbDirPath : global.shareState.dbDirPath
  const dbPath = join(`${dbDirPath}`, `${DEFAULT_DB_NAME}.db`)
  if (await isInitialized()) {
    return true
  }

  if (!connection) {
    connection = new Sequelize({
      dialect: 'sqlite',
      // dialectOptions: {
      //   charset: 'utf8mb4',
      //   dateString: true,
      //   typeCast: true
      // },
      // repositoryMode: true,
      storage: dbPath,
      repositoryMode: false, // 设置为true会出现Model没加载的提示
      models: [...entities]
    })

    await connection.sync()
    // console.log('SongModel:', SongModel.isInitialized)
    // connection.addModels([SongModel])
    // console.log('SongModel:', SongModel.isInitialized)
  }

  return await isInitialized()
}

function getConnection() {
  return connection
}

async function closeConnection() {
  return await connection.close()
}

export { init as initDbConnection, isInitialized, getConnection, closeConnection }
