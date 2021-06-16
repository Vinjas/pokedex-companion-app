const URL = 'https://pokeapi.co/api/v2/item/';

export const getItem = (pathName) => {
  return fetch(`${URL}${pathName}`)
  .then((response) => response.json());
};