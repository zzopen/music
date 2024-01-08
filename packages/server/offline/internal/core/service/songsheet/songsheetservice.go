package songsheet

import (
	"github.com/zzopen/music/server/offline/internal/core/model"
	"github.com/zzopen/music/server/offline/internal/core/query"
)

// GetSongListBySongSheetId 获取歌单歌曲列表
func GetSongListBySongSheetId(id uint64) []*model.Song {
	//if id <= 0 {
	//	return nil
	//}
	//
	//q := query.Song
	//res, err := q.Where(q.SongsheetId.Eq(id)).Find()
	//if err != nil {
	//	return nil
	//}

	return nil
}

// GetSongsheetList 获取歌单列表
func GetSongsheetList() []*model.Songsheet {
	q := query.Songsheet
	res, err := q.Find()
	if err != nil {
		return nil
	}

	return res
}
