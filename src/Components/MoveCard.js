import React, { useState, useEffect } from 'react';

import getMove from '../API/get-move';
import classNames from 'classnames';

const MoveCard = (props) => {
    const [move, setMove] = useState([])
    const [machineUrl, setMachineUrl] = useState([])
    const [machine, setMachine] = useState([])

    useEffect(() => {
        getMove(props.moveId)
        .then((data) => {
            setMove(data);
            
            if(data.machines[0]) {
                setMachineUrl(data.machines[0].machine.url)
        }});
      }, [props.moveId]);
    
    useEffect(() => {
        fetch(machineUrl)
        .then((response) => response.json())
        .then((data) => {
            setMachine((data.item.name).match(/\d+/g))
        })
    })
        
    const { name, accuracy, power, pp } = move
 
    function lvlZero() {
        if(props.learn === "level") {
            if (props.level === 0) {
                return "-"
            }
            return props.level 
        } 
        else if (props.learn === "machine") {
            if(move.machines && move.machines[0]) {
                return machine
            }
        } else {
            return ""
        }


    }
    const levelFilter = lvlZero()

    return (
        <div className="movesCard">
            <div className="movesCard__header">
                <div>
                    {props.learn === "level" && "Lvl."}
                    {props.learn === "machine" && "#"}
                    {props.learn === "egg" && ""}
                    {props.learn === "tutor" && ""}
                </div>
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
                <div className={classNames({
                    "movesCard__type": true,
                    "movesCard__type--normal": (move.type && move.type.name === "normal"),
                    "movesCard__type--grass": (move.type && move.type.name === "grass"),
                    "movesCard__type--fire": (move.type && move.type.name === "fire"),
                    "movesCard__type--water": (move.type && move.type.name === "water"),
                    "movesCard__type--fighting": (move.type && move.type.name === "fighting"),
                    "movesCard__type--flying": (move.type && move.type.name === "flying"),
                    "movesCard__type--poison": (move.type && move.type.name === "poison"),
                    "movesCard__type--ground": (move.type && move.type.name === "ground"),
                    "movesCard__type--rock": (move.type && move.type.name === "rock"),
                    "movesCard__type--bug": (move.type && move.type.name === "bug"),
                    "movesCard__type--ghost": (move.type && move.type.name === "ghost"),
                    "movesCard__type--electric": (move.type && move.type.name === "elctric"),
                    "movesCard__type--psychic": (move.type && move.type.name === "psychic"),
                    "movesCard__type--ice": (move.type && move.type.name === "ice"),
                    "movesCard__type--dragon": (move.type && move.type.name === "dragon"),
                    "movesCard__type--dark": (move.type && move.type.name === "dark"),
                    "movesCard__type--steel": (move.type && move.type.name === "steel"),
                    "movesCard__type--fairy": (move.type && move.type.name === "fairy"),
                })}>
                    {move.type && move.type.name}
                </div>
                <div className={classNames({
                    "movesCard__damage": true,
                    "movesCard__damage--physical": (move.damage_class && move.damage_class.name === "physical"),
                    "movesCard__damage--special": (move.damage_class && move.damage_class.name === "special"),
                    "movesCard__damage--status": (move.damage_class && move.damage_class.name === "status"),
                })}>
                    {move.damage_class && move.damage_class.name}
                </div>
            </div>

            <div className="movesCard__description">
                {move.effect_entries && move.effect_entries[0].short_effect}
            </div>
        </div>
    )
}


export default MoveCard