const URL = 'https://pokeapi.co/api/v2/move/';

export const getMove = (pathName) => {
  return fetch(`${URL}${pathName}`)
  .then((response) => response.json());
};

export default getMove