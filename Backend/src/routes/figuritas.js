const express = require ("express");
const {obtenerFiguritas, agregarFiguritas, cambiarFiguritas, eliminar} = require ("../controllers/figuritas");

const router = express.Router();

router.get("/obtener", obtenerFiguritas);
router.post("/agregar", agregarFiguritas);
router.put("/modificar", cambiarFiguritas);
router.delete("/borrar", eliminar)
module.exports = router;