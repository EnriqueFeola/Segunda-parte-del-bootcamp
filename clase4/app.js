const express = require("express");
const tareas = require("./routes/tareas");
const pokemones = require("./routes/pokemones.route");

const app = express();

const PORT = 3500;
app.use(express.json());

app.use("/tareas", tareas);
app.use("/pokemones", pokemones);

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});
