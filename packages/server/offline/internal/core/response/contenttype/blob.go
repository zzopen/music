package contenttype

import (
	"context"
	"fmt"
	"github.com/zeromicro/go-zero/core/logx"
	"github.com/zeromicro/go-zero/rest/httpx"
	"net/http"
	"os"
  "strconv"
)

// OkBinary writes v into w with 200 OK.
func OkBinary(w http.ResponseWriter, v string, contentType string) {
	WriteBinary(w, http.StatusOK, v, contentType)
}

// OkBinaryCtx writes v into w with 200 OK.
func OkBinaryCtx(ctx context.Context, w http.ResponseWriter, v string, contentType string) {
	WriteBinaryCtx(ctx, w, http.StatusOK, v, contentType)
}

// WriteBinary writes v as file string into w with code.
func WriteBinary(w http.ResponseWriter, code int, v string, contentType string) {
	if err := doWriteBinary(w, code, v, contentType); err != nil {
		logx.Error(err)
	}
}

// WriteBinaryCtx writes v as file string into w with code.
func WriteBinaryCtx(ctx context.Context, w http.ResponseWriter, code int, v string, contentType string) {
	if err := doWriteBinary(w, code, v, contentType); err != nil {
		logx.WithContext(ctx).Error(err)
	}
}

func doWriteBinary(w http.ResponseWriter, code int, v string, contentType string) error {
	bs, err := os.ReadFile(v)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return fmt.Errorf("file to byte failed, error: %w", err)
	}

	w.Header().Set(httpx.ContentType, contentType)
	w.Header().Set("Accept-Ranges", "bytes")
	length := len(bs)
	w.Header().Set("Content-Length", strconv.Itoa(length))
	w.WriteHeader(code)

	if n, err := w.Write(bs); err != nil {
		// http.ErrHandlerTimeout has been handled by http.TimeoutHandler,
		// so it's ignored here.
		if err != http.ErrHandlerTimeout {
			return fmt.Errorf("write response failed, error: %w", err)
		}
	} else if n < len(bs) {
		return fmt.Errorf("actual bytes: %d, written bytes: %d", len(bs), n)
	}

	return nil
}
