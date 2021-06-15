import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from "react-router-dom";

const Evolution = (props) => {
    const [evolutionInfo, setEvolutionInfo] = useState([])
    
    const [evoBaseId, setEvoBaseId] = useState([])
    const [evoBaseName, setEvoBaseName] = useState([])

    const [evoFirstId, setEvoFirstId] = useState([])
    const [evoFirstName, setEvoFirstName] = useState([])
    const [evoFirstReq, setEvoFirstReq] = useState([])
    const [evoFirstTrigger, setEvoFirstTrigger] = useState([])

    const [evoSecondsId, setEvoSecondId] = useState([])
    const [evoSecondsName, setEvoSecondName] = useState([])
    const [evoSecondsReq, setEvoSecondReq] = useState([])
    const [evoSecondsTrigger, setEvoSecondTrigger] = useState([])

    const [evoAlt1Id, setEvoAlt1Id] = useState([])
    const [evoAlt1Name, setEvoAlt1Name] = useState([])
    const [evoAlt1Req, setEvoAlt1Req] = useState([])
    const [evoAlt1Trigger, setEvoAlt1Trigger] = useState([])

    const [evoAlt2Id, setEvoAlt2Id] = useState([])
    const [evoAlt2Name, setEvoAlt2Name] = useState([])
    const [evoAlt2Req, setEvoAlt2Req] = useState([])
    const [evoAlt2Trigger, setEvoAlt2Trigger] = useState([])

    useEffect(() => {
        fetch(props.evolutionChain)
        .then((response) => response.json())
        .then((data) => {
            setEvolutionInfo(data);
            let regex = /\b(\d+)/g

            setEvoBaseId(data.chain.species.url
            .match(regex));
            setEvoBaseName(data.chain.species.name)

            if(data.chain.evolves_to.length !== 0) {
                setEvoFirstId((data.chain.evolves_to[0].species.url)
                .match(regex))
                setEvoFirstName(data.chain.evolves_to[0].species.name)
                setEvoFirstReq(data.chain.evolves_to[0].evolution_details[0])
                setEvoFirstTrigger(data.chain.evolves_to[0].evolution_details[0].trigger.name)
            } else {
                setEvoFirstId(false)
             }
            if(data.chain.evolves_to[0].evolves_to.length !== 0) {
                setEvoSecondId((data.chain.evolves_to[0].evolves_to[0].species.url)
                .match(regex));
                setEvoSecondName(data.chain.evolves_to[0].evolves_to[0].species.name)
                setEvoSecondReq(data.chain.evolves_to[0].evolves_to[0].evolution_details[0])
                setEvoSecondTrigger(data.chain.evolves_to[0].evolves_to[0].evolution_details[0].trigger.name)
            } else {
                setEvoSecondId(false)
            }
            if(data.chain.evolves_to.length > 1) {
                setEvoAlt1Id((data.chain.evolves_to[1].species.url)
                .match(regex));
                setEvoAlt1Name(data.chain.evolves_to[1].species.name)
                setEvoAlt1Req(data.chain.evolves_to[1].evolution_details[0])
                setEvoAlt1Trigger(data.chain.evolves_to[1].evolution_details[0].trigger.name)
            } else {
                setEvoAlt1Id(false)
            }
            if(data.chain.evolves_to[0].evolves_to.length > 1) {
                setEvoAlt2Id((data.chain.evolves_to[0].evolves_to[1].species.url)
                .match(regex));
                setEvoAlt2Name(data.chain.evolves_to[0].evolves_to[1].species.name)
                setEvoAlt2Req(data.chain.evolves_to[0].evolves_to[1].evolution_details[0])
                setEvoAlt2Trigger(data.chain.evolves_to[0].evolves_to[1].evolution_details[0].trigger.name)
            } else {
                setEvoAlt2Id(false)
            }
        })
    }, []);
    
    return(
        <div className="evolution">
            <div className="pokemon__title pokemon__title--strong">Evolution Chain</div>

            <div className="evolution__row"> 
                <div>
                    {evoFirstId &&
                        <NavLink
                        to={{ 
                            pathname: `/pokedex/${evoBaseId}`,
                            state: `${evoBaseId}`,
                        }}>
                            <img
                                className="card__img" 
                                src={`https://pokeres.bastionbot.org/images/pokemon/${evoBaseId}.png`}
                                alt={evoBaseId}
                            />
                            <div>{evoBaseName}</div>
                        </NavLink>
                    }
                </div>
                <div>
                    {evoFirstTrigger}
                    {evoFirstTrigger === "level-up" && evoFirstReq.min_level}
                    {evoFirstTrigger === "trade" && evoFirstReq.held_item && `Held Item:  ${evoFirstReq.held_item.name}`}
                    {evoFirstTrigger === "use-item" && evoFirstReq.item.name}
                </div>
                <div>
                    {evoFirstId &&
                    <NavLink
                    to={{ 
                        pathname: `/pokedex/${evoFirstId}`,
                        state: `${evoFirstId}`,
                    }}>
                        <img
                            className="card__img" 
                            src={`https://pokeres.bastionbot.org/images/pokemon/${evoFirstId}.png`}
                            alt={evoFirstId}
                        />
                        <div>{evoFirstName}</div>
                    </NavLink>
                    }
                </div>
            </div>

            <div className="evolution__row"> 
                <div>
                    {evoSecondsId &&
                    <NavLink
                    to={{ 
                        pathname: `/pokedex/${evoFirstId}`,
                        state: `${evoFirstId}`,
                    }}>
                        <img
                            className="card__img" 
                            src={`https://pokeres.bastionbot.org/images/pokemon/${evoFirstId}.png`}
                            alt={evoFirstId}
                        />
                        <div>{evoFirstName}</div>
                    </NavLink>
                    }
                </div>
                <div>
                    {evoSecondsTrigger}
                    {evoSecondsTrigger === "level-up" && evoSecondsReq.min_level}
                    {evoSecondsTrigger === "trade" && evoSecondsReq.held_item && `Held Item:  ${evoSecondsReq.held_item.name}`}
                    {evoSecondsTrigger === "use-item" && evoSecondsReq.item.name}
                </div>
                <div>
                    {evoSecondsId &&
                    <div>
                        {evoSecondsId &&
                        <NavLink
                        to={{ 
                            pathname: `/pokedex/${evoSecondsId}`,
                            state: `${evoSecondsId}`,
                        }}>
                            <img
                                className="card__img" 
                                src={`https://pokeres.bastionbot.org/images/pokemon/${evoSecondsId}.png`}
                                alt={evoSecondsId}
                            />
                            <div>{evoSecondsName}</div>
                        </NavLink>
                        }
                    </div>
                    }
                </div>
            </div>

            {evoAlt1Id &&
                <div className="evolution__row"> 
                <NavLink
                to={{ 
                    pathname: `/pokedex/${evoBaseId}`,
                    state: `${evoBaseId}`,
                }}>
                    <img
                        className="card__img" 
                        src={`https://pokeres.bastionbot.org/images/pokemon/${evoBaseId}.png`}
                        alt={evoBaseId}
                    />
                    <div>{evoBaseName}</div>
                </NavLink>
                <div>
                    {evoAlt1Trigger}
                    {evoAlt1Trigger === "level-up" && evoAlt1Req.min_level}
                    {evoAlt1Trigger === "trade" && evoAlt1Req.held_item && `Held Item:  ${evoAlt1Req.held_item.name}`}
                    {evoAlt1Trigger === "use-item" && evoAlt1Req.item.name}
                </div>
                <NavLink
                to={{ 
                    pathname: `/pokedex/${evoAlt1Id}`,
                    state: `${evoAlt1Id}`,
                }}>
                    <img
                        className="card__img" 
                        src={`https://pokeres.bastionbot.org/images/pokemon/${evoAlt1Id}.png`}
                        alt={evoAlt1Id}
                    />
                    <div>{evoAlt1Name}</div>
                </NavLink>
            </div>
            }
            {evoAlt2Id &&
                <div className="evolution__row"> 
                <NavLink
                to={{ 
                    pathname: `/pokedex/${evoFirstId}`,
                    state: `${evoFirstId}`,
                }}>
                    <img
                        className="card__img" 
                        src={`https://pokeres.bastionbot.org/images/pokemon/${evoFirstId}.png`}
                        alt={evoFirstId}
                    />
                    <div>{evoFirstName}</div>
                </NavLink>
                <div>
                    {evoAlt2Trigger}
                    {evoAlt2Trigger === "level-up" && evoAlt2Req.min_level}
                    {evoAlt2Trigger === "trade" && evoAlt2Req.held_item && `Held Item:  ${evoAlt2Req.held_item.name}`}
                    {evoAlt2Trigger === "use-item" && evoAlt2Req.item.name}
                </div>
                <NavLink
                to={{ 
                    pathname: `/pokedex/${evoAlt2Name}`,
                    state: `${evoAlt2Name}`,
                }}>
                    <img
                        className="card__img" 
                        src={`https://pokeres.bastionbot.org/images/pokemon/${evoAlt2Id}.png`}
                        alt={evoAlt2Id}
                    />
                    <div>{evoAlt2Name}</div>
                </NavLink>
            </div>
            }
        </div>
    )
}

export default Evolution