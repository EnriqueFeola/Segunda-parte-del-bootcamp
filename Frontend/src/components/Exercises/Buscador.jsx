import "./style.css";
import { useState } from "react";

const Buscador = ({ pokemones }) => {
  const [filterList, setFilterList] = useState(pokemones);

  const handleInputChange = (e) => {
    if (e.target.value === "") {
      setFilterList(pokemones);
      return;
    }

    const filteredList = pokemones.filter(
      (item) => item.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    );

    setFilterList(filteredList);
  };

  return (
    <div className="app">
      <div>
        Search: <input name="query" type="text" onChange={handleInputChange} />
      </div>
      {filterList && filterList.map((item, i) => <div key={i}>{item}</div>)}
    </div>
  );
};

export default Buscador;
