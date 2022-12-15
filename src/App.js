import './App.css';
import Buscador from './componentes/Buscador';
import Lista from './componentes/Lista';
import {useEffect, useState} from "react";

function App() {
  const [arrayPokemones, setArrayPokemones] = useState([]);
  const [arrayOriginal,setArrayOriginal] = useState([])
  const [ordenarAz, setOrdenarAz] = useState(false);

  const getPokemons = ()=> { fetch("http://localhost:3000/pokemones", {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then((data) => {
      setArrayOriginal(data);
      setArrayPokemones(data);
    })
    .catch((error) => {
      alert(error.statusText);
    });

  }
  useEffect(() => {
    getPokemons ();
  }, []);

  const filtrar = (buscar) => {
    if (buscar === "") {
      getPokemons ();
    } else {
      const arrayFiltrado = [...arrayOriginal].filter((pokemon) =>  {
        if (buscar === "") {
          return pokemon;
        } else if (pokemon.nombre.toLowerCase().includes(buscar.toLowerCase())) {
          return pokemon;
        }
      });
      setArrayPokemones(arrayFiltrado)}
  };

  const ordenar = () => {   
   
    if (ordenarAz == true) {
      setOrdenarAz(false)
      const arrayOrdenado = [...arrayOriginal].sort((a,b)=>{
        if (a.id > b.id) { 
          return 1 }
        else if (b.id > a.id) {return -1 } else {return 0};
      });
      setArrayPokemones(arrayOrdenado);
    } 
    
    else if (ordenarAz == false) {
      setOrdenarAz(true)
      const arrayOrdenado = [...arrayOriginal].sort((a,b)=>{
        if (a.nombre > b.nombre) { 
          return 1 }
        else if (b.nombre > a.nombre) {return -1 } else {return 0};
      });
      setArrayPokemones(arrayOrdenado);
    }
  }


  return (
    <div className="contenedor">
      <Buscador filtrar={filtrar} ordenar={ordenar} ordenarAz={ordenarAz} />
      <Lista arrayPokemones={arrayPokemones} />
    </div>
  );
}

export default App;