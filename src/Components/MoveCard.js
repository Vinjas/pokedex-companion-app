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
        
    const { name } = move
    

    return (
        <div>{name}</div>
    )
}


export default MoveCard