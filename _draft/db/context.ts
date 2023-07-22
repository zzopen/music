import { getConnection } from './sequelize'
import { DbContext } from '@main/typings'

function getDbContext(): DbContext {
  return {
    conn: getConnection()
  }
}

export { getDbContext }
