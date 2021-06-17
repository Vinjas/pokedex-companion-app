import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

import { getItem } from '../API/get-item';

const ItemCard = (props) => {
    const location = useLocation()

    const [item, setItem] = useState([]);

    useEffect(() => {
        getItem(props.id)
        .then((data) => {
            setItem(data)
        });
    }, [location.pathname, props.id]);

    const { name } = item;

    return (
        <div className="itemCard">
            <div className="itemCard__content">
                <div className="itemCard__header">
                    <div className="itemCard__name">
                        {name}
                    </div>
                    <div className="itemCard__category">
                        {item.category && item.category.name}
                    </div>
                </div>

                <div className="itemCard__description">
                    {item.effect_entries
                    && item.effect_entries[0] 
                    && item.effect_entries[0].short_effect}
                </div>


            </div>

            <div className="itemCard__sprite">
                <img
                    src={`${item.sprites && item.sprites.default}`}
                    width="55px"
                    alt="item"
                />
            </div>
        </div>
    )
}

export default ItemCard