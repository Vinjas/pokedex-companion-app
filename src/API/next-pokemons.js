const URL = 'https://pokeapi.co/api/v2/pokemon';

/*?offset=${}&limit=20*/

export const getMorePokemons = (offset) => {
  return fetch(`${URL}?offset=${offset}&limit=20`).then((response) => response.json());
};