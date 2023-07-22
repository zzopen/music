import sqliteSequelize from './sqlite'
import { entities } from '@main/server/src/db/sqlite/model'

async function init() {
  if (sqliteSequelize.enable()) {
    sqliteSequelize.getClient().addModels([...entities])
  } else {
    console.log('Unable to connect to the database')
  }
}

export { init as initDb }
