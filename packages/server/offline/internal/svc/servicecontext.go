package svc

import (
	"github.com/zeromicro/go-zero/rest"
	"github.com/zzopen/music/server/offline/internal/config"
	"github.com/zzopen/music/server/offline/internal/core/model"
	"github.com/zzopen/music/server/offline/internal/core/query"
	"github.com/zzopen/music/server/offline/internal/db/sqlite"

	"gorm.io/gorm"
)

type ServiceContext struct {
	Config   config.Config
	SqliteDb *gorm.DB
	Auth     rest.Middleware
}

func NewServiceContext(c config.Config) *ServiceContext {
	sqliteDb := sqlite.NewDb(c)
	query.SetDefault(sqliteDb)
	_ = sqliteDb.AutoMigrate(&model.Song{}, &model.Songsheet{}, &model.SongSongsheet{})

	return &ServiceContext{
		Config:   c,
		SqliteDb: sqliteDb,
	}
}
