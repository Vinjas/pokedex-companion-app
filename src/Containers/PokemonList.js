import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom"

import PokemonCard from "../Components/PokemonCard"
import { getPokemons } from "../API/pokemons"
import { getPokemon } from "../API/get-pokemon"

const AllPokemon = () => {
  const [pokemons, setPokemons] = useState([])
  const [limit, setLimit] = useState(40);
  const [filter, setFilter] = useState([])

  useEffect(() => {
    fetch("../data.json")
    .then((response) => response.json())
    .then((data) => {
      setPokemons(data)
    })
  }, []);
    
    /*getPokemons(limit).then((data) => {
      setPokemons(data);
    });
  });*/

  function useForceUpdate(filter) {   
    return () => {
      fetch("../data.json")
      .then((response) => response.json())
      .then((data) => {
        let newData = data.filter(elem => {
          return elem.typeList[0] === filter
        })
        setPokemons(newData);
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
      <button
      onClick={useForceUpdate("Fire")}>
        Fire
      </button>

      <button
      onClick={useForceUpdate("Grass")}>
        Grass
      </button>

      <button
      onClick={useForceUpdate("Water")}>
        Water
      </button>

      {/*
      POKEMON CARDS
      */}
      <div className="cards">
      {Object.entries(pokemons.map((pokemon) => {
            return <PokemonCard key={pokemon.id} {...pokemon} id={pokemon.id}/>
          }
      ))}
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