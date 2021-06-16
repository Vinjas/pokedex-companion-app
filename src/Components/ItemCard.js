import React, { useState, useEffect } from 'react';
import classNames from "classnames"
import LazyLoad from "react-lazyload"
import { NavLink, useLocation } from "react-router-dom";

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
        <div>
            <div>{name}</div>
        </div>
    )
}

export default ItemCard