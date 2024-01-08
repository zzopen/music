package model

type Song struct {
	BaseModel
	Name      string `gorm:"column:name;type:varchar(100);not null;default:'';comment:歌曲名称" json:"name"`
	Ext       string `gorm:"column:ext;type:varchar(10);not null;default:'';comment:扩展后缀" json:"ext"`
	Mark      uint64 `gorm:"column:mark;type:int;not null;default:0;comment:类型 1-文件导入；2-下载" json:"mark"`
	SongPath  string `gorm:"column:song_path;type:varchar(200);not null;default:'';comment:歌曲路径" json:"song_path"`
	LyricPath string `gorm:"column:lyric_path;type:varchar(200);not null;default:'';comment:歌词路径" json:"lyric_path"`
}

func (Song) TableName() string {
	return "song"
}
