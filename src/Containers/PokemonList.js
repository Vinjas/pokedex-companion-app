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
        setTypeFilter(!typeFilter);
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
      <div className="dropmenu__header--row">
        <button
        className="dropmenu__header"
        onClick={openTypeMenu}>
        Type
        </button>

        <button
        className="dropmenu__header">
        Generation
        </button>
      </div>

      <div className={`${typeFilter ? 'dropmenu' : 'dropmenu__inactive'}`}>
        <div className="dropmenu__row">
          <button
          className="dropmenu__item dropmenu__item--normal"
          onClick={useFilterUpdate("Normal")}>
            Normal
          </button>
          
          <button
          className="dropmenu__item dropmenu__item--grass"
          onClick={useFilterUpdate("Grass")}>
            Grass
          </button>

          <button
          className="dropmenu__item dropmenu__item--fire"
          onClick={useFilterUpdate("Fire")}>
            Fire
          </button>

          <button
          className="dropmenu__item dropmenu__item--water"
          onClick={useFilterUpdate("Water")}>
            Water
          </button>
        </div>

        <div className="dropmenu__row">
          <button
          className="dropmenu__item dropmenu__item--fighting"
          onClick={useFilterUpdate("Fighting")}>
            Fighting
          </button>

          <button
          className="dropmenu__item dropmenu__item--flying"
          onClick={useFilterUpdate("Flying")}>
            Flying
          </button>

          <button
          className="dropmenu__item dropmenu__item--bug"
          onClick={useFilterUpdate("Bug")}>
            Bug
          </button>

          <button
          className="dropmenu__item dropmenu__item--ground"
          onClick={useFilterUpdate("Ground")}>
            Ground
          </button>
        </div>

        <div className="dropmenu__row">
          <button
          className="dropmenu__item dropmenu__item--rock"
          onClick={useFilterUpdate("Rock")}>
            Rock
          </button>

          <button
          className="dropmenu__item dropmenu__item--poison"
          onClick={useFilterUpdate("Poison")}>
            Poison
          </button>

          <button
          className="dropmenu__item dropmenu__item--ghost"
          onClick={useFilterUpdate("Ghost")}>
            Ghost
          </button>

          <button
          className="dropmenu__item dropmenu__item--psychic"
          onClick={useFilterUpdate("Psychic")}>
            Psychic
          </button>
        </div>

        <div className="dropmenu__row">
          <button
          className="dropmenu__item dropmenu__item--ice"
          onClick={useFilterUpdate("Ice")}>
            Ice
          </button>

          <button
          className="dropmenu__item dropmenu__item--dragon"
          onClick={useFilterUpdate("Dragon")}>
            Dragon
          </button>

          <button
          className="dropmenu__item dropmenu__item--dark"
          onClick={useFilterUpdate("Dark")}>
            Dark
          </button>

          <button
          className="dropmenu__item dropmenu__item--electric"
          onClick={useFilterUpdate("Electric")}>
            Electric
          </button>
        </div>

        <div className="dropmenu__row">
          <button
          className="dropmenu__item dropmenu__item--steel"
          onClick={useFilterUpdate("Steel")}>
            Steel
          </button>

          <button
          className="dropmenu__item dropmenu__item--fairy"
          onClick={useFilterUpdate("Fairy")}>
            Fairy
          </button>

          <div style={{width: '50%'}}></div>

        </div>

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