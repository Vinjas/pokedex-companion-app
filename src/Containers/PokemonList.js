import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getPokemons } from "../Services/pokemons"

const AllPokemon = () => {
  const [pokemons, setPokemons] = useState([])
  
  return (
    <div>
      I will hold allllllll of the PokemonCard's!!
    </div>
  );  
}



export default AllPokemon;