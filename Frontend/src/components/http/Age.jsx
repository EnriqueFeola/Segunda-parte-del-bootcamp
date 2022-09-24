import { useEffect, useState } from "react";
const Age = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);

  const fetchData = () => {
    fetch(`https://api.agify.io/?name=${name}`)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setAge(response.age);
      });
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <input placeholder="name..." onChange={handleChange} />
      <button onClick={fetchData}>Age</button>
      <h1>Age : {age}</h1>
    </div>
  );
};

export default Age;
