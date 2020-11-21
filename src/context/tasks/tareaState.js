import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import { estarted as TareaReducer, TareaContext } from "./";
import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
} from "../../types";

export const TareaState = (props) => {
  const initialState = {
    tareas: [
      { id: 1, nombre: "Elegir plataforma", estado: true, proyectoId: 1 },
      { id: 2, nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      {
        id: 3,
        nombre: "Elegir plataforma de pago",
        estado: false,
        proyectoId: 3,
      },
      { id: 4, nombre: "Elegir Hosting", estado: true, proyectoId: 4 },
      { id: 5, nombre: "Elegir plataforma", estado: true, proyectoId: 1 },
      { id: 6, nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      {
        id: 7,
        nombre: "Elegir plataforma de pago",
        estado: false,
        proyectoId: 3,
      },
      { id: 8, nombre: "Elegir plataforma", estado: true, proyectoId: 4 },
      { id: 9, nombre: "Elegir Colores", estado: false, proyectoId: 1 },
      {
        id: 10,
        nombre: "Elegir plataforma de pago",
        estado: false,
        proyectoId: 2,
      },
      { id: 11, nombre: "Elegir plataforma", estado: true, proyectoId: 3 },
      { id: 12, nombre: "Elegir Colores", estado: false, proyectoId: 4 },
      {
        id: 13,
        nombre: "Elegir plataforma de pago",
        estado: false,
        proyectoId: 3,
      },
    ],
    tareasProyecto: null,
    errorTarea: false,
    tareaseleccionada: null,
  };

  //create distpach y state

  const [state, dispatch] = useReducer(TareaReducer, initialState);

  //Crear las funciones

  // Obtener las tareas de un proyecto
  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  // Agregar una tarea al proyecto seleccionado
  const agregarTareas = (tarea) => {
    tarea.id = uuidv4();
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };

  // valida y muestra un error en caso de que sea necesario

  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  // Eliminar tarea pór id
  const eliminarTarea = (id) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id,
    });
  };

  // Cambia el estado de la tarea
  const cambiarEstadoTarea = (tarea) => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea,
    });
  };

  // Extraer una tarea para editarla

  const guardarTareaActual = (tarea) => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea,
    });
  };

  // Edita o modifica una tarea
  const actualizarTarea = (tarea) => {
    dispatch({
      type: ACTUALIZAR_TAREA,
      payload: tarea,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasProyecto: state.tareasProyecto,
        errorTarea: state.errorTarea,
        tareaseleccionada: state.tareaseleccionada,
        obtenerTareas,
        agregarTareas,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
        guardarTareaActual,
        actualizarTarea,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};
