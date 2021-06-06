import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom"

import PokemonCard from "../Components/PokemonCard"
import { getPokemons } from "../API/list-pokemons"
import { getPokemon } from "../API/get-pokemon"
import { getPokeID } from "../utils/getPokeIDs"

const AllPokemon = () => {
  const [pokemons, setPokemons] = useState([])
  const [limit, setLimit] = useState(40);
  const [id, setID] = useState("")

  useEffect(() => {
    getPokemons(limit).then((data) => {
      setPokemons(data);
      setID(data.results[0].url);  
    });
  });


  console.log(id)

  function useForceUpdate(){   
    return () => {
      setLimit(limit + 20);
      getPokemons(limit).then((data) => {
        setPokemons(data);
      });
    };
  } 
  const forceUpdate = useForceUpdate()

  const pokemonID = pokemons.results
  
  return (
    <div>
      <NavLink className="back__button" to={{pathname: "/"}}>
        <button>Back</button>
      </NavLink>

      <h1 className="header header__pokedex">Pokedex</h1>  

      <div className="cards">
        {pokemons.results.map((pokemon, index) => {
            return <PokemonCard key={index} {...pokemon} id={index + 1}/>
          })}
      </div>

      {/*<div className="cards">
        {Object.entries(pokemons)[3] && 
          Object.entries(pokemons)[3][1].map((pokemon, index) => {
            return <PokemonCard key={index} {...pokemon} id={index + 1}/>
          })}
      </div>*/}
      
      <div className="more">
          <div className="more__pokemon" onClick={forceUpdate}>+</div>
      </div>

    </div>
  );  
}

export default AllPokemon;