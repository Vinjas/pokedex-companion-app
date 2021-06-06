const URL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=';

export const getPokemons = (limit) => {
  return fetch(`${URL}${limit}`).then((response) => response.json());
};