import React from "react";

import CardPokemon from "./CardPokemon";
import "./lista.css";

function Lista(props) {
  return (
    <div className="lista">
      {props.arrayPokemones.map((pokemon, indice) => {
        return <CardPokemon key={indice} pokemon={pokemon} />;
      })}
    </div>
  );
}

export default Lista;
