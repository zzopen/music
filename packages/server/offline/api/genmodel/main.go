package main

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gen"
	"gorm.io/gorm"

	"github.com/zzopen/music/server/offline/internal/core/model"
)

// Dynamic SQL
type Querier interface {
	// SELECT * FROM @@table WHERE name = @name{{if role !=""}} AND role = @role{{end}}
	FilterWithNameAndRole(name, role string) ([]gen.T, error)
}

var flag = false

func main() {
	if flag {
		return
	}

	g := gen.NewGenerator(gen.Config{
		OutPath: "../../internal/core/query",
		Mode:    gen.WithoutContext | gen.WithDefaultQuery | gen.WithQueryInterface, // generate mode
	})

	// gormdb, _ := gorm.Open(mysql.Open("root:@(127.0.0.1:3306)/demo?charset=utf8mb4&parseTime=True&loc=Local"))
	gormdb, _ := gorm.Open(sqlite.Open("/Users/xulei/Downloads/data/db/music.db?mode=wal"), &gorm.Config{})
	g.UseDB(gormdb) // reuse your gorm db

	// Generate basic type-safe DAO API for struct `model.User` following conventions
	//g.ApplyBasic(model.User{})
	g.ApplyBasic(model.Song{})

	// Generate Type Safe API with Dynamic SQL defined on Querier interface for `model.User` and `model.Company`
	//g.ApplyInterface(func(Querier) {}, model.User{}, model.Company{})
	g.ApplyInterface(func(Querier) {}, model.Song{}, model.Songsheet{}, model.SongSongsheet{})

	// Generate the code
	g.Execute()

	flag = true
}
