import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';  
import { NavLink } from "react-router-dom"

import SearchBar from '../Components/SearchBar-home';
import ResultItems from '../API/ResultsItems';
import getAllItems from '../API/get-all-items';


const ItemsResult = (props) => {
    const [input, setInput] = useState('');
    const [resultListDefault, setResultListDefault] = useState();
    const [resultList, setResultList] = useState();

    useEffect(() => {
        getAllItems()
        .then(data => {
            setResultListDefault(data)
            let newData = ""    
            
            newData = data.results.filter(elem => {
                return elem.name && elem.name.toLowerCase().includes(location.state)
            })
            
            setResultList(newData)
        })
        .catch(() => "")
    }, []);

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
                onChange={setInput}
            />

            <ResultItems resultList={resultList}/>
        </div>
    );
}

export default ItemsResult