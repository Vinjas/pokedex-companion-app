import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom"

import PokemonCard from "../Components/PokemonCard"
import { getPokemons } from "../API/pokemons"
import { getPokemon } from "../API/get-pokemon"
import { FilterPoke } from "../API/filter-pokemon"

const FilterPokemon = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch("../data.json")
    .then((response) => response.json())
    .then((data) => {
        setPokemons(data);
    })
  }, []);

  console.log(pokemons)

  return (
    <div>
      <NavLink className="back__button" to={{pathname: "/"}}>
        <button>Back</button>
      </NavLink>

      <h1 className="header header__pokedex">Pokedex</h1>  

      <NavLink className="filter__button" to={{pathname: "/filter/type"}}>
        <button>Fire</button>
      </NavLink>      

      <div className="cards">
        {/*{Object.entries(pokemons)[3] && 
          Object.entries(pokemons)[3][1].map((pokemon, index) => {
            return <PokemonCard key={index} {...pokemon} id={index + 1}/>
          })}*/}
      </div>

    </div>
  );  
}

export default FilterPokemon;