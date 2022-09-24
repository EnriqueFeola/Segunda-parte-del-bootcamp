const express = require("express");
const { get, create } = require("../controllers/tareas");
const { verifyToken } = require("../middleware/jw-validate");

const router = express.Router();

router.get("/obtener", verifyToken, get);

router.post("/crear", create);

module.exports = router;