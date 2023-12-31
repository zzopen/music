// Code generated by goctl. DO NOT EDIT.
package handler

import (
	"net/http"

	example "github.com/zzopen/music/server/offline/internal/handler/example"
	jwt "github.com/zzopen/music/server/offline/internal/handler/jwt"
	song "github.com/zzopen/music/server/offline/internal/handler/song"
	songsheet "github.com/zzopen/music/server/offline/internal/handler/songsheet"
	"github.com/zzopen/music/server/offline/internal/svc"

	"github.com/zeromicro/go-zero/rest"
)

func RegisterHandlers(server *rest.Server, serverCtx *svc.ServiceContext) {
	server.AddRoutes(
		[]rest.Route{},
	)

	server.AddRoutes(
		[]rest.Route{
			{
				Method:  http.MethodPost,
				Path:    "/token",
				Handler: jwt.TokenHandler(serverCtx),
			},
		},
		rest.WithPrefix("/jwt"),
	)

	server.AddRoutes(
		[]rest.Route{
			{
				Method:  http.MethodGet,
				Path:    "/t1",
				Handler: example.T1Handler(serverCtx),
			},
			{
				Method:  http.MethodGet,
				Path:    "/t2",
				Handler: example.T2Handler(serverCtx),
			},
			{
				Method:  http.MethodPost,
				Path:    "/t3",
				Handler: example.T3Handler(serverCtx),
			},
		},
		rest.WithPrefix("/example"),
	)

	server.AddRoutes(
		[]rest.Route{
			{
				Method:  http.MethodGet,
				Path:    "/list",
				Handler: songsheet.ListHandler(serverCtx),
			},
			{
				Method:  http.MethodGet,
				Path:    "/songList/:id",
				Handler: songsheet.SongListHandler(serverCtx),
			},
		},
		rest.WithJwt(serverCtx.Config.Auth.AccessSecret),
		rest.WithPrefix("/songsheet"),
	)

	server.AddRoutes(
		[]rest.Route{
			{
				Method:  http.MethodGet,
				Path:    "/list",
				Handler: song.ListHandler(serverCtx),
			},
			{
				Method:  http.MethodGet,
				Path:    "/detail/:id",
				Handler: song.DetailHandler(serverCtx),
			},
		},
		rest.WithJwt(serverCtx.Config.Auth.AccessSecret),
		rest.WithPrefix("/song"),
	)
}
