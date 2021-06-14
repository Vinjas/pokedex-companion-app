import React from 'react';

const Stats = (props) => {


    return (
        <div>
            Stats:
            {props.pokemon.stats &&
            props.pokemon.stats.map((stat, index) => {
                return (
                <li key={index}>
                    {stat['stat']['name']}:<span>{stat.base_stat}</span>
                </li>
                );
            })}
        </div>
    )
}

export default Stats


