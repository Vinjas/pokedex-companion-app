import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from "classnames"

import zeroIDs from "../utils/zeroIDs"


const Pokemon = () => {
  const location = useLocation();

  const [pokemon, setPokemon] = useState([]);
  const [pokemonSpecies, setPokemonSpecies] = useState([])
  const [evolutionChain, setEvolutionChain] = useState ([])
  const [evolutionInfo, setEvolutionInfo] = useState ([])

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${location.state}`)
    .then((response) => response.json())
    .then((data) => {
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

  
  const { id, height, weight, base_experience } = pokemon;

  
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

  console.log(Object.entries(pokemon)[10])


  return (
    <div className="pokemon">
      <NavLink className="back__button" to={{pathname: "/pokedex/"}}>
        <img
          alt = "back-icon"
          src = "../svg/arrow-left-solid.svg"
          style = {{width:20}}
        />
      </NavLink>
      
      <button onClick={getEvolution()}>Evolution</button>

      <div className="pokemon__header">
        <div className="pokemon__name">
          <h2>
            {Object.entries(pokemon)[10] && Object.entries(pokemon)[10].map((name, index) => {
              if(index === 1) {
                return name.charAt(0).toUpperCase() + name.slice(1)}
              }
            )}
          </h2>

          <h3>
            {Object.entries(pokemon)[6] && Object.entries(pokemon)[6].map((id, index) => {
              if(index === 1) {
                return zeroIDs(id)
              }
            })}
          </h3>
        </div>

        <div className="pokemon__types">
            <div className="card__type">
            {pokemon.types &&
            pokemon.types.map((type, index) => {
            if (index === 0) {
              return <p key={index}>{type['type']['name']}</p>;
            }
            })}
            </div>
              
            <div className={classNames({
              'card__type': twoTypes,
              'card__type--null': !twoTypes,
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