const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const tareaRoute = require("./src/routes/tarea");

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/tareas", tareaRoute);

app.listen(PORT, () => console.log(`App running in ${PORT}`));