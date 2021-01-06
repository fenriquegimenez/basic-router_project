const express = require("express");

const bodyParser = require("body-parser");

const router = require("./network/network");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/app", (req, res) => {
  console.log(req.headers);
  res.send({
    body: "Consulta exitosa",
  });
});
app.listen(3000);

console.log("La aplicación está escuchando en http://localhost:3000.");
