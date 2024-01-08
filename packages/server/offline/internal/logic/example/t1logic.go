package example

import (
	"context"
	"fmt"
	"github.com/zeromicro/go-zero/core/logx"
	"github.com/zzopen/music/server/offline/internal/core/model"
	"github.com/zzopen/music/server/offline/internal/core/query"
	"github.com/zzopen/music/server/offline/internal/core/response/responsex"
	"github.com/zzopen/music/server/offline/internal/svc"
	"github.com/zzopen/music/server/offline/internal/types"
)

type T1Logic struct {
	logx.Logger
	ctx    context.Context
	svcCtx *svc.ServiceContext
}

func NewT1Logic(ctx context.Context, svcCtx *svc.ServiceContext) *T1Logic {
	return &T1Logic{
		Logger: logx.WithContext(ctx),
		ctx:    ctx,
		svcCtx: svcCtx,
	}
}

func (l *T1Logic) T1() (resp *types.Reply, err error) {
	//res := testInsert()
	res := testSearch()
	if res {
		return responsex.Success(), nil
	}

	return responsex.Fail(), nil
}

func testInsert() bool {
	song := model.Song{Name: "你好"}
	s := query.Song
	ctx := context.Background()
	err := s.WithContext(ctx).Create(&song)
	fmt.Println(song)
	if err != nil {
		fmt.Println(err)
		return false
	}

	return true
}

func testSearch() bool {
	s := query.Song
	ctx := context.Background()
	song, err := s.WithContext(ctx).Where(s.ID.Eq(1)).First()
	fmt.Println(song)
	if err != nil {
		fmt.Println(err)
		return false
	}

	return true
}
