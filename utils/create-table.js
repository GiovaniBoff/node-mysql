const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "node-mysql",
});

connection.connect((err) => {
  if (err) {
    return console.log(err);
  }
  console.log("conectou !");
  createTable(connection);
});

const createTable = (conn) => {
  const sql = `
                    create table if not exists Clientes(
                    ID int NOT NULL AUTO_INCREMENT,
                    Nome varchar(150) NOT NULL,
                    CPF char(11) NOT NULL,
                    PRIMARY KEY(ID)
                );
    `;
  conn.query(sql, (error, results, fields) => {
    if (error) {
      return console.log(error);
    }
    console.log("criou a tabela !");
    addRows(conn);
  });
};

const addRows = (conn) => {
  const sql = "INSERT INTO Clientes(Nome,CPF) VALUES ?";
  const values = [
    ["teste1", "12345678901"],
    ["teste1", "09876543210"],
    ["teste3", "12312312399"],
  ];
  conn.query(sql, [values], (error, results, fields) => {
    if (error) {
      return console.log(error);
    }
    console.log("adicionou registros");
    conn.end();
  });
};
