import React from 'react';
import LazyLoad from "react-lazyload"

import PokemonCard from "../Components/PokemonCard"

const ResultsList = ({resultList=[]}) => {
  
return (
    <div className="cards">
        {resultList.map((pokemon) => {
            if (pokemon) { 
                return (
                    <LazyLoad key={pokemon.id} {...pokemon}>
                        <PokemonCard 
                        key={pokemon.id} {...pokemon}
                        id={pokemon.id}/>
                    </LazyLoad>
                )
            }
            return "Pokemon not found"
            }
        )}
    </div>
  );
}

export default ResultsList