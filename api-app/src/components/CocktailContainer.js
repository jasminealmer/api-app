import { useEffect, useState } from 'react';
import SearchArea from "./SearchArea";
import ListArea from "./ListArea";
import "./CocktailContainer.css"

function CocktailContainer({cocktailData}) {

    return (
        <div className="Container">
            <h2>container</h2>
            <SearchArea cocktailData={cocktailData}/>
            <ListArea cocktailData={cocktailData}/>
        </div>

    )
}


export default CocktailContainer;