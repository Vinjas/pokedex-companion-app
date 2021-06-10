import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from "classnames"

import zeroIDs from "../utils/zeroIDs"
import { getPokemon } from "../API/get-pokemon"


const Pokemon = () => {
  const location = useLocation();

  const [pokemon, setPokemon] = useState([]);
  const [pokemonType, setPokemonType] = useState([])
  const [pokemonSpecies, setPokemonSpecies] = useState([])
  const [evolutionChain, setEvolutionChain] = useState ([])
  const [evolutionInfo, setEvolutionInfo] = useState ([])

  useEffect(() => {
    getPokemon(location.state)
    .then((data) => {
      let type = ""
      type += data.types[0].type.name
      setPokemonType(type);
      setPokemon(data);
    })
  }, [location.state]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${location.state}`)
    .then((response) => response.json())
    .then((data) => {
      setPokemonSpecies(data);
      setEvolutionChain(data.evolution_chain.url)
    })
  }, [location.state]);

  function getEvolution() {
    return () => {
      fetch(evolutionChain)
      .then((response) => response.json())
      .then((data) => {
        setEvolutionInfo(data);
      })
    }
  };

  const { name, id, height, weight, base_experience } = pokemon;

  const twoTypes = twoTypesCheck()
  function twoTypesCheck() {
    let check = false
    pokemon.types &&
      pokemon.types.map((type, index) => {
        if (index === 1) {
          check = true
        }
        })
      return check
  }

  return (
    <div className="page__pokemon">
      <NavLink className="back__button" to={{pathname: "/pokedex/"}}>
        <img
          alt = "back-icon"
          src = "../svg/arrow-left-solid.svg"
          style = {{width:20}}
        />
      </NavLink>
        
      <button onClick={getEvolution()}>Evolution</button> 

      <div className={classNames({
        back: true,
        "back__normal": (pokemonType === "normal"),
        "back__grass": (pokemonType === "grass"),
        "back__fire": (pokemonType === "fire"),
        "back__water": (pokemonType === "water"),
        "back__fighting": (pokemonType === "fighting"),
        "back__flying": (pokemonType === "flying"),
        "back__poison": (pokemonType === "poison"),
        "back__ground": (pokemonType === "ground"),
        "back__rock": (pokemonType === "rock"),
        "back__bug": (pokemonType === "bug"),
        "back__ghost": (pokemonType === "ghost"),
        "back__psychic": (pokemonType === "psychic"),
        "back__ice": (pokemonType === "ice"),
        "back__dragon": (pokemonType === "dragon"),
        "back__dark": (pokemonType === "dark"),
        "back__steel": (pokemonType === "steel"),
        "back__fairy": (pokemonType === "fairy"),
        "back__electric": (pokemonType === "electric"),
      })} >         
        
        <div className="pokemon__name">
          <h2>
            {name}
          </h2>

          <h3>
            {Object.entries(pokemon)[6] && Object.entries(pokemon)[6].map((id, index) => {
              if(index === 1) {
                return `#${zeroIDs(id)}`
              }
            })}
          </h3>
        </div>

        <div className="pokemon__types">
            <div className="pokemon__type">
              {pokemon.types &&
              pokemon.types.map((type, index) => {
                if (index === 0) {
                  return <p key={index}>{type['type']['name']}</p>;
                }
              })}
            </div>
              
            <div className={classNames({
              'pokemon__type': twoTypes,
              'pokemon__type--null': !twoTypes,
            })}>
            {pokemon.types &&
            pokemon.types.map((type, index) => {
              if (index === 1) {
                return <p key={index}>{type['type']['name']}</p>;
              }
            })}
            
            </div>

        </div>
        
        <div className="pokemon__img--wrapper">
          <img
            className='pokemon__img'
            src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
            alt='pokemon-pic'
          />
        </div>
      </div>


      <ul>
        <li>Height: {height}</li>
        <li>Weight: {weight}</li>
        <li>Base XP:{base_experience}</li>
      </ul>

      <ul>
        Abilities:
        {pokemon.abilities &&
          pokemon.abilities.map((ability, index) => {
            return <li key={index}>{ability['ability']['name']}</li>;
          })}
      </ul>
      <ul>
        Stats:
        {pokemon.stats &&
          pokemon.stats.map((stat, index) => {
            return (
              <li key={index}>
                {stat['stat']['name']}:<span>{stat.base_stat}</span>
              </li>
            );
          })}
      </ul>
      <ul>
        Types:
        {pokemon.types &&
          pokemon.types.map((type, index) => {
            return <li key={index}>{type['type']['name']}</li>;
          })}
      </ul>
    </div>
  );
};

export default Pokemon;