const express = require("express");
const { obtenerTareas, agregar } = require("../controllers/tarea");

const router = express.Router();

 router.get("/obtener", obtenerTareas);
    router.post("/agregar", agregar); 
module.exports = router;