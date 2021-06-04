import { NavLink, useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import { getPokemon } from "../API/pokemon-api"

const PokemonCard = (props) => {
  const location = useLocation();
  
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
        <h3 className="card__title">{props.name}</h3>
        <img
          className="card__img" 
          src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`} 
          alt={props.name}
        />
      </NavLink>
  );
}

export default PokemonCard;