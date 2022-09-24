//1 Llamando al paquete para utilizarlo
const express = require("express");
const axios = require("axios");
// - 2 Inicializar o instanciar express en una variable. (Por convención llamada app)
const app = express();

// - 3 Definir un puerto a utilizar para que nuestro servidor pueda escuchar
// en localhost
const PORT = 3000;

// 4 - Crear rutas o endpoints
app.get("/ronaldinho", (req, res) => {
  res.send("¡Fui un crack en barcelona!");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/swapi", async (req, res) => {
  try {
    const characters = await axios("https://swapi.dev/api/people/");

    return res.status(200).json(characters.data.results);
  } catch (error) {
    console.error(error);
  }
});

app.get("/planetas", async (req, res) => {
  try {
    const planets = await axios("https://swapi.dev/api/planets/");
    console.log(planets)
    return res.status(200).json(planets.data.results);
  } catch (error) {
    console.error(error);
  }
});

app.get("/peliculas", async (req, res) => {
  try {
    const films = await axios("https://swapi.dev/api/films/");
    console.log(films)
    return res.status(200).json(films.data.results);
  } catch (error) {
    console.error(error);
  }
});

app.get("/naves", async (req, res) => {
  try {
    const starships = await axios("https://swapi.dev/api/starships/");
    console.log(starships)
    return res.status(200).json(starships.data.results);
  } catch (error) {
    console.error(error);
  }
});

app.get("/vehicles", async (req, res) => {
  try {
    const vehicles = await axios("https://swapi.dev/api/vehicles/");
    console.log(vehicles)
    return res.status(200).json(vehicles.data.results);
  } catch (error) {
    console.error(error);
  }
});






// 5 - Levantar el servidor
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
