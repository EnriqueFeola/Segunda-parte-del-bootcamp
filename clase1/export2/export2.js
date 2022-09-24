const imprimirConParametros = (textoAImprimir) =>
  `El parámetro pasado es ${textoAImprimir}`;

const imprimirSinParametros = () =>
  "Se devuelve un texto sin parámetros que será el que se imprima";

const sumar = (a, b) => a + b;

module.exports = { imprimirConParametros, imprimirSinParametros, sumar };
