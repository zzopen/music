package errorx

import (
	"github.com/zzopen/music/server/offline/internal/core/response/codex"
)

type CodeError struct {
	Code int    `json:"code"`
	Msg  string `json:"msg"`
}

// todo: go-zero全局错误处理器不能返回实现Error接口的结构体，否则以文本处理
type CodeErrorResponse struct {
	Code int    `json:"code"`
	Msg  string `json:"msg"`
}

func NewCodeError(code int, msg string) *CodeError {
	return &CodeError{Code: code, Msg: msg}
}

func Error(msg string) *CodeError {
	return NewCodeError(codex.ErrorCode, msg)
}

func (e *CodeError) Error() string {
	return e.Msg
}

func (e *CodeError) Data() *CodeErrorResponse {
	return &CodeErrorResponse{
		Code: e.Code,
		Msg:  e.Msg,
	}
}
