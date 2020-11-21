import React, { useState, useContext } from "react";
import { proyectoContext } from "../context/proyectos";

export const NuevoProyecto = () => {
  //obtener el state del formulario

  const proyectosContext = useContext(proyectoContext);

  const {
    formulario,
    errorformulario,
    mostrarFormulario,
    agregarNuevoProyecto,
    mostrarError,
  } = proyectosContext;

  //state para Proyecto
  const [proyecto, setProyecto] = useState({
    nombre: "",
  });

  const { nombre } = proyecto;

  const handleChange = (e) => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validar

    if (nombre === "") {
      mostrarError();
      return;
    }

    //agregar a state
    agregarNuevoProyecto(proyecto);

    // reiniciar el form
    setProyecto({
      nombre: "",
    });
  };

  //Mostrar el formulario

  const onClickFormulario = () => {
    mostrarFormulario();
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={onClickFormulario}
      >
        Nuevo Proyecto
      </button>

      {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            value={nombre}
            name="nombre"
            onChange={handleChange}
          />

          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar proyecto"
          />
        </form>
      ) : null}

      {errorformulario ? (
        <p className="mensaje error">El nombre del Proyecto es obligatorio</p>
      ) : null}
    </>
  );
};
