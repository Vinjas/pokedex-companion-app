import React from 'react';
import PokemonCard from "../Components/PokemonCard"

const ResultsList = ({resultList=[]}) => {
  return (
    <>
      <div className="cards">
      {resultList.map((pokemon) => {
        if (pokemon) { 
            return <PokemonCard key={pokemon.id} {...pokemon} id={pokemon.id}/>
          }
        return null
        }
      )}
      </div>
    </>
  );
}

export default ResultsList