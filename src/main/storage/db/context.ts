import { getConnection } from './dataSource'
import { DbContext } from '@main/typings'

function getDbContext(): DbContext {
  return {
    conn: getConnection()
  }
}

export { getDbContext }
