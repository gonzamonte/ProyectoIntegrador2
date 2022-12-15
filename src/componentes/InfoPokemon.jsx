import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./infoPokemon.css";

function InfoPokemon() {
  const { idPokemon } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetch(`http://localhost:3000/pokemones/${idPokemon}`, {
      method: "GET",
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idPokemon]);
  /* dependencia ?????? */
  return (
    <div className="contenedorInfo">
      <div
        className="contenedorColor"
        style={{
          backgroundColor: `${pokemon?.color1}`,
        }}
      >
        <div className="encabezado">
          <Link to={`../`}>
            <img src="/recursos/arrow-left.svg" alt="img" className="arrLeft" />
          </Link>
          <div className="nombreInfo">{pokemon?.nombre}</div>
          <div className="idInfo">#{pokemon?.id2}</div>
        </div>
        <img
          className="pokeballInfo"
          src="/recursos/Pokeball.png"
          alt="pokeball"
        ></img>
        <img src={pokemon?.imagen} alt="img" className="imgInfo"></img>
        <div className="flechaDer">
          {pokemon?.id == 9 ? (
            <Link to={`../pokemon/1`}>
              <img src="/recursos/Frame.svg" alt="arrowRight" />
            </Link>
          ) : (
            <Link to={`../pokemon/${parseInt(pokemon?.id) + 1}`}>
              <img src="/recursos/Frame.svg" alt="arrowRight" />
            </Link>
          )}
        </div>
        <div className="flechaIzq">
          {pokemon?.id == 1 ? (
            <Link to={`../pokemon/9`}>
              <img src="/recursos/Frame.svg" alt="arrowRight" />
            </Link>
          ) : (
            <Link to={`../pokemon/${parseInt(pokemon?.id) - 1}`}>
              <img src="/recursos/Frame.svg" alt="arrowRight" />
            </Link>
          )}
        </div>
        <div className="fondoInfo">
          <div className="tipos">
            <div
              className="tipo1"
              style={{
                backgroundColor: `${pokemon?.color1}`,
              }}
            >
              {pokemon?.tipo[0]}{" "}
            </div>
            {pokemon?.tipo.length > 1 ? (
              <div
                className="tipo2"
                style={{
                  backgroundColor: `${pokemon?.color2}`,
                }}
              >
                {pokemon?.tipo[1]}
              </div>
            ) : null}
          </div>
          <p
            className="about"
            style={{
              color: `${pokemon?.color1}`,
            }}
          >
            About
          </p>
          <div className="medidas">
            <div className="contPeso">
              <img src="/recursos/Weight.svg" alt="img" className="wIcon" />
              <div className="peso">{pokemon?.peso}</div>
              <p className="txtWeight">Weight</p>
            </div>
            <div className="contAltura">
              <img src="/recursos/Height.svg" alt="img" className="hIcon" />
              <div className="altura">{pokemon?.altura}</div>
              <p className="txtHeight">Height</p>
            </div>
            <div className="contMovs">
              <div className="mov1">{pokemon?.movimientos[0]} </div>
              <div className="mov2">{pokemon?.movimientos[1]} </div>
              <p className="txtMoves">Moves</p>
            </div>
          </div>
          <div className="info">{pokemon?.info}</div>
          <p
            className="base"
            style={{
              color: `${pokemon?.color1}`,
            }}
          >
            Base Stats
          </p>
          <div className="stats">
            <div
              className="descriptions"
              style={{ color: `${pokemon?.color1}` }}
            >
              <div> HP- {pokemon?.estadisticas.hp}</div>
              <div> ATK- {pokemon?.estadisticas.atk}</div>
              <div> DEF- {pokemon?.estadisticas.def}</div>
              <div> SATK- {pokemon?.estadisticas.satk} </div>
              <div> SDEF- {pokemon?.estadisticas.sdef} </div>
              <div> SPD- {pokemon?.estadisticas.spd} </div>
            </div>
            <div className="bars">
              <div className="bar">
                <div
                  style={{
                    backgroundColor: `${pokemon?.color1}`,
                    width: `${pokemon?.estadisticas.hp}` + "%",
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: "#d3d3d3",
                    width: 100 - `${pokemon?.estadisticas.hp}` + "%",
                  }}
                ></div>
              </div>

              <div className="bar">
                <div
                  style={{
                    backgroundColor: `${pokemon?.color1}`,
                    width: `${pokemon?.estadisticas.atk}` + "%",
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: "#d3d3d3",
                    width: 100 - `${pokemon?.estadisticas.atk}` + "%",
                  }}
                ></div>
              </div>

              <div className="bar">
                <div
                  style={{
                    backgroundColor: `${pokemon?.color1}`,
                    width: `${pokemon?.estadisticas.def}` + "%",
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: "#d3d3d3",
                    width: 100 - `${pokemon?.estadisticas.def}` + "%",
                  }}
                ></div>
              </div>

              <div className="bar">
                <div
                  style={{
                    backgroundColor: `${pokemon?.color1}`,
                    width: `${pokemon?.estadisticas.satk}` + "%",
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: "#d3d3d3",
                    width: 100 - `${pokemon?.estadisticas.satk}` + "%",
                  }}
                ></div>
              </div>

              <div className="bar">
                <div
                  style={{
                    backgroundColor: `${pokemon?.color1}`,
                    width: `${pokemon?.estadisticas.sdef}` + "%",
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: "#d3d3d3",
                    width: 100 - `${pokemon?.estadisticas.sdef}` + "%",
                  }}
                ></div>
              </div>

              <div className="bar">
                <div
                  style={{
                    backgroundColor: `${pokemon?.color1}`,
                    width: `${pokemon?.estadisticas.spd}` + "%",
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: "#d3d3d3",
                    width: 100 - `${pokemon?.estadisticas.spd}` + "%",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InfoPokemon;
