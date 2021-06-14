import React from 'react';
import LazyLoad from "react-lazyload"

import PokemonCard from "../Components/PokemonCard"

const ResultsList = ({resultList=[]}) => {
  
  return (
    <>
      <h2>Pokemons</h2>
        <div className="cards">
        {resultList.map((pokemon) => {
          if (pokemon) { 
              return <LazyLoad><PokemonCard key={pokemon.id} {...pokemon} id={pokemon.id}/></LazyLoad>
            }
          return "Pokemon not found"
          }
        )}
        </div>

        <h2>Items</h2>

        <h2>Moves</h2>

        <h2>Types</h2>
          
    </>
  );
}

export default ResultsList