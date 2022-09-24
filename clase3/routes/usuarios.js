const express = require("express");

const router = express.Router();

router.get("/perfil", (req, res) => {
  return res.status(200).json({
    data: [
      {
        foto: false,
        nombre: "César",
        apellido: "Inho",
      },
    ],
    success: true,
    message: "Bla",
  });
});

module.exports = router;
