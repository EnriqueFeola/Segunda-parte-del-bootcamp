const { multiplicarPositivos } = require("./promesa");

const consumirPromesa = async () => {
  try {
    const resultado = await multiplicarPositivos(-10, 2);
    console.log(resultado);
  } catch (error) {
    console.error(error);
  }
};

consumirPromesa();
