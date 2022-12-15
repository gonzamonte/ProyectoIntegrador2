import React from "react";
import "./lista.css";
import "./cardPokemon.css";
import { Link } from "react-router-dom";
/* import { useState } from "react"; */

function CardPokemon(props) {
  return (
    /*     <div className={props.pokemon.tipo[0]}>  este es otro metodo para hacerlo, pero creando una clase para cada tipo con su color
        correspondiente*/
    <div
      className="card"
      style={{
        color: `${props.pokemon.color1}`,
        backgroundColor: `${props.pokemon.color1}`,
      }}
    >
      <div className="id2">#{props.pokemon.id2}</div>
      <div className="fondo">
        <Link to={`pokemon/${props.pokemon.id}`}>
          <img src={props.pokemon.imagen} alt="img" className="imagen"></img>
        </Link>
      </div>
      <div className="nombre">{props.pokemon.nombre}</div>
    </div>
  );
}

export default CardPokemon;
