// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package query

import (
	"context"
	"strings"

	"gorm.io/gorm"
	"gorm.io/gorm/clause"
	"gorm.io/gorm/schema"

	"gorm.io/gen"
	"gorm.io/gen/field"

	"gorm.io/plugin/dbresolver"

	"github.com/zzopen/music/server/offline/internal/core/model"
)

func newSong(db *gorm.DB, opts ...gen.DOOption) song {
	_song := song{}

	_song.songDo.UseDB(db, opts...)
	_song.songDo.UseModel(&model.Song{})

	tableName := _song.songDo.TableName()
	_song.ALL = field.NewAsterisk(tableName)
	_song.ID = field.NewUint64(tableName, "id")
	_song.Creater = field.NewString(tableName, "creater")
	_song.Updater = field.NewString(tableName, "updater")
	_song.CreatedAt = field.NewField(tableName, "created_at")
	_song.UpdatedAt = field.NewField(tableName, "updated_at")
	_song.DataUpdatedAt = field.NewField(tableName, "data_updated_at")
	_song.Name = field.NewString(tableName, "name")
	_song.Ext = field.NewString(tableName, "ext")
	_song.Mark = field.NewUint64(tableName, "mark")
	_song.SongPath = field.NewString(tableName, "song_path")
	_song.LyricPath = field.NewString(tableName, "lyric_path")

	_song.fillFieldMap()

	return _song
}

type song struct {
	songDo

	ALL           field.Asterisk
	ID            field.Uint64
	Creater       field.String
	Updater       field.String
	CreatedAt     field.Field
	UpdatedAt     field.Field
	DataUpdatedAt field.Field
	Name          field.String
	Ext           field.String
	Mark          field.Uint64
	SongPath      field.String
	LyricPath     field.String

	fieldMap map[string]field.Expr
}

func (s song) Table(newTableName string) *song {
	s.songDo.UseTable(newTableName)
	return s.updateTableName(newTableName)
}

func (s song) As(alias string) *song {
	s.songDo.DO = *(s.songDo.As(alias).(*gen.DO))
	return s.updateTableName(alias)
}

func (s *song) updateTableName(table string) *song {
	s.ALL = field.NewAsterisk(table)
	s.ID = field.NewUint64(table, "id")
	s.Creater = field.NewString(table, "creater")
	s.Updater = field.NewString(table, "updater")
	s.CreatedAt = field.NewField(table, "created_at")
	s.UpdatedAt = field.NewField(table, "updated_at")
	s.DataUpdatedAt = field.NewField(table, "data_updated_at")
	s.Name = field.NewString(table, "name")
	s.Ext = field.NewString(table, "ext")
	s.Mark = field.NewUint64(table, "mark")
	s.SongPath = field.NewString(table, "song_path")
	s.LyricPath = field.NewString(table, "lyric_path")

	s.fillFieldMap()

	return s
}

func (s *song) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := s.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (s *song) fillFieldMap() {
	s.fieldMap = make(map[string]field.Expr, 11)
	s.fieldMap["id"] = s.ID
	s.fieldMap["creater"] = s.Creater
	s.fieldMap["updater"] = s.Updater
	s.fieldMap["created_at"] = s.CreatedAt
	s.fieldMap["updated_at"] = s.UpdatedAt
	s.fieldMap["data_updated_at"] = s.DataUpdatedAt
	s.fieldMap["name"] = s.Name
	s.fieldMap["ext"] = s.Ext
	s.fieldMap["mark"] = s.Mark
	s.fieldMap["song_path"] = s.SongPath
	s.fieldMap["lyric_path"] = s.LyricPath
}

func (s song) clone(db *gorm.DB) song {
	s.songDo.ReplaceConnPool(db.Statement.ConnPool)
	return s
}

func (s song) replaceDB(db *gorm.DB) song {
	s.songDo.ReplaceDB(db)
	return s
}

type songDo struct{ gen.DO }

type ISongDo interface {
	gen.SubQuery
	Debug() ISongDo
	WithContext(ctx context.Context) ISongDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() ISongDo
	WriteDB() ISongDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) ISongDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) ISongDo
	Not(conds ...gen.Condition) ISongDo
	Or(conds ...gen.Condition) ISongDo
	Select(conds ...field.Expr) ISongDo
	Where(conds ...gen.Condition) ISongDo
	Order(conds ...field.Expr) ISongDo
	Distinct(cols ...field.Expr) ISongDo
	Omit(cols ...field.Expr) ISongDo
	Join(table schema.Tabler, on ...field.Expr) ISongDo
	LeftJoin(table schema.Tabler, on ...field.Expr) ISongDo
	RightJoin(table schema.Tabler, on ...field.Expr) ISongDo
	Group(cols ...field.Expr) ISongDo
	Having(conds ...gen.Condition) ISongDo
	Limit(limit int) ISongDo
	Offset(offset int) ISongDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) ISongDo
	Unscoped() ISongDo
	Create(values ...*model.Song) error
	CreateInBatches(values []*model.Song, batchSize int) error
	Save(values ...*model.Song) error
	First() (*model.Song, error)
	Take() (*model.Song, error)
	Last() (*model.Song, error)
	Find() ([]*model.Song, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*model.Song, err error)
	FindInBatches(result *[]*model.Song, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*model.Song) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) ISongDo
	Assign(attrs ...field.AssignExpr) ISongDo
	Joins(fields ...field.RelationField) ISongDo
	Preload(fields ...field.RelationField) ISongDo
	FirstOrInit() (*model.Song, error)
	FirstOrCreate() (*model.Song, error)
	FindByPage(offset int, limit int) (result []*model.Song, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) ISongDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	FilterWithNameAndRole(name string, role string) (result []model.Song, err error)
}

// SELECT * FROM @@table WHERE name = @name{{if role !=""}} AND role = @role{{end}}
func (s songDo) FilterWithNameAndRole(name string, role string) (result []model.Song, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	params = append(params, name)
	generateSQL.WriteString("SELECT * FROM song WHERE name = ? ")
	if role != "" {
		params = append(params, role)
		generateSQL.WriteString("AND role = ? ")
	}

	var executeSQL *gorm.DB
	executeSQL = s.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (s songDo) Debug() ISongDo {
	return s.withDO(s.DO.Debug())
}

func (s songDo) WithContext(ctx context.Context) ISongDo {
	return s.withDO(s.DO.WithContext(ctx))
}

func (s songDo) ReadDB() ISongDo {
	return s.Clauses(dbresolver.Read)
}

func (s songDo) WriteDB() ISongDo {
	return s.Clauses(dbresolver.Write)
}

func (s songDo) Session(config *gorm.Session) ISongDo {
	return s.withDO(s.DO.Session(config))
}

func (s songDo) Clauses(conds ...clause.Expression) ISongDo {
	return s.withDO(s.DO.Clauses(conds...))
}

func (s songDo) Returning(value interface{}, columns ...string) ISongDo {
	return s.withDO(s.DO.Returning(value, columns...))
}

func (s songDo) Not(conds ...gen.Condition) ISongDo {
	return s.withDO(s.DO.Not(conds...))
}

func (s songDo) Or(conds ...gen.Condition) ISongDo {
	return s.withDO(s.DO.Or(conds...))
}

func (s songDo) Select(conds ...field.Expr) ISongDo {
	return s.withDO(s.DO.Select(conds...))
}

func (s songDo) Where(conds ...gen.Condition) ISongDo {
	return s.withDO(s.DO.Where(conds...))
}

func (s songDo) Order(conds ...field.Expr) ISongDo {
	return s.withDO(s.DO.Order(conds...))
}

func (s songDo) Distinct(cols ...field.Expr) ISongDo {
	return s.withDO(s.DO.Distinct(cols...))
}

func (s songDo) Omit(cols ...field.Expr) ISongDo {
	return s.withDO(s.DO.Omit(cols...))
}

func (s songDo) Join(table schema.Tabler, on ...field.Expr) ISongDo {
	return s.withDO(s.DO.Join(table, on...))
}

func (s songDo) LeftJoin(table schema.Tabler, on ...field.Expr) ISongDo {
	return s.withDO(s.DO.LeftJoin(table, on...))
}

func (s songDo) RightJoin(table schema.Tabler, on ...field.Expr) ISongDo {
	return s.withDO(s.DO.RightJoin(table, on...))
}

func (s songDo) Group(cols ...field.Expr) ISongDo {
	return s.withDO(s.DO.Group(cols...))
}

func (s songDo) Having(conds ...gen.Condition) ISongDo {
	return s.withDO(s.DO.Having(conds...))
}

func (s songDo) Limit(limit int) ISongDo {
	return s.withDO(s.DO.Limit(limit))
}

func (s songDo) Offset(offset int) ISongDo {
	return s.withDO(s.DO.Offset(offset))
}

func (s songDo) Scopes(funcs ...func(gen.Dao) gen.Dao) ISongDo {
	return s.withDO(s.DO.Scopes(funcs...))
}

func (s songDo) Unscoped() ISongDo {
	return s.withDO(s.DO.Unscoped())
}

func (s songDo) Create(values ...*model.Song) error {
	if len(values) == 0 {
		return nil
	}
	return s.DO.Create(values)
}

func (s songDo) CreateInBatches(values []*model.Song, batchSize int) error {
	return s.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (s songDo) Save(values ...*model.Song) error {
	if len(values) == 0 {
		return nil
	}
	return s.DO.Save(values)
}

func (s songDo) First() (*model.Song, error) {
	if result, err := s.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*model.Song), nil
	}
}

func (s songDo) Take() (*model.Song, error) {
	if result, err := s.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*model.Song), nil
	}
}

func (s songDo) Last() (*model.Song, error) {
	if result, err := s.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*model.Song), nil
	}
}

func (s songDo) Find() ([]*model.Song, error) {
	result, err := s.DO.Find()
	return result.([]*model.Song), err
}

func (s songDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*model.Song, err error) {
	buf := make([]*model.Song, 0, batchSize)
	err = s.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (s songDo) FindInBatches(result *[]*model.Song, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return s.DO.FindInBatches(result, batchSize, fc)
}

func (s songDo) Attrs(attrs ...field.AssignExpr) ISongDo {
	return s.withDO(s.DO.Attrs(attrs...))
}

func (s songDo) Assign(attrs ...field.AssignExpr) ISongDo {
	return s.withDO(s.DO.Assign(attrs...))
}

func (s songDo) Joins(fields ...field.RelationField) ISongDo {
	for _, _f := range fields {
		s = *s.withDO(s.DO.Joins(_f))
	}
	return &s
}

func (s songDo) Preload(fields ...field.RelationField) ISongDo {
	for _, _f := range fields {
		s = *s.withDO(s.DO.Preload(_f))
	}
	return &s
}

func (s songDo) FirstOrInit() (*model.Song, error) {
	if result, err := s.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*model.Song), nil
	}
}

func (s songDo) FirstOrCreate() (*model.Song, error) {
	if result, err := s.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*model.Song), nil
	}
}

func (s songDo) FindByPage(offset int, limit int) (result []*model.Song, count int64, err error) {
	result, err = s.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = s.Offset(-1).Limit(-1).Count()
	return
}

func (s songDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = s.Count()
	if err != nil {
		return
	}

	err = s.Offset(offset).Limit(limit).Scan(result)
	return
}

func (s songDo) Scan(result interface{}) (err error) {
	return s.DO.Scan(result)
}

func (s songDo) Delete(models ...*model.Song) (result gen.ResultInfo, err error) {
	return s.DO.Delete(models)
}

func (s *songDo) withDO(do gen.Dao) *songDo {
	s.DO = *do.(*gen.DO)
	return s
}
