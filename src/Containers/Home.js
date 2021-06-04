import { NavLink } from "react-router-dom"
//import { pokeballBack } from "../images/palm-leaf.png"

//const pokeballBack = require("./images/background__pokeball--transparent.png")

const Home = () => {
    return (
        <div className="home__page">
            <h1 className="header">What are <br/> you looking for?</h1>
            <NavLink
            className="bigbutton"
            to = {{pathname: "pokemon/"}}
            >    
                    <h2 className="bigbutton__title">Pokedex</h2>
                    <div className="bigbutton__pokeball"/>
                    
            </NavLink>

            <div className="home__row"> 
                
                    <div className="button button__items">
                        <h2 className="button__title">Items</h2>
                        <div className="button__pokeball"/>
                    </div>

                    <div className="button button__moves">
                        <h2 className="button__title">Moves</h2>
                        <div className="button__pokeball"/>
                    </div>
                
            </div>

            <div className="home__row"> 
                
                <div className="button button__types">
                        <h2 className="button__title">Types</h2>
                        <div className="button__pokeball"/>
                    </div>

                    <div className="button button__typeschart">
                        <h2 className="button__title button__title--typechart">Types <br/> Chart</h2>
                        <div className="button__pokeball"/>
                    </div>
                
            </div>
        </div>
    )
}

export default Home