const axios = require("axios");

const get = async (req, res) => {
  try {
    const pokemonFetch = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    const pokemonesApi = pokemonFetch.data.results;
    const pokemones = [];

    for (let i = 0; i < pokemonesApi.length; i++) {
      const abilitiesFetch = await axios.get(pokemonesApi[i].url);
      const abilitiesApi = abilitiesFetch.data;

      const pokemon = {
        name: pokemonesApi[i].name,
        caracteristicas: {
          abilities: abilitiesApi.abilities,
          weight: abilitiesApi.weight,
          height: abilitiesApi.height,
        },
      };

      pokemones.push(pokemon);
    }

    return res.status(200).json({
      data: pokemones,
      success: true,
      message: "Get de pokemones",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  get,
};
