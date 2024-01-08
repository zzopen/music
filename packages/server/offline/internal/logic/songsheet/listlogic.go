package songsheet

import (
	"context"
	"github.com/zzopen/music/server/offline/internal/core/response/responsex"
	"github.com/zzopen/music/server/offline/internal/core/service/songsheet"
	"github.com/zzopen/music/server/offline/internal/core/tool"
	"strconv"

	"github.com/zzopen/music/server/offline/internal/svc"
	"github.com/zzopen/music/server/offline/internal/types"

	"github.com/zeromicro/go-zero/core/logx"
)

type ListLogic struct {
	logx.Logger
	ctx    context.Context
	svcCtx *svc.ServiceContext
}

func NewListLogic(ctx context.Context, svcCtx *svc.ServiceContext) *ListLogic {
	return &ListLogic{
		Logger: logx.WithContext(ctx),
		ctx:    ctx,
		svcCtx: svcCtx,
	}
}

func (l *ListLogic) List(req *types.SongsheetListReq) (resp *types.Reply, err error) {
	res := tool.EmptySlice[*types.SongsheetListItem]()
	songsheetList := songsheet.GetSongsheetList()
	if songsheetList != nil {
		for _, value := range songsheetList {
			temp := &types.SongsheetListItem{
				Id:            strconv.FormatUint(value.ID, 10),
				Name:          value.Name,
				CreatedAt:     value.CreatedAt.String(),
				UpdatedAt:     value.UpdatedAt.String(),
				DataUpdatedAt: value.DataUpdatedAt.String(),
			}
			res = append(res, temp)
		}
	}
	return responsex.SuccessWithData(res), nil
}
