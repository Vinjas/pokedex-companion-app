import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom"
import LazyLoad from "react-lazyload"
import Fade from 'react-reveal/Fade';

import ItemCard from "../Components/ItemCard"
import {SearchBarItem} from '../Components/SearchBar-Items';

import getAllItems from '../API/get-all-items';


const ItemList = () => {
    const [input, setInput] = useState("")
    const [allItems, setAllItems] = useState([])

    const regexId = /\b(\d+)/g

    useEffect(() => {
        getAllItems()
        .then((data) => {
            setAllItems(data)
        })
    }, [])

    return (
        <div className="page__pokemonlist">
            <Fade>
            {/* BACK BUTTON */}
            <NavLink className="back__button back__button--list" 
            to = {{pathname: "/"}}>
                <img
                alt = "back-icon"
                src = "../svg/long-arrow-alt-left-solid-black.svg"
                style = {{width:26}}
                />
            </NavLink>

            <h1 className="header header__pokedex">Items</h1>  

            <SearchBarItem 
                input={input} 
                onChange={setInput}
            />
            </Fade>

            <div className="cards">
            {allItems.results && allItems.results.map((item) => {
                return  (
                    
                    <LazyLoad 
                    key={item.url.match(regexId)}
                    style={{display:"flex", width:"100%"}}>
                        <Fade bottom>
                        <ItemCard 
                            resultList={item} 
                            key={item.url.match(regexId)} {...item} 
                            id={item.url.match(regexId)}/>
                        </Fade>
                    </LazyLoad>
                )}
            )}
            </div>  


        </div>
    )
}

export default ItemList