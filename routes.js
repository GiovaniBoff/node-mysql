const { Router } = require("express");
const cliente = require("./controller/clienteController");
const router = Router();

router.get("/clientes", cliente.index);

router.get("/clientes/:id?", cliente.findCliente);

router.delete("/clientes/:id", cliente.deleteCliente);

router.post("/clientes", cliente.addCliente);

router.patch("/clientes/:id", cliente.updateCliente);

module.exports = router;
