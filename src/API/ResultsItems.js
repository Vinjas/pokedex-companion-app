import React from 'react';
import LazyLoad from "react-lazyload"

import ItemCard from "../Components/ItemCard"

const ResultsList = ({resultList=[]}) => {
  
return (
    <div className="cards">
        {resultList.map((elem) => {
            if (elem) { 
                return (
                    <LazyLoad 
                    key={elem.name} {...elem} 
                    style={{display:"flex", width:"100%"}}>
                        <ItemCard 
                        key={elem.name} {...elem}
                        id={elem.name}/>
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