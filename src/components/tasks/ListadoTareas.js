import React, { useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { Tarea } from "./";
import { proyectoContext } from "../../context/proyectos";
import { TareaContext } from "../../context/tasks";

export const ListadoTareas = () => {
  //extraer proyectos del state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  //obtener las tareas del proyecto
  const tareasContext = useContext(TareaContext);
  const { tareasProyecto } = tareasContext;

  // Si no hay proyecto seleccionado

  if (!proyecto) return <h2>Selecciona un proyecto</h2>;

  // Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  // eliminar un proyecto

  const onClickEliminar = () => {
    eliminarProyecto(proyectoActual.id);
  };

  return (
    <>
      <h2>Proyecto: {proyectoActual.nombre}</h2>

      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          <TransitionGroup>
            {tareasProyecto.map((tarea) => (
              <CSSTransition key={tarea.id} timeout={200} classNames="tarea">
                <Tarea tarea={tarea} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}

        <button
          type="button"
          className="btn btn-eliminar"
          onClick={onClickEliminar}
        >
          Eliminar Proyecto &times;
        </button>
      </ul>
    </>
  );
};
