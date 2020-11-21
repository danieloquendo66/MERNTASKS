import React, { useContext, useEffect } from "react";
import { Proyecto } from "./";
import { proyectoContext } from "../../context/proyectos";

export const ListadoProyectos = () => {
  //Extraer proyectos de state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obatenerProyectos } = proyectosContext;

  useEffect(() => {
    obatenerProyectos();
    // eslint-disable-next-line
  }, []);

  // revisar si proyectos tiene contenido
  if (proyectos.length === 0)
    return <p>No hay proyectos, comienza creando uno</p>;

  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Proyecto proyecto={proyecto} key={proyecto.id} />
      ))}
    </ul>
  );
};
