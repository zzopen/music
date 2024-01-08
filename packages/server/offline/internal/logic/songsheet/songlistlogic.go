package songsheet

import (
	"context"
	"github.com/zzopen/music/server/offline/internal/core/response/responsex"
	"github.com/zzopen/music/server/offline/internal/core/service/songsheet"
	"github.com/zzopen/music/server/offline/internal/core/tool"
	"github.com/zzopen/music/server/offline/internal/svc"
	"github.com/zzopen/music/server/offline/internal/types"
	"os"
	"strconv"

	"github.com/zeromicro/go-zero/core/logx"
)

type SongListLogic struct {
	logx.Logger
	ctx    context.Context
	svcCtx *svc.ServiceContext
}

func NewSongListLogic(ctx context.Context, svcCtx *svc.ServiceContext) *SongListLogic {
	return &SongListLogic{
		Logger: logx.WithContext(ctx),
		ctx:    ctx,
		svcCtx: svcCtx,
	}
}

func (l *SongListLogic) SongList(req *types.SongsheetSongListReq) (resp *types.Reply, err error) {
	id, err := strconv.ParseUint(req.Id, 10, 64)
	if id <= 0 {
		return responsex.Fail(), nil
	}

	res := tool.EmptySlice[*types.SongListItem]()
	songList := songsheet.GetSongListBySongSheetId(id)
	if songList != nil {
		for _, value := range songList {
			lyricPath := value.LyricPath
			fullFileName := value.Name + "." + value.Ext

			temp := &types.SongListItem{
				Id:            strconv.FormatUint(value.ID, 10),
				Name:          value.Name,
				Ext:           value.Ext,
				SongLocalPath: value.SongPath,
				CreatedAt:     value.CreatedAt.String(),
				UpdatedAt:     value.UpdatedAt.String(),
				DataUpdatedAt: value.DataUpdatedAt.String(),
			}

			if fullFileName != "" {
				temp.SongRoutePath = "http://localhost:" + strconv.Itoa(l.svcCtx.Config.Port) + "/static/" + fullFileName
			}

			if lyricPath != "" {
				content, _ := os.ReadFile(lyricPath)
				if content != nil {
					temp.LyricText = string(content)
				}
			}

			res = append(res, temp)
		}
	}
	return responsex.SuccessWithData(res), nil
}
