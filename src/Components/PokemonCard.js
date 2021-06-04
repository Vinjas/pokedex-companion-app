import { NavLink, useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import zeroIDs from "../utils/zeroIDs"
import processTypes from "../utils/processTypes"
import { getPokemon } from "../API/pokemon-api"

const PokemonCard = (props) => {
  const location = useLocation()
  
  const [pokemonType, setPokemonType] = useState([]);
  
  useEffect(() => {
    getPokemon(`${location.pathname}${props.id}`)
    .then((data) => {
      setPokemonType(data);
    });
  }, [`${location.pathname}${props.id}`]);

  const { types } = pokemonType;






  

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
          <div></div>


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