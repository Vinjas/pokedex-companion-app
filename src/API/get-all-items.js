const URL = 'https://pokeapi.co/api/v2/item/?offset=0&limit=1000';

const getAllItems = () => {
  return fetch(URL)
  .then((response) => response.json());
};

export default getAllItems