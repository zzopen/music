package responsex

import (
	"github.com/zzopen/music/server/offline/internal/core/response/codex"
	"github.com/zzopen/music/server/offline/internal/types"
)

type ApiResponse = types.Reply

type ApiResponseOption func(*ApiResponse)

func WithData(value any) ApiResponseOption {
	return func(opts *ApiResponse) {
		opts.Data = value
	}
}

func WithMsg(value string) ApiResponseOption {
	return func(opts *ApiResponse) {
		opts.Msg = value
	}
}

func WithCode(value int) ApiResponseOption {
	return func(opts *ApiResponse) {
		opts.Code = value
	}
}

func NewApiResponse(opts ...ApiResponseOption) *ApiResponse {
	res := &ApiResponse{}
	for _, opt := range opts {
		opt(res)
	}

	return res
}

func Success() *ApiResponse {
	return NewApiResponse(WithCode(codex.SuccessCode), WithMsg(codex.SuccessMsg), WithData(nil))
}

func SuccessWithData(data any) *ApiResponse {
	return NewApiResponse(WithCode(codex.SuccessCode), WithMsg(codex.SuccessMsg), WithData(data))
}

func Fail() *ApiResponse {
	return NewApiResponse(WithCode(codex.ErrorCode), WithMsg(codex.FailMsg), WithData(nil))
}

func FailWithMsg(msg string) *ApiResponse {
	return NewApiResponse(WithCode(codex.ErrorCode), WithMsg(msg), WithData(nil))
}
