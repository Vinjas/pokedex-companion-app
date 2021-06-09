import React from 'react';

const SearchBar = ({input:keyword,onChange:setKeyword}) => {
    return (
        <div className="searchbar">
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
        </div>
    );
}

export default SearchBar