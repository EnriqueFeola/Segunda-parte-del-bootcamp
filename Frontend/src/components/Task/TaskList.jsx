import { useState, useEffect } from "react";
import Task from "./Task";

const TaskList = () => {
  const [tareas, setTareas] = useState([]);
  const [newTask, setNewTask] = useState({
    id: Math.floor(Math.random() * 100),
    titulo: "",
    prioridad: "prioridad-baja",
  });

  const [errors, setErrors] = useState({
    id: false,
    titulo: false,
  });

  useEffect(() => {
    cargarTareas();
  }, []);

  const cargarTareas = async () => {
    try {
      const token = localStorage.getItem("token");

      const respuesta = await fetch("http://localhost:4000/tareas", {
        headers: {
          "auth-token": token,
        },
      });

      if (!respuesta.ok) {
        throw new Error("Ocurrió un error");
      }

      const tareasFetch = await respuesta.json();

      setTareas(tareasFetch.data);
    } catch (error) {
      console.error(error);
    }
  };

  const obtenerValorInput = (e) => {
    setNewTask({
      ...newTask,
      titulo: e.target.value,
    });
  };

  const obtenerValorSelect = (e) => {
    setNewTask({
      ...newTask,
      prioridad: e.target.value,
    });
  };

  const addTask = (e) => {
    const newErrors = {};

    if (!newTask.titulo) {
      newErrors.titulo = true;
      setErrors(newErrors);
      e.preventDefault();
      return;
    }

    const newTasks = [...tareas, newTask];

    setTareas(newTasks);

    setNewTask({ id: "", titulo: "" });

    newErrors.titulo = false;
    setErrors(newErrors);
    e.preventDefault();
  };

  return (
    <>
      <form>
        <input
          id="tarea"
          type="text"
          name="tarea"
          value={newTask.titulo}
          placeholder="Descripción de la tarea"
          onChange={obtenerValorInput}
        />
        <select
          name="prioridad"
          id="prioridad"
          defaultValue=""
          onChange={obtenerValorSelect}
        >
          <option value="" disabled>
            Prioridad
          </option>
          <option value="prioridad-baja">baja</option>
          <option value="prioridad-media">media</option>
          <option value="prioridad-alta">alta</option>
        </select>
        <button onClick={addTask} id="agregar">
          Agregar
        </button>
      </form>
      <Task tareas={tareas} />
      {errors.titulo && <span>Ingrese un título</span>}
    </>
  );
};

export default TaskList;
