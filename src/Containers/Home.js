import { NavLink } from "react-router-dom"

const Home = () => {
    return (
        <div className="home__page">
            <h1 className="home__header">What are you looking for?</h1>
            <NavLink
            className="home__bigbutton"
            to = {{pathname: "pokemon/"}}
            >    
                    <h2 className="home__bigtitle">Pokémon</h2>
                    <img alt="pokeball__big"/>
            </NavLink>

            <div className="home__row"> 
                
                    <div className="home__button">
                        <h2 className="home__bigtitle">Items</h2>
                        <img alt="pokeball__big"/>
                    </div>

                    <div className="home__button">
                        <h2 className="home__bigtitle">Moves</h2>
                        <img alt="pokeball__big"/>
                    </div>
                
            </div>

            <div className="home__row"> 
                
                    <div className="home__button">
                        <h2 className="home__bigtitle">Types</h2>
                        <img alt="pokeball__big"/>
                    </div>

                    <div className="home__button">
                        <h2 className="home__bigtitle">Types Chart</h2>
                        <img alt="pokeball__big"/>
                    </div>
                
            </div>
        </div>
    )
}

export default Home