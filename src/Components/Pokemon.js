import React, { useState, useEffect } from 'react';
import { getPokemon } from '../API/get-pokemon';
import { NavLink, useLocation } from 'react-router-dom';

const Pokemon = () => {
  const location = useLocation();

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${location.state}`)
    .then((response) => response.json())
    .then((data) => {
      setPokemon(data);
    })
  }, [location.state]);

  const { id, name, height, weight, base_experience } = pokemon;

  return (
    <div>
      <NavLink to={{pathname: "/pokedex/"}}>
        <button>Back</button>
      </NavLink>
      
      <h2>{name}</h2>
      <img
        className='card__img'
        src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
        alt='pokemon-pic'
      />
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