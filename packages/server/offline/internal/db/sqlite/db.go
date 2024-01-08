package sqlite

import (
	"log"
	"net/url"
	"os"
	"time"

	"github.com/zzopen/music/server/offline/internal/config"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

var newLogger = logger.New(
	log.New(os.Stdout, "\r\n", log.LstdFlags), // io writer
	logger.Config{
		SlowThreshold:             time.Second, // Slow SQL threshold
		LogLevel:                  logger.Info, // Log level
		IgnoreRecordNotFoundError: true,        // Ignore ErrRecordNotFound error for logger
		ParameterizedQueries:      true,        // Don't include params in the SQL log
		Colorful:                  false,       // Disable color
	},
)

func NewDb(c config.Config) *gorm.DB {
	if c.Global.SqliteDirPath == "" {
		panic("SqliteDirPath is empty")
	}

	if c.Global.SqliteDbName == "" {
		panic("SqliteDbName is empty")
	}

	dbPath, _ := url.JoinPath(c.Global.SqliteDirPath, c.Global.SqliteDbName+".db")
	db, err := gorm.Open(sqlite.Open(dbPath+"?mode=wal"), &gorm.Config{
		Logger:                                   newLogger,
		DisableForeignKeyConstraintWhenMigrating: true,
	})
	if err != nil {
		panic("failed to connect database")
	}

	return db
}
