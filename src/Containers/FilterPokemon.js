import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from "react-router-dom";

import PokemonCard from "../Components/PokemonCard"
import { getPokemons } from "../API/pokemons"
import { getPokemon } from "../API/get-pokemon"
import { FilterPoke } from "../API/filter-pokemon"

const FilterPokemon = () => {
  const location = useLocation()
  
  const [pokemons, setPokemons] = useState([])
  const [filteredPokemons, setFilteredPokemons] = useState([])

  useEffect(() => {
    fetch("../data.json")
    .then((response) => response.json())
    .then((data) => {
      setPokemons(data)
    })
  }, []);

  useEffect(() => {
    fetch("../data.json")
    .then((response) => response.json())
    .then((data) => {
      let propType = location.state.charAt(0).toUpperCase() + location.state.slice(1);
      let newData = data.filter(elem => {
        return elem.typeList[0] === propType
      })
      setFilteredPokemons(newData)
    })
  }, []);

  console.log(pokemons)
  console.log(filteredPokemons)


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
      {Object.entries(filteredPokemons.map((pokemon) => {
            return <PokemonCard key={pokemon.id} {...pokemon} id={pokemon.id}/>
          }
      ))}        
      </div>

    </div>
  );  
}

export default FilterPokemon;