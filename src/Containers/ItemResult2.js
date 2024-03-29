import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';  
import { NavLink } from "react-router-dom"
import Fade from 'react-reveal/Fade';

import SearchBar from '../Components/SearchBar-Items';
import ResultItems from '../API/ResultsItems';
import getAllItems from '../API/get-all-items';


const ItemsResult2 = (props) => {
    const [input, setInput] = useState('');
    const [resultList, setResultList] = useState();

    useEffect(() => {
        getAllItems()
        .then(data => {
            let newData = ""    
            
            newData = data.results && data.results.filter(elem => {
                return elem.name && elem.name.toLowerCase().includes(location.state.toLowerCase())
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
            <Fade>
            <ResultItems resultList={resultList}/>
            </Fade>
        </div>
    );
}

export default ItemsResult2