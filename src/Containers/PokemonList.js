import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom"

import PokemonCard from "../Components/PokemonCard"

const AllPokemon = () => {
  const [pokemons, setPokemons] = useState([])
  const [typeFilter, setTypeFilter] = useState(false)
  const [genFilter, setGenFilter] = useState(false)
  
  const limit = 80;

  useEffect(() => {
    fetch("../data.json")
    .then((response) => response.json())
    .then((data) => {
      let limitData = data.slice(0, limit)
      setPokemons(limitData)
    })
  }, []);

  function useFilterUpdate(filter) {   
    return () => {
      fetch("../data.json")
      .then((response) => response.json())
      .then((data) => {
        let newData = data.filter(elem => {
          return elem.typeList[0] === filter || elem.typeList[1] === filter
        })
        setPokemons(newData);
      });
    };
  } 

  const openTypeMenu = () => setTypeFilter(!typeFilter)

  function useMoreUpdate() {   
    return () => {
      fetch("../data.json")
      .then((response) => response.json())
      .then((data) => {
        let newLimit = 0
        newLimit = limit + 40
        let limitData = data.slice(0, newLimit)
        setPokemons(limitData)
      })
    };
  } 
  const morePokemons = useMoreUpdate()

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
      onClick={openTypeMenu}
      >
      Type
      </button>
      
      <div className={`${typeFilter ? 'menu__dropType--active' : 'menu__dropType--inactive'}`}>
        <button
        onClick={useFilterUpdate("Fire")}>
          Fire
        </button>

        <button
        onClick={useFilterUpdate("Grass")}>
          Grass
        </button>

        <button
        onClick={useFilterUpdate("Water")}>
          Water
        </button>
      </div>   

      {/*
      POKEMON CARDS
      */}
      <div className="cards">
      {pokemons.map((pokemon) => {
            return <PokemonCard key={pokemon.id} {...pokemon} id={pokemon.id}/>
          }
      )}
      </div>
      
      {/*
      MORE BUTTON
      */}
      <div className="more">
          <div className="more__pokemon" onClick={morePokemons}>+</div>
      </div>

    </div>
  );  
}

export default AllPokemon;