const execSQLQuery = require("./connectionFactory");

module.exports = {
  index(req, res) {
    execSQLQuery("SELECT * FROM clientes", res);
  },
  findCliente(req, res) {
    let filter = " ";
    if (req.params.id) {
      filter = `WHERE ID = ${parseInt(req.params.id)}`;
      execSQLQuery(`SELECT * FROM clientes ${filter}`, res);
    }
  },
  deleteCliente(req, res) {
    execSQLQuery(
      `DELETE FROM clientes WHERE ID = ${parseInt(req.params.id)}`,
      res
    );
  },
  addCliente(req, res) {
    const nome = req.body.nome.substring(0, 150);
    const cpf = req.body.cpf.substring(0, 11);
    execSQLQuery(
      `INSERT INTO clientes(Nome,CPF) VALUE('${nome}','${cpf}')`,
      res
    );
  },
  updateCliente(req, res) {
    const id = parseInt(req.params.id);
    const nome = req.body.nome.substring(0, 150);
    const cpf = req.body.cpf.substring(0, 11);

    execSQLQuery(
      `UPDATE clientes SET nome='${nome}', CPF='${cpf}' WHERE=${id}`,
      res
    );
  },
};
