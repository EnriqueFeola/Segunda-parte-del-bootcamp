const express = require("express");
const tareas = require("./routes/tareas");
const usuarios = require("./routes/usuarios");

const app = express();
app.use(express.json());

const PORT = 3500;

app.use("/tareas", tareas);
app.use("/usuarios", usuarios);

app.get("/hola", (req, res) => {
  res.send("Hola, mundo");
});

app.listen(PORT, () => {
  console.log(`Corriendo en... ${PORT}`);
});
