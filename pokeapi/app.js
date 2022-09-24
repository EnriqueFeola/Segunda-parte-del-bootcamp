const express = require("express");
const pokemon = require("./routes/pokemon");

const app = express();

const PORT = 3500;

app.use("/pokemon", pokemon);

app.listen(PORT, () => console.log(`Escuhando en el puerto ${PORT}`));
