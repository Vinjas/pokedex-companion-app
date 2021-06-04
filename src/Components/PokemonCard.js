import { NavLink, useLocation } from "react-router-dom";
import React from 'react';

import zeroIDs from "../utils/zeroIDs"

const PokemonCard = (props) => {

  const location = useLocation()

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
          <img
            className="card__img" 
            src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`}
            /* https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} */
            alt={props.name}
          />
          <div className="card__pokeball"/>

        </div>
        
        


      </NavLink>
  );
}

export default PokemonCard;