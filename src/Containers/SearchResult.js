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

    return (
        <div className="page__search">
            <NavLink className="back__button back__button--list" 
            to = {{pathname: "/"}}>
                <img
                alt = "back-icon"
                src = "../svg/long-arrow-alt-left-solid-black.svg"
                style = {{width:26}}
                />
            </NavLink>

            <h1 className="header header__pokedex">Search results</h1>

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