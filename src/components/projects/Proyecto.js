import React, { useContext } from "react";

import { proyectoContext } from "../../context/proyectos";
import { TareaContext } from "../../context/tasks";

export const Proyecto = ({ proyecto }) => {
  //obtener el state del formulario

  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;
  const { nombre, id } = proyecto;

  //obtenet la funcion del context de tarea
  const tareasContext = useContext(TareaContext);
  const { obtenerTareas } = tareasContext;

  const seleccionarProyecto = (id) => {
    // Funcion para agregar el  proyecto actual
    proyectoActual(id); // Fijar un proyectocAtual
    obtenerTareas(id); // filtrar las tareas cuando se de click
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => seleccionarProyecto(id)}
      >
        {nombre}
      </button>
    </li>
  );
};
