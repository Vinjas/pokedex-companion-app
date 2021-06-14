import React from 'react';
import classNames from "classnames"

import { heightConversor, weightConversor } from "../../utils/heightWeight"
import { baseHappiness } from '../../utils/baseHappiness';
import { genderRates } from "../../utils/genderRates"
import { hatchCycle } from "../../utils/hatchCycle"


const About = (props) => {
    
    const { height, weight, base_experience } = props.pokemon;
    const { base_happiness, capture_rate, hatch_counter, gender_rate } = props.pokemonSpecies;

    function translateAbout() {
        let filterArr = []
        
        filterArr = Object.entries(props.pokemonSpecies)[6][1]
        .filter((elem) => elem.language.name === "en")
        
        return filterArr[filterArr.length - 1].flavor_text
    }
    return (
        <div>
            <div className="pokemon__info pokemon__description">
                <p>
                    {Object.entries(props.pokemonSpecies)[6] 
                    && Object.entries(props.pokemonSpecies)[6][1] 
                    && translateAbout(Object.entries(props.pokemonSpecies)[6][1])}
                </p>
            </div>

            <div>
                <div className="pokemon__title pokemon__title--strong">Abilities:</div>
                    <div className="pokemon__flex">
                        {props.pokemon.abilities &&
                        props.pokemon.abilities.map((ability, index) => {
                            return (
                                <div 
                                key={index} 
                                className={classNames({
                                    pokemon__result: true,
                                    "pokemon__result--inactive": Object.entries(props.pokemon)[0]
                                    && Object.entries(props.pokemon)[0][1][index].is_hidden === true,
                                    })}>
                                    {ability['ability']['name']}
                                </div>
                            )
                        })}
                    </div> 
                </div>

            <div className="pokemon__container">
                <div className="pokemon__row">
                    <div className="pokemon__title">
                        Height
                    </div>

                    <div className="pokemon__info">
                    {Object.entries(props.pokemon)[4] && Object.entries(props.pokemon)[4].map((id, index) => {
                    if (index === 1) {
                        return `${heightConversor(height)}`
                    }
                    })}
                    </div>
                </div>
                
                <div className="pokemon__row">
                    <div className="pokemon__title">
                        Weight
                    </div>

                    <div className="pokemon__info">
                        {Object.entries(props.pokemon)[17] && Object.entries(props.pokemon)[17].map((id, index) => {
                        if (index === 1) {
                            return `${weightConversor(weight)}`
                        }
                        })}
                    </div>
                </div>
            </div>

                <div>
                <h3 className="pokemon__title pokemon__title--strong">Training</h3>

                <div className="pokemon__block">
                    <div className="pokemon__title">Base exp.</div>
                    <div className="pokemon__result">{base_experience}</div>
                </div>

                <div className="pokemon__block">
                    <div className="pokemon__title">Base Happiness</div>
                    <div className="pokemon__result">{baseHappiness(base_happiness)}</div>
                </div>

                <div className="pokemon__block">
                    <div className="pokemon__title">Growth rate</div>
                    <div className="pokemon__result">
                    {Object.entries(props.pokemonSpecies)[12] && Object.entries(props.pokemonSpecies)[12][1].name}
                    </div>
                </div>

                <div className="pokemon__block">
                    <div className="pokemon__title">Capture rate</div>
                    <div className="pokemon__result">{capture_rate}</div>
                </div>

                </div>


                <div>
                <h3 className="pokemon__title pokemon__title--strong">
                Breeding
                </h3>

                <div className="pokemon__container" style={({"flexDirection": "column", "padding": "2rem"})}>
                <div className="pokemon__title">Gender</div>
                    <div 
                    className="pokemon__block"
                    style={{ justifyContent: "space-around" }} >
                        <div className="pokemon__flex">
                        <img
                            alt="back-icon"
                            src="../svg/mars-solid.svg"
                            style={{ width: 17 , "marginRight": "0.5rem"}}
                        />
                        <div className="pokemon__title--medium">
                            {genderRates(gender_rate)[0]}
                        </div>
                        </div>

                        <div className="pokemon__flex">
                        <img
                            alt="back-icon"
                            src="../svg/venus-solid.svg"
                            style={{ width: 13, "marginRight": "0.5rem" }}
                        />
                        <div className="pokemon__title--medium">
                            {genderRates(gender_rate)[1]}
                        </div>
                        </div>
                    </div>

                <div className="pokemon__title">Egg Groups</div>
                    <div className="pokemon__flex">
                    {Object.entries(props.pokemonSpecies)[3] 
                    && Object.entries(props.pokemonSpecies)[3][1].map((name, index) => {
                        return <div key={`eggGroup${index}`} className="pokemon__result pokemon__result--inactive">
                        {name.name}
                        </div>
                    })}
                    </div>

                <div className="pokemon__title">Hatch Cycle</div>
                    <div className="pokemon__result pokemon__result--inactive">
                    {hatchCycle(hatch_counter)}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About