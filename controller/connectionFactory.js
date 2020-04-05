const mysql = require("mysql");

const execSQLQuery = (sqlQry, res) => {
  const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database: "node-mysql",
  });

  connection.query(sqlQry, (error, results, fields) => {
    if (error) {
      res.json(error);
    } else {
      res.json(results);
    }
    connection.end();
    console.log("executou !");
  });
};

module.exports = execSQLQuery;
