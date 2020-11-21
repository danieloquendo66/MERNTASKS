import React, { useContext } from "react";
import { proyectoContext } from "../../context/proyectos";
import { TareaContext } from "../../context/tasks";

export const Tarea = ({ tarea }) => {
  //extraer si un proyecto esta activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //obtenet la funcion del context de tarea
  const tareasContext = useContext(TareaContext);
  const {
    eliminarTarea,
    obtenerTareas,
    cambiarEstadoTarea,
    guardarTareaActual,
  } = tareasContext;

  const { nombre, estado } = tarea;

  //extraer el proyecto

  const [proyectoActual] = proyecto;

  //funcion que se ejecuta cuando el usuario preciona el btn de eliminar tarea
  const tareaEliminar = (id) => {
    eliminarTarea(id);
    obtenerTareas(proyectoActual.id);
  };

  //funcion que modifica el estado de las tareas

  const cambiarEstado = (tarea) => {
    if (tarea.estado) {
      tarea.estado = false;
    } else {
      tarea.estado = true;
    }

    cambiarEstadoTarea(tarea);
  };

  // Agrega una tarea actual cuando el usuario desee editarla
  const seleccionarTarea = (tarea) => {
    guardarTareaActual(tarea);
  };

  return (
    <li className="tarea sombra ">
      <p>{nombre}</p>

      <div className="estado">
        {estado ? (
          <button
            type="button"
            className="completo"
            onClick={() => cambiarEstado(tarea)}
          >
            Completo
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={() => cambiarEstado(tarea)}
          >
            Incompleto
          </button>
        )}
      </div>

      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => {
            seleccionarTarea(tarea);
          }}
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => tareaEliminar(tarea.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};
