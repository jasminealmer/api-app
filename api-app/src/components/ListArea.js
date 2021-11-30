import { useEffect, useState } from 'react';
import "./ListArea.css"
import CocktailCard from './CocktailCard';

function ListArea({ cocktailData }) {

    const cocktailList = cocktailData.drinks.map(drink => <CocktailCard name = {drink.strDrink} image = {drink.strDrinkThumb}/>);

    return (
        <div className="ListArea">
            <h2>list area</h2>
            <div>
                {cocktailList}
            </div>
        </div>

    )
}


export default ListArea;