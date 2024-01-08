import { Sequelize } from 'sequelize-typescript'

class SqliteSequelize {
  private static _instance: SqliteSequelize
  private sequelizeClient: Sequelize | null = null
  public enableStatus = false

  private constructor() {
    const sequelizeClient = new Sequelize({
      dialect: 'sqlite',
      storage: '',
      dialectOptions: {
        dateStrings: true,
        typeCast: true
      },
      repositoryMode: false
    })
    sequelizeClient
      .authenticate()
      .then(() => {
        this.enableStatus = true
        console.log('SequelizeClient has been login successfully.')
      })
      .catch((err) => {
        this.enableStatus = false
        sequelizeClient.close()
        console.error('Unable to connect to the database:', err)
      })

    this.sequelizeClient = sequelizeClient
  }

  public static getInstance() {
    if (!this._instance) {
      SqliteSequelize._instance = new SqliteSequelize()
    }
    return SqliteSequelize._instance
  }

  public getClient() {
    return this.sequelizeClient!
  }

  public enable() {
    return this.enableStatus
  }
}

export default SqliteSequelize.getInstance()
