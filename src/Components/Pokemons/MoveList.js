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
    const tutorMoves = props.moves.filter(elem => {
        return elem.version_group_details[0].move_learn_method.name === "tutor"
    })

    return (
        <div>            
            
            <div className="movesCard__menu ">
                <div 
                className={classNames({
                    "movesCard__menu--inactive": (submenu !== 1),
                    "movesCard__menu--active": (submenu === 1)
                })} 
                onClick={() => setSubMenu(1)}>
                    Level
                </div>

                <div 
                className={classNames({
                    "movesCard__menu--inactive": (submenu !== 2),
                    "movesCard__menu--active": (submenu === 2)
                })}           
                onClick={() => setSubMenu(2)}>
                    TM/HM
                </div>

                <div 
                className={classNames({
                    "movesCard__menu--inactive": (submenu !== 3),
                    "movesCard__menu--active": (submenu === 3)
                })}           
                onClick={() => setSubMenu(3)}>
                    Egg
                </div>

                <div 
                className={classNames({
                    "movesCard__menu--inactive": (submenu !== 4),
                    "movesCard__menu--active": (submenu === 4)
                })}           
                onClick={() => setSubMenu(4)}>
                    Tutor
                </div>
            </div>


            <div>
            {submenu === 1 && 
                levelMoves.map((elem) => {
                    return (            
                        <MoveCard 
                            key={elem.move.url.match(/\b(\d+)/g)} {...elem}
                            moveName={elem.move && elem.move.name}
                            moveId={elem.move && elem.move.url.match(/\b(\d+)/g)}
                            level={elem.version_group_details && elem.version_group_details[0].level_learned_at}   
                            learn="level"
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
                            key={elem.move && elem.move.url.match(/\b(\d+)/g)}{...elem}
                            moveName={elem.move && elem.move.name}
                            moveId={elem.move && elem.move.url.match(/\b(\d+)/g)}   
                            level={elem.version_group_details && elem.version_group_details[0].level_learned_at}                               
                            learn="machine"
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
                            key={elem.move && elem.move.url.match(/\b(\d+)/g)}{...elem}
                            moveName={elem.move && elem.move.name}
                            moveId={elem.move && elem.move.url.match(/\b(\d+)/g)}
                            level={elem.version_group_details && elem.version_group_details[0].level_learned_at}   
                            learn="egg"
                        />
                    )
                    }
                )
            }
            </div>

            <div>
            {submenu === 4 && 
                tutorMoves.map((elem) => {
                    return (            
                        <MoveCard 
                            key={elem.move && elem.move.url.match(/\b(\d+)/g)}{...elem}
                            moveName={elem.move && elem.move.name}
                            moveId={elem.move && elem.move.url.match(/\b(\d+)/g)}
                            level={elem.version_group_details && elem.version_group_details[0].level_learned_at} 
                            learn="tutor"  
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