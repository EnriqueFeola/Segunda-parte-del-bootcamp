import { useEffect, useState } from "react";
const Cat = () => {
  const [catFact, setCatFact] = useState("");

  //   fetch("https://catfact.ninja/fact")
  //     .then((res) => res.json())
  //     .then((response) => setCatFact(response.fact));

  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((response) => setCatFact(response.fact));
  }, []);

  return (
    <div>
      <button>Generate Cat FAct</button>
      <p>{catFact}</p>
    </div>
  );
};

export default Cat;
