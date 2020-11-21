import React, { useContext, useState, useEffect } from "react";
import { proyectoContext } from "../../context/proyectos";
import { TareaContext } from "../../context/tasks";

export const FormTarea = () => {
  //extraer si un proyecto esta activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //obtenet la funcion del context de tarea
  const tareasContext = useContext(TareaContext);
  const {
    tareaseleccionada,
    errorTarea,
    agregarTareas,
    validarTarea,
    obtenerTareas,
    actualizarTarea,
  } = tareasContext;

  // Effect que detecta si hay una tarea seleccionada
  useEffect(() => {
    if (tareaseleccionada !== null) {
      guardarTarea(tareaseleccionada);
    } else {
      guardarTarea({
        nombre: "",
      });
    }
  }, [tareaseleccionada]);

  //state del formulario
  const [tarea, guardarTarea] = useState({
    nombre: "",
  });

  //extraer el nombre del proyecto
  const { nombre } = tarea;

  if (!proyecto) return null;
  // Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  // Leer los valores del formulario
  const handleChange = (e) => {
    guardarTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //validar

    if (nombre.trim() === "") {
      validarTarea();
      return;
    }

    // Si es edicion o si es nueva tarea

    if (tareaseleccionada === null) {
      //tarea nueva
      // agregar nueva tarea al state de tareas
      tarea.proyectoId = proyectoActual.id;
      tarea.estado = false;
      agregarTareas(tarea);
    } else {
      //actualizar tarea existente
      actualizarTarea(tarea);
    }

    // Obtener y filtrar las tareas del proyecto actual

    obtenerTareas(proyectoActual.id);

    // reiniciar el form
    guardarTarea({
      nombre: "",
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea"
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>

        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value={tareaseleccionada ? "Editar Tarea" : "Agregar Tarea"}
          />
        </div>
      </form>
      {errorTarea ? (
        <p className="mensaje error">El nombre de la tarea es obligatorio</p>
      ) : null}
    </div>
  );
};
