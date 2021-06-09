import React, { useState, useEffect } from 'react';
import SearchBar from '../Components/SearchBar';
import ResultsList from '../API/ResultsList';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [resultListDefault, setResultListDefault] = useState();
  const [resultList, setResultList] = useState();

  const fetchData = async () => {
    return await fetch('../data.json')
      .then(response => response.json())
      .then(data => {
        setResultList(data) 
        setResultListDefault(data)
       });}

  const updateInput = async (input) => {
     const filtered = resultListDefault.filter(country => {
      return country.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setResultList(filtered);
  }

  useEffect( () => {fetchData()},[]);
	
  return (
    <>
      <h1>Country List</h1>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />

      <ResultsList resultList={resultList}/>
    </>
   );
}

export default SearchPage