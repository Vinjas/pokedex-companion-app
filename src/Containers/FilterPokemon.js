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
      /*let newData = Object.entries(data)[2][1].typeList[0]*/
    
      setPokemons(data)
      
      /*data.filter((pokemon) => {
        return data["typeList"][0] === location.state
      })
      setPokemons(newData);*/
    })
  }, []);

  useEffect(() => {
    fetch("../data.json")
    .then((response) => response.json())
    .then((data) => {
      /*let newData = data[3].typeList[0]*/
      let propType = location.state.charAt(0).toUpperCase() + location.state.slice(1);
      let newData = data.filter(elem => {
        return elem.typeList[0] === propType
      })
      setFilteredPokemons(newData)

    })
  }, []);

  /*const pokemonMatch = pokemons.filter(elem => {
    return elem.typeList[0] === location.state
  })*/

  console.log(location.state)
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
        {/*Object.entries(pokemons)[2][1].typeList[0] === location.type ?
          <PokemonCard key={Object.entries(pokemons)[2][1].id} id={Object.entries(pokemons)[2][1].id}/> : null
        */}
          
      </div>

    </div>
  );  
}

export default FilterPokemon;