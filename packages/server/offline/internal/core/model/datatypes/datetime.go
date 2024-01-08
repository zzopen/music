package datatypes

import (
	"database/sql"
	"database/sql/driver"
	"fmt"
	"time"
)

const TimeFormat = "2006-01-02 15:04:05"
const TimeZone = "Asia/Shanghai"

type DateTime time.Time

func (datetime *DateTime) Scan(value interface{}) (err error) {
	nullTime := &sql.NullTime{}
	err = nullTime.Scan(value)
	*datetime = DateTime(nullTime.Time)
	return
}

func (datetime *DateTime) Value() (driver.Value, error) {
	var zeroTime time.Time
	var ti = time.Time(*datetime)
	if ti.UnixNano() == zeroTime.UnixNano() {
		return nil, nil
	}
	return ti, nil
}

func (datetime *DateTime) String() string {
	return time.Time(*datetime).Format(TimeFormat)
}

func (datetime *DateTime) local() time.Time {
	loc, _ := time.LoadLocation(TimeZone)
	return time.Time(*datetime).In(loc)
}

// GormDataType gorm common data type
func (datetime *DateTime) GormDataType() string {
	return "datetime"
}

func (datetime *DateTime) GobEncode() ([]byte, error) {
	return time.Time(*datetime).GobEncode()
}

func (datetime *DateTime) GobDecode(b []byte) error {
	return (*time.Time)(datetime).GobDecode(b)
}

func (datetime *DateTime) MarshalJSON() ([]byte, error) {
	tTime := time.Time(*datetime)
	return []byte(fmt.Sprintf("\"%v\"", tTime.Format(TimeFormat))), nil
}

func (datetime *DateTime) UnmarshalJSON(b []byte) error {
	now, err := time.ParseInLocation(`"`+TimeFormat+`"`, string(b), time.Local)
	*datetime = DateTime(now)
	return err
}
