import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import { proyectoContext, estarted as proyectoReducer } from "./";
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  EIMINAR_PROYECTO,
} from "../../types";

export const ProyectoState = (props) => {
  const proyectos = [
    { id: 1, nombre: "Tienda Virtual" },
    { id: 2, nombre: "Intranet" },
    { id: 3, nombre: "Diseño de Sitio web" },
  ];
  const initialState = {
    proyectos: [],
    formulario: false,
    errorformulario: false,
    proyecto: null,
  };

  // Dispatch para ejecutar las acciones

  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  //serie de funciones para el CRUD

  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  // Obtener proyectos
  const obatenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos,
    });
  };

  //Agregar nuevo proyecto

  const agregarNuevoProyecto = (proyecto) => {
    proyecto.id = uuidv4();

    //agrgar eñ proyecto en el estate

    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto,
    });
  };

  //Validar formulario por errores

  const mostrarError = () => {
    dispatch({
      type: VALIDAR_FORMULARIO,
    });
  };

  // selecciona el proyecto clikeado

  const proyectoActual = (proyectoId) => {
    dispatch({
      type: PROYECTO_ACTUAL,
      payload: proyectoId,
    });
  };

  // Elimina un proyecto

  const eliminarProyecto = (proyectoId) => {
    dispatch({
      type: EIMINAR_PROYECTO,
      payload: proyectoId,
    });
  };

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        errorformulario: state.errorformulario,
        proyecto: state.proyecto,
        mostrarFormulario,
        obatenerProyectos,
        agregarNuevoProyecto,
        mostrarError,
        proyectoActual,
        eliminarProyecto,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};
