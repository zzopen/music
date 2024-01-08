const USER_SQL = `
CREATE TABLE IF NOT EXISTS "user"(
  "id" INTEGER NOT NULL UNIQUE,
  "name" TEXT NOT NULL,
  "age" INTEGER NOT NULL,
  "created_at" DATETIME "0000-00-00",
  "updated_at" DATETIME "0000-00-00",
  PRIMARY KEY("id" AUTOINCREMENT)
);
`

const TABLES = [USER_SQL]

export { TABLES }
