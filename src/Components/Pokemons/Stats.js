import React from 'react';

const Stats = (props) => {

    return (
        <div>
            {props.pokemon.stats &&
            props.pokemon.stats.map((stat, index) => {
                var nameMove = stat['stat']['name']
                if(stat['stat']['name'] === "special-attack") {
                    nameMove = 'Sp. Atk'
                } else if (stat['stat']['name'] === "special-defense") {
                    nameMove = 'Sp. Def'
                }

                return (
                    <div key={`${stat}${index}`} className="stats">
                        <div key={`${stat}${index}`} className="stats__container">
                            <div 
                            key={stat['stat']['name']} 
                            className="pokemon__title"
                            style={{fontWeight:400}}>                           
                                {nameMove}
                            </div>

                            <div 
                            key={stat.base_stat} 
                            className="pokemon__title pokemon__title--strong">
                                {stat.base_stat}
                            </div>
                        </div>
                    </div>
                );
            })}
            <div className="stats__container">
                <div className="pokemon__title" style={{fontWeight:400}}>
                    Total
                </div>
                <div className="pokemon__title pokemon__title--strong">
                    {props.pokemon.stats && props.pokemon.stats.reduce((acc, elem) => {                      
                        return acc + elem.base_stat
                    }, 0)}             
                </div>
            </div>
        </div>
    )
}

export default Stats


