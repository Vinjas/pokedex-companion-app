import { NavLink, useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import zeroIDs from "../utils/zeroIDs"
import { getPokemon } from "../API/pokemon-api"

const PokemonCard = (props) => {
  const location = useLocation()
  
  const [pokemonType1, setPokemonType1] = useState([]);
  const [pokemonType2, setPokemonType2] = useState([]);
  
  useEffect(() => {
    getPokemon(`${location.pathname}${props.id}`)
    .then((data) => {
      let type = ""
      type += data.types[0].type.name
      setPokemonType1(type);
    });
  }, [`${location.pathname}${props.id}`]);

  useEffect(() => {
    getPokemon(`${location.pathname}${props.id}`)
    .then((data) => {
      let type = ""
      if ((data.types).length > 1) {
        type += data.types[1].type.name
      }
      setPokemonType2(type);
    });
  }, [`${location.pathname}${props.id}`]);

  return (
      <NavLink 
      className="card" 
      to={
        { 
          pathname: `${location.pathname}${props.id}`,
          state: `${props.id}`  
        }
      }
      >
        <div className="card__header">
          <h3 className="card__title">{props.name}</h3>
          <h3 className="card__id">{zeroIDs(props.id)}</h3>
        </div>

        <div className="card__content">
          <div>
            {pokemonType1}
          </div>
          <div>
            {pokemonType2}
          </div>

          <img
            className="card__img" 
            src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`}
            /* https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} */
            alt={props.name}
          />
        </div>
      </NavLink>
  );
}

export default PokemonCard;