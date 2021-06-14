import React from 'react';

const Stats = (props) => {

    function sumAllStats() {
        props.pokemon.stats && props.pokemon.stats.reduce((acc, stat) => {
            return acc + stat.base_stat
        })
    }

    console.log(
        props.pokemon.stats && props.pokemon.stats.reduce((acc, elem) => {
            console.log(acc)
            return acc + elem.base_stat
        }, 0)
    )

    return (
        <div>
            {props.pokemon.stats &&
            props.pokemon.stats.map((stat, index) => {
                return (
                    <div className="stats">
                        <div key={index} className="stats__container">
                            <div className="pokemon__title">{stat['stat']['name']}</div>
                            <div className="pokemon__title pokemon__title--strong">{stat.base_stat}</div>
                        </div>
                    </div>
                );
            })}
            <div className="stats__container">
                <div className="pokemon__title">Total</div>
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


