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

func newSongSongsheet(db *gorm.DB, opts ...gen.DOOption) songSongsheet {
	_songSongsheet := songSongsheet{}

	_songSongsheet.songSongsheetDo.UseDB(db, opts...)
	_songSongsheet.songSongsheetDo.UseModel(&model.SongSongsheet{})

	tableName := _songSongsheet.songSongsheetDo.TableName()
	_songSongsheet.ALL = field.NewAsterisk(tableName)
	_songSongsheet.ID = field.NewUint64(tableName, "id")
	_songSongsheet.Creater = field.NewString(tableName, "creater")
	_songSongsheet.Updater = field.NewString(tableName, "updater")
	_songSongsheet.CreatedAt = field.NewField(tableName, "created_at")
	_songSongsheet.UpdatedAt = field.NewField(tableName, "updated_at")
	_songSongsheet.DataUpdatedAt = field.NewField(tableName, "data_updated_at")
	_songSongsheet.SongId = field.NewUint64(tableName, "song_id")
	_songSongsheet.SongsheetId = field.NewUint64(tableName, "songsheet_id")
	_songSongsheet.Status = field.NewUint64(tableName, "status")

	_songSongsheet.fillFieldMap()

	return _songSongsheet
}

type songSongsheet struct {
	songSongsheetDo

	ALL           field.Asterisk
	ID            field.Uint64
	Creater       field.String
	Updater       field.String
	CreatedAt     field.Field
	UpdatedAt     field.Field
	DataUpdatedAt field.Field
	SongId        field.Uint64
	SongsheetId   field.Uint64
	Status        field.Uint64

	fieldMap map[string]field.Expr
}

func (s songSongsheet) Table(newTableName string) *songSongsheet {
	s.songSongsheetDo.UseTable(newTableName)
	return s.updateTableName(newTableName)
}

func (s songSongsheet) As(alias string) *songSongsheet {
	s.songSongsheetDo.DO = *(s.songSongsheetDo.As(alias).(*gen.DO))
	return s.updateTableName(alias)
}

func (s *songSongsheet) updateTableName(table string) *songSongsheet {
	s.ALL = field.NewAsterisk(table)
	s.ID = field.NewUint64(table, "id")
	s.Creater = field.NewString(table, "creater")
	s.Updater = field.NewString(table, "updater")
	s.CreatedAt = field.NewField(table, "created_at")
	s.UpdatedAt = field.NewField(table, "updated_at")
	s.DataUpdatedAt = field.NewField(table, "data_updated_at")
	s.SongId = field.NewUint64(table, "song_id")
	s.SongsheetId = field.NewUint64(table, "songsheet_id")
	s.Status = field.NewUint64(table, "status")

	s.fillFieldMap()

	return s
}

func (s *songSongsheet) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := s.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (s *songSongsheet) fillFieldMap() {
	s.fieldMap = make(map[string]field.Expr, 9)
	s.fieldMap["id"] = s.ID
	s.fieldMap["creater"] = s.Creater
	s.fieldMap["updater"] = s.Updater
	s.fieldMap["created_at"] = s.CreatedAt
	s.fieldMap["updated_at"] = s.UpdatedAt
	s.fieldMap["data_updated_at"] = s.DataUpdatedAt
	s.fieldMap["song_id"] = s.SongId
	s.fieldMap["songsheet_id"] = s.SongsheetId
	s.fieldMap["status"] = s.Status
}

func (s songSongsheet) clone(db *gorm.DB) songSongsheet {
	s.songSongsheetDo.ReplaceConnPool(db.Statement.ConnPool)
	return s
}

func (s songSongsheet) replaceDB(db *gorm.DB) songSongsheet {
	s.songSongsheetDo.ReplaceDB(db)
	return s
}

type songSongsheetDo struct{ gen.DO }

type ISongSongsheetDo interface {
	gen.SubQuery
	Debug() ISongSongsheetDo
	WithContext(ctx context.Context) ISongSongsheetDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() ISongSongsheetDo
	WriteDB() ISongSongsheetDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) ISongSongsheetDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) ISongSongsheetDo
	Not(conds ...gen.Condition) ISongSongsheetDo
	Or(conds ...gen.Condition) ISongSongsheetDo
	Select(conds ...field.Expr) ISongSongsheetDo
	Where(conds ...gen.Condition) ISongSongsheetDo
	Order(conds ...field.Expr) ISongSongsheetDo
	Distinct(cols ...field.Expr) ISongSongsheetDo
	Omit(cols ...field.Expr) ISongSongsheetDo
	Join(table schema.Tabler, on ...field.Expr) ISongSongsheetDo
	LeftJoin(table schema.Tabler, on ...field.Expr) ISongSongsheetDo
	RightJoin(table schema.Tabler, on ...field.Expr) ISongSongsheetDo
	Group(cols ...field.Expr) ISongSongsheetDo
	Having(conds ...gen.Condition) ISongSongsheetDo
	Limit(limit int) ISongSongsheetDo
	Offset(offset int) ISongSongsheetDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) ISongSongsheetDo
	Unscoped() ISongSongsheetDo
	Create(values ...*model.SongSongsheet) error
	CreateInBatches(values []*model.SongSongsheet, batchSize int) error
	Save(values ...*model.SongSongsheet) error
	First() (*model.SongSongsheet, error)
	Take() (*model.SongSongsheet, error)
	Last() (*model.SongSongsheet, error)
	Find() ([]*model.SongSongsheet, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*model.SongSongsheet, err error)
	FindInBatches(result *[]*model.SongSongsheet, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*model.SongSongsheet) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) ISongSongsheetDo
	Assign(attrs ...field.AssignExpr) ISongSongsheetDo
	Joins(fields ...field.RelationField) ISongSongsheetDo
	Preload(fields ...field.RelationField) ISongSongsheetDo
	FirstOrInit() (*model.SongSongsheet, error)
	FirstOrCreate() (*model.SongSongsheet, error)
	FindByPage(offset int, limit int) (result []*model.SongSongsheet, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) ISongSongsheetDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	FilterWithNameAndRole(name string, role string) (result []model.SongSongsheet, err error)
}

// SELECT * FROM @@table WHERE name = @name{{if role !=""}} AND role = @role{{end}}
func (s songSongsheetDo) FilterWithNameAndRole(name string, role string) (result []model.SongSongsheet, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	params = append(params, name)
	generateSQL.WriteString("SELECT * FROM song_songsheet WHERE name = ? ")
	if role != "" {
		params = append(params, role)
		generateSQL.WriteString("AND role = ? ")
	}

	var executeSQL *gorm.DB
	executeSQL = s.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (s songSongsheetDo) Debug() ISongSongsheetDo {
	return s.withDO(s.DO.Debug())
}

func (s songSongsheetDo) WithContext(ctx context.Context) ISongSongsheetDo {
	return s.withDO(s.DO.WithContext(ctx))
}

func (s songSongsheetDo) ReadDB() ISongSongsheetDo {
	return s.Clauses(dbresolver.Read)
}

func (s songSongsheetDo) WriteDB() ISongSongsheetDo {
	return s.Clauses(dbresolver.Write)
}

func (s songSongsheetDo) Session(config *gorm.Session) ISongSongsheetDo {
	return s.withDO(s.DO.Session(config))
}

func (s songSongsheetDo) Clauses(conds ...clause.Expression) ISongSongsheetDo {
	return s.withDO(s.DO.Clauses(conds...))
}

func (s songSongsheetDo) Returning(value interface{}, columns ...string) ISongSongsheetDo {
	return s.withDO(s.DO.Returning(value, columns...))
}

func (s songSongsheetDo) Not(conds ...gen.Condition) ISongSongsheetDo {
	return s.withDO(s.DO.Not(conds...))
}

func (s songSongsheetDo) Or(conds ...gen.Condition) ISongSongsheetDo {
	return s.withDO(s.DO.Or(conds...))
}

func (s songSongsheetDo) Select(conds ...field.Expr) ISongSongsheetDo {
	return s.withDO(s.DO.Select(conds...))
}

func (s songSongsheetDo) Where(conds ...gen.Condition) ISongSongsheetDo {
	return s.withDO(s.DO.Where(conds...))
}

func (s songSongsheetDo) Order(conds ...field.Expr) ISongSongsheetDo {
	return s.withDO(s.DO.Order(conds...))
}

func (s songSongsheetDo) Distinct(cols ...field.Expr) ISongSongsheetDo {
	return s.withDO(s.DO.Distinct(cols...))
}

func (s songSongsheetDo) Omit(cols ...field.Expr) ISongSongsheetDo {
	return s.withDO(s.DO.Omit(cols...))
}

func (s songSongsheetDo) Join(table schema.Tabler, on ...field.Expr) ISongSongsheetDo {
	return s.withDO(s.DO.Join(table, on...))
}

func (s songSongsheetDo) LeftJoin(table schema.Tabler, on ...field.Expr) ISongSongsheetDo {
	return s.withDO(s.DO.LeftJoin(table, on...))
}

func (s songSongsheetDo) RightJoin(table schema.Tabler, on ...field.Expr) ISongSongsheetDo {
	return s.withDO(s.DO.RightJoin(table, on...))
}

func (s songSongsheetDo) Group(cols ...field.Expr) ISongSongsheetDo {
	return s.withDO(s.DO.Group(cols...))
}

func (s songSongsheetDo) Having(conds ...gen.Condition) ISongSongsheetDo {
	return s.withDO(s.DO.Having(conds...))
}

func (s songSongsheetDo) Limit(limit int) ISongSongsheetDo {
	return s.withDO(s.DO.Limit(limit))
}

func (s songSongsheetDo) Offset(offset int) ISongSongsheetDo {
	return s.withDO(s.DO.Offset(offset))
}

func (s songSongsheetDo) Scopes(funcs ...func(gen.Dao) gen.Dao) ISongSongsheetDo {
	return s.withDO(s.DO.Scopes(funcs...))
}

func (s songSongsheetDo) Unscoped() ISongSongsheetDo {
	return s.withDO(s.DO.Unscoped())
}

func (s songSongsheetDo) Create(values ...*model.SongSongsheet) error {
	if len(values) == 0 {
		return nil
	}
	return s.DO.Create(values)
}

func (s songSongsheetDo) CreateInBatches(values []*model.SongSongsheet, batchSize int) error {
	return s.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (s songSongsheetDo) Save(values ...*model.SongSongsheet) error {
	if len(values) == 0 {
		return nil
	}
	return s.DO.Save(values)
}

func (s songSongsheetDo) First() (*model.SongSongsheet, error) {
	if result, err := s.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*model.SongSongsheet), nil
	}
}

func (s songSongsheetDo) Take() (*model.SongSongsheet, error) {
	if result, err := s.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*model.SongSongsheet), nil
	}
}

func (s songSongsheetDo) Last() (*model.SongSongsheet, error) {
	if result, err := s.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*model.SongSongsheet), nil
	}
}

func (s songSongsheetDo) Find() ([]*model.SongSongsheet, error) {
	result, err := s.DO.Find()
	return result.([]*model.SongSongsheet), err
}

func (s songSongsheetDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*model.SongSongsheet, err error) {
	buf := make([]*model.SongSongsheet, 0, batchSize)
	err = s.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (s songSongsheetDo) FindInBatches(result *[]*model.SongSongsheet, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return s.DO.FindInBatches(result, batchSize, fc)
}

func (s songSongsheetDo) Attrs(attrs ...field.AssignExpr) ISongSongsheetDo {
	return s.withDO(s.DO.Attrs(attrs...))
}

func (s songSongsheetDo) Assign(attrs ...field.AssignExpr) ISongSongsheetDo {
	return s.withDO(s.DO.Assign(attrs...))
}

func (s songSongsheetDo) Joins(fields ...field.RelationField) ISongSongsheetDo {
	for _, _f := range fields {
		s = *s.withDO(s.DO.Joins(_f))
	}
	return &s
}

func (s songSongsheetDo) Preload(fields ...field.RelationField) ISongSongsheetDo {
	for _, _f := range fields {
		s = *s.withDO(s.DO.Preload(_f))
	}
	return &s
}

func (s songSongsheetDo) FirstOrInit() (*model.SongSongsheet, error) {
	if result, err := s.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*model.SongSongsheet), nil
	}
}

func (s songSongsheetDo) FirstOrCreate() (*model.SongSongsheet, error) {
	if result, err := s.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*model.SongSongsheet), nil
	}
}

func (s songSongsheetDo) FindByPage(offset int, limit int) (result []*model.SongSongsheet, count int64, err error) {
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

func (s songSongsheetDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = s.Count()
	if err != nil {
		return
	}

	err = s.Offset(offset).Limit(limit).Scan(result)
	return
}

func (s songSongsheetDo) Scan(result interface{}) (err error) {
	return s.DO.Scan(result)
}

func (s songSongsheetDo) Delete(models ...*model.SongSongsheet) (result gen.ResultInfo, err error) {
	return s.DO.Delete(models)
}

func (s *songSongsheetDo) withDO(do gen.Dao) *songSongsheetDo {
	s.DO = *do.(*gen.DO)
	return s
}