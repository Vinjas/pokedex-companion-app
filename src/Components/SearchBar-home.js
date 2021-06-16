import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

const SearchBar = ({input:keyword,onChange:setKeyword}) => {
    
    useEffect(() => {
        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                history.push({
                    pathname: "/search",
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
        return history.push({
            pathname: "/search",
            state: keyword,
        })
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
                placeholder={`Search Pokemon...`}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <button type="submit">submit</button>
        </form>
    );
}

export default SearchBar