import React from "react";
import "./buscador.css";
import { useState } from "react";

function Buscador(props) {
  return (
    <div className="header">
      <img src="/recursos/Pokeball.png" alt="Pokeball" className="imgLogo" />
      <h1 className="titulo">Pokedex</h1>
      <div className="toggle">
        {props.ordenarAz ? (
          <p className="az">A-Z</p>
        ) : (
          <p className="hashtag">#</p>
        )}
      </div>
      <img src="/recursos/Arrow.svg" className="sort" onClick={props.ordenar} />
      <input
        type="text"
        placeholder="Buscar"
        className="buscar"
        onChange={(event) => {
          props.filtrar(event.target.value);
          console.log(event.target.value);
        }}
      />
    </div>
  );
}

export default Buscador;
