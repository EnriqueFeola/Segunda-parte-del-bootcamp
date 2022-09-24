const express = require("express");

const { get } = require("../controllers/pokemones.controller");
const router = express.Router();

router.get("/", get);

module.exports = router;
