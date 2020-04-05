const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const router = require("./routes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

app.listen(port);
