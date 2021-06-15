import React, { useState, useEffect } from 'react';
import { useLocation, useHistory, NavLink } from 'react-router-dom';
import classNames from "classnames"

import zeroIDs from "../utils/zeroIDs"
import { getPokemon } from "../API/get-pokemon"

import About from '../Components/Pokemons/About';
import Stats from "../Components/Pokemons/Stats"
import Evolution from "../Components/Pokemons/Evolution"
import MoveList from "../Components/Pokemons/MoveList"

const Pokemon = () => {
    const location = useLocation();

    const [pokemon, setPokemon] = useState([]);
    const [pokemonType, setPokemonType] = useState([])
    const [pokemonSpecies, setPokemonSpecies] = useState([])
    const [evolutionChain, setEvolutionChain] = useState([])
    const [evolutionInfo, setEvolutionInfo] = useState([])

    const [menu, setMenu] = useState(1)

    useEffect(() => {
        getPokemon(location.state)
        .then((data) => {
            let type = ""
            type += data.types[0].type.name
            setPokemonType(type);
            setPokemon(data);
        })
    }, [location.state]);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${location.state}`)
        .then((response) => response.json())
        .then((data) => {
            setPokemonSpecies(data);
            setEvolutionChain(data.evolution_chain.url)
        })
    }, [location.state]);

    function getEvolution() {
        return () => {
            fetch(evolutionChain)
            .then((response) => response.json())
            .then((data) => {
            setEvolutionInfo(data);
            })
        }
    };

    const { name, id } = pokemon;
    const twoTypes = twoTypesCheck()
    
    function twoTypesCheck() {
        let check = false
        pokemon.types &&
        pokemon.types.map((type, index) => {
            if (index === 1) {
                return check = true
            }
        })
        return check
    }

    function translateGenus() {
        let filterArr = []

        filterArr = Object.entries(pokemonSpecies)[10][1]
        .filter((elem) => elem.language.name === "en")

        return filterArr[filterArr.length - 1].genus
    }


    return (
        <div className="page__pokemon">

            {/* HEADER */}
            <div className={classNames({
            back: true,
            "back__normal": (pokemonType === "normal"),
            "back__grass": (pokemonType === "grass"),
            "back__fire": (pokemonType === "fire"),
            "back__water": (pokemonType === "water"),
            "back__fighting": (pokemonType === "fighting"),
            "back__flying": (pokemonType === "flying"),
            "back__poison": (pokemonType === "poison"),
            "back__ground": (pokemonType === "ground"),
            "back__rock": (pokemonType === "rock"),
            "back__bug": (pokemonType === "bug"),
            "back__ghost": (pokemonType === "ghost"),
            "back__psychic": (pokemonType === "psychic"),
            "back__ice": (pokemonType === "ice"),
            "back__dragon": (pokemonType === "dragon"),
            "back__dark": (pokemonType === "dark"),
            "back__steel": (pokemonType === "steel"),
            "back__fairy": (pokemonType === "fairy"),
            "back__electric": (pokemonType === "electric"),
            })}>

            <NavLink className="back__button"
            to = {{pathname: "/pokedex"}}>
                <img
                alt="back-icon"
                src="../svg/long-arrow-alt-left-solid.svg"
                style={{ width: 26 }}
                />
            </NavLink>

            <div className="pokemon__name">
                <h2>
                    {name}
                </h2>

                <h3 style={{"fontSize":"1.3rem" }}>
                    {Object.entries(pokemon)[6] && Object.entries(pokemon)[6].map((id, index) => {
                        if (index === 1) {
                            return `#${zeroIDs(id)}`
                        }
                    })}
                </h3>
            </div>

            <div className="pokemon__types">
                <div className="pokemon__type">
                    {pokemon.types &&
                    pokemon.types.map((type, index) => {
                        if (index === 0) {
                            return <p key={index}>{type['type']['name']}</p>;
                        }
                    })}
                </div>

                <div 
                className={classNames({
                    'pokemon__type': twoTypes,
                    'pokemon__type--null': !twoTypes,
                })}>
                    {pokemon.types &&
                    pokemon.types.map((type, index) => {
                        if (index === 1) {
                            return <p key={index}>{type['type']['name']}</p>;
                    }
                })}
                </div>

                <div className="pokemon__genus">
                    {Object.entries(pokemonSpecies)[10] 
                    && Object.entries(pokemonSpecies)[10][1] 
                    && translateGenus(Object.entries(pokemonSpecies)[10][1])}
                </div>
            </div>

            <div className="pokemon__img--wrapper">
                <img
                className='pokemon__img'
                src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
                alt='pokemon-pic'
                />
            </div>

            {/* MENU */}
            <div className="pokemon__menu ">
                <div 
                className={classNames({
                    pokemon__title: true,
                    "pokemon__title--menu": (menu !== 1),
                    "pokemon__title--active": (menu === 1)
                })} 
                onClick={() => setMenu(1)}>
                    About
                </div>

                <div 
                className={classNames({
                    pokemon__title: true,
                    "pokemon__title--menu": (menu !== 2),
                    "pokemon__title--active": (menu === 2)
                })}           
                onClick={() => setMenu(2)}>
                    Stats
                </div>

                <div 
                className={classNames({
                    pokemon__title: true,
                    "pokemon__title--menu": (menu !== 3),
                    "pokemon__title--active": (menu === 3)
                })}           
                onClick={() => setMenu(3)}>
                    Evolution
                </div>

                <div 
                className={classNames({
                    pokemon__title: true,
                    "pokemon__title--menu": (menu !== 4),
                    "pokemon__title--active": (menu === 4)
                })}           
                onClick={() => setMenu(4)}>
                    Moves
                </div>
            </div>
            </div>

            {/* CONTENT */}
            <div className="pokemon__content">
                {menu === 1 && <About pokemon={pokemon} pokemonSpecies={pokemonSpecies} /> }
                {menu === 2 && <Stats pokemon={pokemon} /> }
                {menu === 3 && <Evolution pokemon={pokemon} evolutionChain={evolutionChain} /> }
                {menu === 4 && <MoveList pokemon={pokemon} moves={pokemon.moves} /> }
            </div>
        </div>
    );
};

export default Pokemon;