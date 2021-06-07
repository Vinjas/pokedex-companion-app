const URL = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemon = (pathName) => {
  return fetch(`${URL}${pathName}`)
  .then((response) => response.json());
};