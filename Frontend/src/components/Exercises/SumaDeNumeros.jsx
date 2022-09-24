import { useState } from "react";
/**
 * Usar un onchange y un value para poder usar la propiedad e.target.value
 * Crear un estado
 */

const SumaDeNumeros = () => {
  const [primerValor, setPrimerValor] = useState(0);
  const [segundoValor, setSegundoValor] = useState(0);
  const [total, setTotal] = useState(0);

  const onChangePrimerValor = (e) => {
    setPrimerValor(e.target.value);
  };

  const onChangeSegundoValor = (e) => {
    setSegundoValor(e.target.value);
  };

  const resultado = () => {
    setTotal(parseInt(primerValor) + parseInt(segundoValor));
  };

  return (
    <div>
      <h2>Adding Two Numbers</h2>
      <input
        value={primerValor}
        onChange={onChangePrimerValor}
        placeholder="First Number"
        type="number"
      />
      <input
        value={segundoValor}
        placeholder="Second Number"
        type="number"
        onChange={onChangeSegundoValor}
      />

      <button onClick={resultado}>Add Two Numbers</button>
      <p>Total: {total}</p>
    </div>
  );
};

export default SumaDeNumeros;
