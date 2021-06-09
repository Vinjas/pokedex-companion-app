import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';  
import { NavLink } from "react-router-dom"

import SearchBar from '../Components/SearchBar-home';
import ResultsList from '../API/ResultsList';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [resultListDefault, setResultListDefault] = useState();
  const [resultList, setResultList] = useState();

  useEffect(() => {
    return fetch('../data.json')
    .then(response => response.json())
    .then(data => {
      setResultListDefault(data)
      let newData = data.filter(elem => {
        return elem.name.toLowerCase().includes(location.state.toLowerCase())
      })
      setResultList(newData)
     })
  }, []);

  const updateInput = async (input) => {
     const filtered = resultListDefault.filter(elem => {
      return elem.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setResultList(filtered);
  }

  const location = useLocation()

  console.log(location)


	
  return (
    <div>
      <NavLink className="back__button" to={{pathname: "/"}}>
        <img
          alt = "back-icon"
          src = "../svg/arrow-left-solid.svg"
          style = {{width:26}}
        />
      </NavLink>

      <h1>Search results</h1>
      <SearchBar 
       input={input} 
       onChange={updateInput}
       placeholder={location.state}
      />

      <ResultsList resultList={resultList}/>

    </div>
   );
}

export default SearchPage