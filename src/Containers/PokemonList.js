import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from "react-router-dom"
import LazyLoad from "react-lazyload"
import { TransitionGroup } from 'react-transition-group'

import PokemonCard from "../Components/PokemonCard"
import SearchBar from '../Components/SearchBar';



const AllPokemon = (props) => {
  const history = useHistory();
  
  const [pokemons, setPokemons] = useState([])
  const [typeFilter, setTypeFilter] = useState(false)
  const [genFilter, setGenFilter] = useState(false)

  const [input, setInput] = useState('');
  const [resultListDefault, setResultListDefault] = useState();
  //const [resultList, setResultList] = useState();
  
  const limit = 80;

  useEffect(() => {
    fetch("../data.json")
    .then((response) => response.json())
    .then((data) => {
      setResultListDefault(data)
      let limitData = data.slice(0, limit)
      //setResultList(limitData)
      setPokemons(limitData)
    })
  }, []);

  const updateInput = async (input) => {
    const filtered = resultListDefault.filter(pokemon => {
     return pokemon.name.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input);
    setPokemons(filtered);
 }


  function useFilterUpdate(filter) {   
    return () => {
      fetch("../data.json")
      .then((response) => response.json())
      .then((data) => {
        let newData = data.filter(elem => {
          return elem.typeList[0] === filter || elem.typeList[1] === filter
        })
        setTypeFilter(!typeFilter);
        setPokemons(newData);
      });
    };
  } 

  function useGenUpdate(from, to) {   
    return () => {
      fetch("../data.json")
      .then((response) => response.json())
      .then((data) => {
        let newData = data.filter(elem => {
          return elem.id >= from && elem.id <= to
        })
        setGenFilter(!genFilter);
        setPokemons(newData);
      });
    };
  } 

  function useMoreUpdate() {   
    return () => {
      fetch("../data.json")
      .then((response) => response.json())
      .then((data) => {
        let newLimit = 0
        newLimit = limit + 40
        let limitData = data.slice(0, newLimit)
        setPokemons(limitData)
      })
    };
  } 
  
  const morePokemons = useMoreUpdate()
  const openTypeMenu = () => setTypeFilter(!typeFilter)
  const openGenMenu = () => setGenFilter(!genFilter)

  return (
    <div className="page__pokemonlist">
      {/*
      BACK BUTTON
      */}
        <NavLink className="back__button back__button--list" 
        to = {{pathname: "/"}}>
        <img
          alt = "back-icon"
          src = "../svg/long-arrow-alt-left-solid-black.svg"
          style = {{width:26}}
        />
      </NavLink>

      <h1 className="header header__pokedex">Pokedex</h1>  

      {/*
      FILTER BUTTONS
      */}
      <div className="dropmenu__header--row">
        <button
        className="dropmenu__header"
        onClick={openTypeMenu}>
        Type
        </button>

        <button
        className="dropmenu__header"
        onClick={openGenMenu}>
        Gen
        </button>

        <div style={{width: '49%'}}></div>
      </div>

      {/*
      FILTER MENUS
      */}
      <div className={`${genFilter ? 'dropmenu' : 'dropmenu__inactive'}`}>
        <div className="dropmenu__row">
          <button
            className="dropmenu__item dropmenu__item---gen"
            onClick={useGenUpdate(0, 151)}>
            Gen I Kanto
          </button>
          
          <button
            className="dropmenu__item dropmenu__item---gen"
            onClick={useGenUpdate(152, 251)}>
            Gen II Johto
          </button>
        </div>

        <div className="dropmenu__row">
          <button
            className="dropmenu__item dropmenu__item---gen"
            onClick={useGenUpdate(252, 386)}>
            Gen III Hoenn
          </button>
          
          <button
            className="dropmenu__item dropmenu__item---gen"
            onClick={useGenUpdate(387, 493)}>
            Gen IV Sinnoh
          </button>
        </div>

        <div className="dropmenu__row">
          <button
            className="dropmenu__item dropmenu__item---gen"
            onClick={useGenUpdate(494, 649)}>
            Gen V Unova
          </button>
          
          <button
            className="dropmenu__item dropmenu__item---gen"
            onClick={useGenUpdate(650, 721)}>
            Gen VI Kalos
          </button>
        </div>

        <div className="dropmenu__row">
          <button
            className="dropmenu__item dropmenu__item---gen"
            onClick={useGenUpdate(722, 809)}>
            Gen VII Alola
          </button>
          
          <button
            className="dropmenu__item dropmenu__item---gen"
            onClick={useGenUpdate(810, 898)}>
            Gen VIII Galar
          </button>
        </div>     
      </div>

      <div className={`${typeFilter ? 'dropmenu' : 'dropmenu__inactive'}`}>
        <div className="dropmenu__row">
          <button
          className="dropmenu__item dropmenu__item--normal"
          onClick={useFilterUpdate("Normal")}>
            Normal
          </button>
          
          <button
          className="dropmenu__item dropmenu__item--grass"
          onClick={useFilterUpdate("Grass")}>
            Grass
          </button>

          <button
          className="dropmenu__item dropmenu__item--fire"
          onClick={useFilterUpdate("Fire")}>
            Fire
          </button>

          <button
          className="dropmenu__item dropmenu__item--water"
          onClick={useFilterUpdate("Water")}>
            Water
          </button>
        </div>

        <div className="dropmenu__row">
          <button
          className="dropmenu__item dropmenu__item--fighting"
          onClick={useFilterUpdate("Fighting")}>
            Fighting
          </button>

          <button
          className="dropmenu__item dropmenu__item--flying"
          onClick={useFilterUpdate("Flying")}>
            Flying
          </button>

          <button
          className="dropmenu__item dropmenu__item--bug"
          onClick={useFilterUpdate("Bug")}>
            Bug
          </button>

          <button
          className="dropmenu__item dropmenu__item--ground"
          onClick={useFilterUpdate("Ground")}>
            Ground
          </button>
        </div>

        <div className="dropmenu__row">
          <button
          className="dropmenu__item dropmenu__item--rock"
          onClick={useFilterUpdate("Rock")}>
            Rock
          </button>

          <button
          className="dropmenu__item dropmenu__item--poison"
          onClick={useFilterUpdate("Poison")}>
            Poison
          </button>

          <button
          className="dropmenu__item dropmenu__item--ghost"
          onClick={useFilterUpdate("Ghost")}>
            Ghost
          </button>

          <button
          className="dropmenu__item dropmenu__item--psychic"
          onClick={useFilterUpdate("Psychic")}>
            Psychic
          </button>
        </div>

        <div className="dropmenu__row">
          <button
          className="dropmenu__item dropmenu__item--ice"
          onClick={useFilterUpdate("Ice")}>
            Ice
          </button>

          <button
          className="dropmenu__item dropmenu__item--dragon"
          onClick={useFilterUpdate("Dragon")}>
            Dragon
          </button>

          <button
          className="dropmenu__item dropmenu__item--dark"
          onClick={useFilterUpdate("Dark")}>
            Dark
          </button>

          <button
          className="dropmenu__item dropmenu__item--electric"
          onClick={useFilterUpdate("Electric")}>
            Electric
          </button>
        </div>

        <div className="dropmenu__row">
          <button
          className="dropmenu__item dropmenu__item--steel"
          onClick={useFilterUpdate("Steel")}>
            Steel
          </button>

          <button
          className="dropmenu__item dropmenu__item--fairy"
          onClick={useFilterUpdate("Fairy")}>
            Fairy
          </button>

          <div style={{width: '49%'}}></div>

        </div>

      </div>   

      {/*
      SEARCH BAR
      */}
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />

      {/*
      POKEMON CARDS
      */}

            <div className="cards">
            {pokemons.map((pokemon) => {
                  return  <LazyLoad key={pokemon.id}><PokemonCard resultList={pokemons} key={pokemon.id} {...pokemon} id={pokemon.id}/></LazyLoad>
                }
            )}
            </div>     

          
      
      
      {/*
      MORE BUTTON
      */}
      <div className="more">
          <div className="more__pokemon" onClick={morePokemons}>+</div>
      </div>

    </div>
  );  
}

export default AllPokemon;