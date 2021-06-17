import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router';  


export const SearchBarItem = ({input:keyword,onChange:setKeyword}) => {
    const location = useLocation()


    useEffect(() => {
        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                history.push({
                    pathname: "/searchitem",
                    state: keyword,
                })
            }
        }
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        }
    })

    const onFormSubmit = () => {
        if(location.pathname === "/searchitem") {
            return history.push({
                pathname: "/searchitem2",
                state: keyword,
        })
        } else {
            return history.push({
                pathname: "/searchitem",
                state: keyword,
        })
        }
    }

    
    const history = useHistory();

    return (
        <form 
            className="searchbar"
            onSubmit={onFormSubmit}>
            <img
                alt = "searchicon"
                src = "../svg/search-solid.svg"
                style = {{width:22}}
                className="searchbar__icon"
            />
            <input 
                className="searchbar__bar"
                key="random1"
                value={keyword}
                placeholder={`Search Items...`}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchBarItem