import React from "react";
import { Sidebar, Barra } from "../";
import { FormTarea, ListadoTareas } from "../tasks";

export const Proyectos = () => {
  return (
    <div className="contenedor-app">
      <Sidebar />

      <div className="seccion-principal">
        <Barra />
        <main>
          <FormTarea />
          <div className="contenedor-tareas">
            <ListadoTareas />
          </div>
        </main>
      </div>
    </div>
  );
};
