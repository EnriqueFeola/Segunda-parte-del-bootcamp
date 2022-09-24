const { Pool } = require("pg");


const config = {
    user: "postgres",
    host: "localhost",
    password: "sensei2359",
    database: "Practica2",
    port: 5432,
  };
  
  const pool = new Pool(config);
  
  module.exports = {
    query: (text, params) => pool.query(text, params),
  };