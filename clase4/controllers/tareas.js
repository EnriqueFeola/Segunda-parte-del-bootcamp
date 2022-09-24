const db = require("../db/index");

const get = async (req, res) => {
  try {
    const tareas = await db.query("select * from ventas");

    return res
      .status(200)
      .json({ data: tareas.rows, success: true, message: "Lista de tareas" });
  } catch (error) {
    console.error(error);
  }
};

const create = async (req, res) => {
  try {
    const { titulo, prioridad } = req.body;

    const nuevaTarea = {
      titulo,
      prioridad,
    };

    await db.query(
      `insert into articulos (titulo, prioridad) 
       values($1, $2)`,
      [titulo, prioridad]
    );

    return res.status(200).json({
      data: nuevaTarea,
      success: true,
      message: "Se insertó una nueva tarea",
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { get, create };
