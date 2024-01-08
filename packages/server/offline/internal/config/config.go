package config

import "github.com/zeromicro/go-zero/rest"

type Config struct {
	rest.RestConf
	Path string   `json:",default=."`
	Auth struct { // jwt鉴权配置
		AccessSecret string // jwt密钥
		AccessExpire int64  // 有效期，单位：秒
	}

	Global struct {
		SqliteDirPath string
		SqliteDbName  string
		SongDirPath   string
	}
}
