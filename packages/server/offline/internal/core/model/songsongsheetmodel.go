package model

type SongSongsheet struct {
	BaseModel
	SongId      uint64 `gorm:"column:song_id;type:int;not null;default:0;comment:歌曲表ID" json:"song_id"`
	SongsheetId uint64 `gorm:"column:songsheet_id;type:int;not null;default:0;comment:歌单表ID" json:"songsheet_id"`
	Status      uint64 `gorm:"column:status;type:int;not null;default:0;comment:状态 1-有效；2-无效" json:"status"`
}

func (SongSongsheet) TableName() string {
	return "song_songsheet"
}
