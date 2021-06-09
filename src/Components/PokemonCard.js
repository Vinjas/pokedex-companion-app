import { NavLink, useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import classNames from "classnames"
import LazyLoad from "react-lazyload"

import zeroIDs from "../utils/zeroIDs"
import { getPokemon } from "../API/get-pokemon"

const PokemonCard = (props) => {
  const location = useLocation()
  
  const [pokemonType1, setPokemonType1] = useState([]);
  const [pokemonType2, setPokemonType2] = useState([]);

  useEffect(() => {
    getPokemon(props.id)
    .then((data) => {
      let type = ""
      type += data.types[0].type.name
      setPokemonType1(type);
    });
  }, [location.pathname, props.id]);

  useEffect(() => {
    getPokemon(props.id)
    .then((data) => {
      let type = ""
      if ((data.types).length > 1) {
        type += data.types[1].type.name
      }
      setPokemonType2(type);
    });
  }, [location.pathname, props.id]);


  return (
      <NavLink 
      className={classNames({
        card: true,
        "card__normal": (pokemonType1 === "normal"),
        "card__grass": (pokemonType1 === "grass"),
        "card__fire": (pokemonType1 === "fire"),
        "card__water": (pokemonType1 === "water"),
        "card__fighting": (pokemonType1 === "fighting"),
        "card__flying": (pokemonType1 === "flying"),
        "card__poison": (pokemonType1 === "poison"),
        "card__ground": (pokemonType1 === "ground"),
        "card__rock": (pokemonType1 === "rock"),
        "card__bug": (pokemonType1 === "bug"),
        "card__ghost": (pokemonType1 === "ghost"),
        "card__psychic": (pokemonType1 === "psychic"),
        "card__ice": (pokemonType1 === "ice"),
        "card__dragon": (pokemonType1 === "dragon"),
        "card__dark": (pokemonType1 === "dark"),
        "card__steel": (pokemonType1 === "steel"),
        "card__fairy": (pokemonType1 === "fairy"),
        "card__electric": (pokemonType1 === "electric"),
      })} 
      to={
        { 
          pathname: `${props.id}`,
          state: `${props.id}`  
        }
      }
      >
        <div className="card__header">
          <h3 className="card__title">{props.name}</h3>
          <h3 className="card__id">{zeroIDs(props.id)}</h3>
        </div>

        <div className="card__content">
          <div className="card__types">
            <div className="card__type">{pokemonType1}</div>
            <div className={classNames({
              'card__type': pokemonType2,
              'card__type--null': !pokemonType2,
            })}>
            {pokemonType2}</div>
          </div>

          <LazyLoad height={"100%"}>
            <img
              className="card__img" 
              src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`}
              /* https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} */
              alt={props.name}
            />
          </LazyLoad>

        </div>
      </NavLink>
  );
}

export default PokemonCard;