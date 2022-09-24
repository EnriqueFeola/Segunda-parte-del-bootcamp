const multiplicarPositivos = (numeroUno, numeroDos) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (numeroUno > 0 && numeroDos > 0) {
        const resultado = numeroUno * numeroDos;
        resolve(resultado);
      } else {
        reject("Deben ser positivos");
      }
    }, 1000);
  });
};

module.exports = { multiplicarPositivos };
