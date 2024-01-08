// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package query

import (
	"context"
	"database/sql"

	"gorm.io/gorm"

	"gorm.io/gen"

	"gorm.io/plugin/dbresolver"
)

var (
	Q             = new(Query)
	Song          *song
	SongSongsheet *songSongsheet
	Songsheet     *songsheet
)

func SetDefault(db *gorm.DB, opts ...gen.DOOption) {
	*Q = *Use(db, opts...)
	Song = &Q.Song
	SongSongsheet = &Q.SongSongsheet
	Songsheet = &Q.Songsheet
}

func Use(db *gorm.DB, opts ...gen.DOOption) *Query {
	return &Query{
		db:            db,
		Song:          newSong(db, opts...),
		SongSongsheet: newSongSongsheet(db, opts...),
		Songsheet:     newSongsheet(db, opts...),
	}
}

type Query struct {
	db *gorm.DB

	Song          song
	SongSongsheet songSongsheet
	Songsheet     songsheet
}

func (q *Query) Available() bool { return q.db != nil }

func (q *Query) clone(db *gorm.DB) *Query {
	return &Query{
		db:            db,
		Song:          q.Song.clone(db),
		SongSongsheet: q.SongSongsheet.clone(db),
		Songsheet:     q.Songsheet.clone(db),
	}
}

func (q *Query) ReadDB() *Query {
	return q.ReplaceDB(q.db.Clauses(dbresolver.Read))
}

func (q *Query) WriteDB() *Query {
	return q.ReplaceDB(q.db.Clauses(dbresolver.Write))
}

func (q *Query) ReplaceDB(db *gorm.DB) *Query {
	return &Query{
		db:            db,
		Song:          q.Song.replaceDB(db),
		SongSongsheet: q.SongSongsheet.replaceDB(db),
		Songsheet:     q.Songsheet.replaceDB(db),
	}
}

type queryCtx struct {
	Song          ISongDo
	SongSongsheet ISongSongsheetDo
	Songsheet     ISongsheetDo
}

func (q *Query) WithContext(ctx context.Context) *queryCtx {
	return &queryCtx{
		Song:          q.Song.WithContext(ctx),
		SongSongsheet: q.SongSongsheet.WithContext(ctx),
		Songsheet:     q.Songsheet.WithContext(ctx),
	}
}

func (q *Query) Transaction(fc func(tx *Query) error, opts ...*sql.TxOptions) error {
	return q.db.Transaction(func(tx *gorm.DB) error { return fc(q.clone(tx)) }, opts...)
}

func (q *Query) Begin(opts ...*sql.TxOptions) *QueryTx {
	tx := q.db.Begin(opts...)
	return &QueryTx{Query: q.clone(tx), Error: tx.Error}
}

type QueryTx struct {
	*Query
	Error error
}

func (q *QueryTx) Commit() error {
	return q.db.Commit().Error
}

func (q *QueryTx) Rollback() error {
	return q.db.Rollback().Error
}

func (q *QueryTx) SavePoint(name string) error {
	return q.db.SavePoint(name).Error
}

func (q *QueryTx) RollbackTo(name string) error {
	return q.db.RollbackTo(name).Error
}
