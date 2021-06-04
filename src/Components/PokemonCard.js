import { NavLink, useLocation } from "react-router-dom";
import React from 'react';

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
        <div></div>
        <h3 className="card__title">{props.name}</h3>
        <h3 className="card__title">{props.id}</h3>

        <img
          className="card__img" 
          src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`} 
          alt={props.name}
        />
      </NavLink>
  );
}

export default PokemonCard;