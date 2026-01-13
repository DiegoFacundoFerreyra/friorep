//Es un componente reutilizable que muestra un mensaje mientras algo se está cargando.
//Lo usás cuando:
//✔ Se están trayendo productos
//✔ Se está cargando un detalle
//✔ Firebase todavía no respondió
//Ejemplos reales en tu proyecto:
//ItemListContainer
//ItemDetailContainer

//📌 Necesario para definir el componente (aunque en React moderno podría omitirse): import React from "react";

//Definición del componente: const LoaderComponent = ({ text }) => {
//const LoaderComponent = ({ text }) => {
//✔ Componente funcional
//✔ Recibe props
//✔ text es el mensaje dinámico

//Estructura del return: <div style={{ ... }}>
//Este div funciona como contenedor del loader.
//Hacer el estilo inline IDENTICO, y en este mismo archivo poner el gif que va a figurar mientras se carga.

//Texto dinámico: <p className="mt-2">{text}</p>
//✔ Muestra el mensaje que recibe por props
//✔ Permite usarlo en distintos contextos:
//<LoaderComponent text="Cargando productos..." /> //<LoaderComponent text="Cargando detalle..." />

const LoaderComponent = ({ text }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "85vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <p>{text}</p>
    </div>
  );
};

export default LoaderComponent;
