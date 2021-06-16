import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom"
import LazyLoad from "react-lazyload"

import ItemCard from "../Components/ItemCard"
import SearchBar from '../Components/SearchBar';

import getAllItems from '../API/get-all-items';


const ItemList = () => {

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

            <div className="cards">
            {allItems.results && allItems.results.map((item) => {
                return  (
                    
                    <LazyLoad key={item.url.match(regexId)}>
                        <ItemCard 
                            resultList={item} 
                            key={item.url.match(regexId)} {...item} 
                            id={item.url.match(regexId)}/>
                    </LazyLoad>
                )}
            )}
            </div>  


        </div>
    )
}

export default ItemList