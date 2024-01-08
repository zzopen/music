package songsheet

import (
	"net/http"

	"github.com/zeromicro/go-zero/rest/httpx"
	"github.com/zzopen/music/server/offline/internal/logic/songsheet"
	"github.com/zzopen/music/server/offline/internal/svc"
	"github.com/zzopen/music/server/offline/internal/types"
)

func SongListHandler(svcCtx *svc.ServiceContext) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var req types.SongsheetSongListReq
		if err := httpx.Parse(r, &req); err != nil {
			httpx.ErrorCtx(r.Context(), w, err)
			return
		}

		l := songsheet.NewSongListLogic(r.Context(), svcCtx)
		resp, err := l.SongList(&req)
		if err != nil {
			httpx.ErrorCtx(r.Context(), w, err)
		} else {
			httpx.OkJsonCtx(r.Context(), w, resp)
		}
	}
}
