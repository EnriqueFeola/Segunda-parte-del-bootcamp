const Task = (props) => {
  const { tareas } = props;

  return (
    <>
      <ul className="ul-lista-tarea" id="lista-tareas">
        {tareas.map((tarea, i) => {
          return (
            <li className={tarea.prioridad} key={i}>
              {tarea.titulo}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Task;
