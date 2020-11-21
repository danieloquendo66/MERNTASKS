import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
} from "../../types";

export const estarted = (state, action) => {
  //action.payload = payload
  switch (action.type) {
    case TAREAS_PROYECTO:
      return {
        ...state,
        tareasProyecto: state.tareas.filter(
          (tarea) => tarea.proyectoId === action.payload
        ),
      };

    case AGREGAR_TAREA:
      return {
        ...state,
        tareas: [...state.tareas, action.payload],
        errorTarea: false,
      };

    case VALIDAR_TAREA:
      return {
        ...state,
        errorTarea: true,
      };

    case ELIMINAR_TAREA:
      return {
        ...state,
        tareas: state.tareas.filter((tarea) => tarea.id !== action.payload),
      };
    case ESTADO_TAREA:
    case ACTUALIZAR_TAREA:
      return {
        ...state,
        tareas: state.tareas.map((tarea) =>
          tarea.id === action.payload.id ? action.payload : tarea
        ),
        tareaseleccionada: null,
      };

    case TAREA_ACTUAL:
      return {
        ...state,
        tareaseleccionada: action.payload,
      };

    default:
      return state;
  }
};
