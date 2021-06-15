import React, { useState, useEffect } from 'react';

import getMove from '../API/get-move';

const MoveCard = (props) => {
    const [move, setMove] = useState([])

    useEffect(() => {
        getMove(props.moveId)
        .then((data) => {
          setMove(data);
        });
      }, [props.moveId]);
        
    const { name, accuracy, power, pp } = move
 
    function lvlZero() {
        if (props.level === 0) {
            return "-"
        }
        return props.level 
    }
    const levelFilter = lvlZero()

    return (
        <div className="movesCard">
            <div className="movesCard__header">
                <div>Lvl.</div>
                <div>Move</div>
                <div>Pwr.</div>
                <div>Prec.</div>
                <div>PP</div>
            </div>
            

            <div className="movesCard__content">
                <div>{levelFilter}</div>
                <div>{name}</div>
                <div>{power ? power : "-"}</div>
                <div>{accuracy ? accuracy : "-"}</div>
                <div>{pp}</div>
            </div>

            <div className="movesCard__content">
                <div className="movesCard__type">{move.type && move.type.name}</div>
                <div className="movesCard__damage">{move.damage_class && move.damage_class.name}</div>
            </div>


            <div className="movesCard__description">
                {move.effect_entries && move.effect_entries[0].short_effect}
            </div>
            
            
            
            
            
        </div>
    )
}


export default MoveCard