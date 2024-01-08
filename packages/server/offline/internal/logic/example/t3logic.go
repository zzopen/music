package example

import (
	"context"
	"github.com/zeromicro/go-zero/core/logc"
	"github.com/zzopen/music/server/offline/internal/core/response/responsex"
	"io"
	"net/http"
	"os"
	"path"
	"path/filepath"

	"github.com/zzopen/music/server/offline/internal/svc"
	"github.com/zzopen/music/server/offline/internal/types"

	"github.com/zeromicro/go-zero/core/logx"
)

type T3Logic struct {
	logx.Logger
	ctx    context.Context
	svcCtx *svc.ServiceContext
	r      *http.Request
}

const maxFileSize = 10 << 20 // 10 MB

func NewT3Logic(ctx context.Context, svcCtx *svc.ServiceContext, r *http.Request) *T3Logic {
	return &T3Logic{
		Logger: logx.WithContext(ctx),
		ctx:    ctx,
		svcCtx: svcCtx,
		r:      r,
	}
}

func (l *T3Logic) T3() (resp *types.Reply, err error) {
	err = l.r.ParseMultipartForm(maxFileSize)
	if err != nil {
		return responsex.Fail(), err
	}

	for _, headers := range l.r.MultipartForm.File {
		for _, header := range headers {
			filePath := filepath.Join("./upload", header.Filename)
			logc.Info(l.ctx, "recv file: %s\n", header.Filename, filePath)

			tempFile, err := os.Create(path.Join(l.svcCtx.Config.Global.SongDirPath, header.Filename))
			if err != nil {
				return responsex.Fail(), err
			}
			defer tempFile.Close()
			io.Copy(tempFile, file)
		}
	}

	return responsex.Success(), nil
}
