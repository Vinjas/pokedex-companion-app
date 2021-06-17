import React from 'react';
import LazyLoad from "react-lazyload"

import ItemCard from "../Components/ItemCard"

const ResultsList = ({resultList=[]}) => {
  
return (
    <div className="cards">
        {resultList.map((elem) => {
            if (elem) { 
                return (
                    <LazyLoad key={elem.id} {...elem}>
                        <ItemCard 
                        key={elem.id} {...elem}
                        id={elem.id}/>
                    </LazyLoad>
                )
            }
            return <div>No results found</div>
            }
        )}
    </div>
  );
}

export default ResultsList