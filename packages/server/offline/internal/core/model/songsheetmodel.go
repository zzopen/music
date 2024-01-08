package model

type Songsheet struct {
	BaseModel
	Name string `gorm:"column:name;type:varchar(100);not null;default:'';comment:歌单名称" json:"name"`
}

func (Songsheet) TableName() string {
	return "songsheet"
}
