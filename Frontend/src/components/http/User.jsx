import { useState, useEffect } from "react";

const User = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts?_limit=10";

  /**
   * 1 Hacer un GET a la dirección URL [x]
   *   1.1 Crear función que obtenda los datos [x]
   * 2 Crear un estado para guardar los datos del response [x]
   * 3 Mostrarlo en pantalla [x]
   */
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchData = await fetch(URL);

        if (!fetchData.ok) {
          throw new Error("Error en el servidor");
        }

        const usersResponse = await fetchData.json();

        setUsers(usersResponse);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Fetch data</h1>
      <ul>
        {users &&
          users.map((item, i) => {
            return (
              <li key={i}>
                <h3>{item.title}</h3>
                <h3>{item.id}</h3>
                <h3>{item.body}</h3>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default User;
