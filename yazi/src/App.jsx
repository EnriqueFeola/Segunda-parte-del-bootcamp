import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "Error en el nombre de usuario",
    pass: "Error en la contraseña",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container mt-2">
          <label>Usuario: </label>
          <input
            type="text"
            className="h-6 border-2 border-black"
            name="uname"
            required
          />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container mt-2">
          <label>Password: </label>
          <input
            type="password"
            className="h-6 border-2 border-black"
            name="pass"
            required
          />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container items-center justify-center text-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ">
            {" "}
            Enviar
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title text-center">Sign In</div>
        {isSubmitted ? <div>Usuario registrado con exito!</div> : renderForm}
      </div>
    </div>
  );
}

export default App;
