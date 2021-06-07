import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom"

import PokemonCard from "../Components/PokemonCard"
import { getPokemons } from "../API/pokemons"
import { getPokemon } from "../API/get-pokemon"

const AllPokemon = () => {
  const [pokemons, setPokemons] = useState([])
  const [limit, setLimit] = useState(40);

  useEffect(() => {
    getPokemons(limit).then((data) => {
      setPokemons(data);
    });
  });

  function useForceUpdate(){   
    return () => {
      setLimit(limit + 20);
      getPokemons(limit).then((data) => {
        setPokemons(data);
      });
    };
  } 
  const forceUpdate = useForceUpdate()


  return (
    <div>
      {/*
      BACK BUTTON
      */}
      <NavLink className="back__button" to={{pathname: "/"}}>
        <button>Back</button>
      </NavLink>

      <h1 className="header header__pokedex">Pokedex</h1>  

      {/*
      FILTER BUTTONS
      */}
      <NavLink className="filter__button" 
      to={{
        pathname: "/filter/type",
        state: "Fire"
        }}>
        <button>Fire</button>
      </NavLink>
      <NavLink className="filter__button" 
      to={{
        pathname: "/filter/type",
        state: "Grass"
        }}>
        <button>Grass</button>
      </NavLink>     

      {/*
      POKEMON CARDS
      */}
      <div className="cards">
        {Object.entries(pokemons)[3] && 
          Object.entries(pokemons)[3][1].map((pokemon, index) => {
            return <PokemonCard key={index} {...pokemon} id={index + 1}/>
          })}
      </div>
      
      {/*
      MORE BUTTON
      */}
      <div className="more">
          <div className="more__pokemon" onClick={forceUpdate}>+</div>
      </div>

    </div>
  );  
}

export default AllPokemon;