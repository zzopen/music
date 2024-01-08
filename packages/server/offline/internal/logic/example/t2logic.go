package example

import (
	"context"
	"github.com/zzopen/music/server/offline/internal/core/model"
	"github.com/zzopen/music/server/offline/internal/core/query"
	"github.com/zzopen/music/server/offline/internal/core/response/responsex"

	"github.com/zzopen/music/server/offline/internal/svc"
	"github.com/zzopen/music/server/offline/internal/types"

	"github.com/zeromicro/go-zero/core/logx"
)

type T2Logic struct {
	logx.Logger
	ctx    context.Context
	svcCtx *svc.ServiceContext
}

func NewT2Logic(ctx context.Context, svcCtx *svc.ServiceContext) *T2Logic {
	return &T2Logic{
		Logger: logx.WithContext(ctx),
		ctx:    ctx,
		svcCtx: svcCtx,
	}
}

func (l *T2Logic) T2() (resp *types.Reply, err error) {
	err = insertSongSheet(l)
	err = insertSongs(l)
	if err != nil {
		return nil, err
	}

	return responsex.Success(), nil
}

func insertSongs(l *T2Logic) error {
	q := query.Song

	songs := []*model.Song{
		{
			Name:      "Avid",
			Ext:       "mp3",
			SongPath:  "/Users/xulei/Downloads/data/songs_cache/default/Avid.mp3",
			LyricPath: "/Users/xulei/Downloads/data/songs_cache/default/Avid.lrc"},
		{
			Name:      "LilaS",
			Ext:       "mp3",
			SongPath:  "/Users/xulei/Downloads/data/songs_cache/default/LilaS.mp3",
			LyricPath: "/Users/xulei/Downloads/data/songs_cache/default/LilaS.lrc",
		},
		{
			Name:      "屋顶",
			Ext:       "mp3",
			SongPath:  "/Users/xulei/Downloads/data/songs_cache/default/屋顶.mp3",
			LyricPath: "/Users/xulei/Downloads/data/songs_cache/default/屋顶.lrc",
		},
	}

	return q.WithContext(l.ctx).CreateInBatches(songs, 100)
}

func insertSongSheet(l *T2Logic) error {
	q := query.Songsheet

	songsheets := []*model.Songsheet{
		{
			Name: "离线歌单",
		},
		{
			Name: "我的收藏",
		},
	}

	return q.WithContext(l.ctx).CreateInBatches(songsheets, 100)
}
