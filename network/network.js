const express = require("express");

const router = express.Router();

router.get("/app", (req, res) => {
  console.log("Consulta exitosa");
  res.send({
    error: "",
    body: "Consulta exitosa",
  });
});
router.post("/app", (req, res) => {
  console.log("Recibido correctamente.");
  res.send({
    error: "",
    body: "Recibido correctamente",
  });
});
router.put("/app", (req, res) => {
  console.log("Modificación exitosa");
  res.send({
    error: "",
    body: "Modificación exitosa",
  });
});
router.delete("/app", (req, res) => {
  console.log("Eliminado correctamente.");
  res.send({
    error: "",
    body: "Eliminado correctamente.",
  });
});

module.exports = router;
