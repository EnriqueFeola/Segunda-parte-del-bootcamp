import React, { useState } from "react";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setJwt = async () => {
    try {
      const respuesta = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mail: email,
          password: password,
        }),
      });

      if (!respuesta.ok) {
        const error = await respuesta.json();
        throw new Error(error.message);
      }

      const auth = await respuesta.json();

      alert("Aguante team pastaflora!!");

      localStorage.setItem("token", auth.token);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setJwt();
  };

  return (
    <>
      <header>LOG IN</header>
      <form onSubmit={handleSubmit}>
        <input
          email="user"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
        />
        <input
          email="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button>Log In</button>
      </form>
    </>
  );
};

export default Login;
