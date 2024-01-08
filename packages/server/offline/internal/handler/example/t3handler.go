package example

import (
	"net/http"

	"github.com/zeromicro/go-zero/rest/httpx"
	"github.com/zzopen/music/server/offline/internal/logic/example"
	"github.com/zzopen/music/server/offline/internal/svc"
)

func T3Handler(svcCtx *svc.ServiceContext) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		l := example.NewT3Logic(r.Context(), svcCtx, r)
		resp, err := l.T3()
		if err != nil {
			httpx.ErrorCtx(r.Context(), w, err)
		} else {
			httpx.OkJsonCtx(r.Context(), w, resp)
		}
	}
}
