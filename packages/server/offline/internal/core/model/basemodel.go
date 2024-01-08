package model

// https://www.printlove.cn/tools/sql2gorm

import (
	"github.com/zzopen/music/server/offline/internal/core/model/datatypes"
)

type BaseModel struct {
	ID            uint64             `gorm:"column:id;type:int;primarykey;unique;autoIncrement;not null;comment:主键ID" json:"id"`
	Creater       string             `gorm:"column:creater;type:varchar(20);not null;default:'';comment:创建者" json:"creater"`
	Updater       string             `gorm:"column:updater;type:varchar(20);not null;default:'';comment:更新着" json:"updater"`
	CreatedAt     datatypes.DateTime `gorm:"column:created_at;type:datetime;not null;default:CURRENT_TIMESTAMP;comment:创建时间;autoCreateTime" json:"created_at"`
	UpdatedAt     datatypes.DateTime `gorm:"column:updated_at;type:datetime;not null;default:CURRENT_TIMESTAMP;comment:更新时间;autoUpdateTime" json:"updated_at"`
	DataUpdatedAt datatypes.DateTime `gorm:"column:data_updated_at;type:datetime;not null;default:CURRENT_TIMESTAMP;comment:数据更新时间;autoUpdateTime:false" json:"data_updated_at"`
}
