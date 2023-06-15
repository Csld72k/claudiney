const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");
const path = require("path");

async function sqliteConnection() {
  const dataBase = await sqlite.open({
    filename: path.resolve(__dirname, "..", "dataBase.db"),
    driver: sqlite3.Database
  });
  return dataBase;
}

module.exports = sqliteConnection;

// SGBD - sistema gerenciador de banco de dados