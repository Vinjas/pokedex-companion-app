import React, { useState, useEffect } from 'react';
import MoveCard from "../../Components/MoveCard"
import classNames from 'classnames';


const MoveList = (props) => {
    const [submenu, setSubMenu] = useState(1)

    const levelMoves = props.moves.filter(elem => {
        return elem.version_group_details[0].move_learn_method.name === "level-up"
    })
    const machineMoves = props.moves.filter(elem => {
        return elem.version_group_details[0].move_learn_method.name === "machine"
    })
    const eggMoves = props.moves.filter(elem => {
        return elem.version_group_details[0].move_learn_method.name === "egg"
    })



    return (
        <div>            
            
            <div className="pokemon__menu ">
                <div 
                className={classNames({
                    pokemon__title: true,
                    "pokemon__title--menu": (submenu != 1),
                    "pokemon__title--active": (submenu === 1)
                })} 
                onClick={() => setSubMenu(1)}>
                    Level-Up
                </div>

                <div 
                className={classNames({
                    pokemon__title: true,
                    "pokemon__title--menu": (submenu != 2),
                    "pokemon__title--active": (submenu === 2)
                })}           
                onClick={() => setSubMenu(2)}>
                    Machine
                </div>

                <div 
                className={classNames({
                    pokemon__title: true,
                    "pokemon__title--menu": (submenu != 3),
                    "pokemon__title--active": (submenu === 3)
                })}           
                onClick={() => setSubMenu(3)}>
                    Egg
                </div>
            </div>


            <div>
            {submenu === 1 && 
                levelMoves.map((elem) => {
                    return (            
                        <MoveCard 
                            key={props.id }{...elem}
                            moveName={elem.move && elem.move.name}
                            moveId={elem.move && elem.move.url.match(/\b(\d+)/g)}   
                        />
                    )
                    }
                )
            }
            </div>

            <div>
            {submenu === 2 && 
                machineMoves.map((elem) => {
                    return (            
                        <MoveCard 
                            key={props.id }{...elem}
                            moveName={elem.move && elem.move.name}
                            moveId={elem.move && elem.move.url.match(/\b(\d+)/g)}   
                        />
                    )
                    }
                )
            }
            </div>

            <div>
            {submenu === 3 && 
                eggMoves.map((elem) => {
                    return (            
                        <MoveCard 
                            key={props.id }{...elem}
                            moveName={elem.move && elem.move.name}
                            moveId={elem.move && elem.move.url.match(/\b(\d+)/g)}   
                        />
                    )
                    }
                )
            }
            </div>



        </div>
    )
}


export default MoveList