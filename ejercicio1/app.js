const express = require("express");
const ventas = require("./routes/ventas");

const app = express();

const PORT = 3500;
app.use(express.json());

app.use("/ventas", ventas);

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`);
});