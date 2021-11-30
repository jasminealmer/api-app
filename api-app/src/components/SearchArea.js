import { useEffect, useState } from 'react';
import CocktailCard from './CocktailCard';
import "./SearchArea.css"

function SearchArea({ cocktailData }) {

    const [choice, setChoice] = useState("")

    function handleChoice(choice){
        const found = cocktailData.drinks.find(drink => drink.strDrink == choice);
        return <CocktailCard image = {found.image} name={found.strDrink}/>
    }
    

    return (
        <div className="SearchArea">
            <h2>search area</h2>
            <form onSubmit={handleChoice}>
                <select name="dropdown" onChange={(e) => setChoice(e.target.value)}>
                    <option value="Margarita">Margarita</option>
                    <option value="Blue Margarita">Blue Margarita</option>
                    <option value="Tommy's Margarita">Tommy's Margarita</option>
                    <option value="Whitecap Margarita">Whitecap Margarita</option>
                    <option value="Strawberry Margarita">Strawberry Margarita</option>
                    <option value="Smashed Watermelon Margarita">Smashed Watermelon Margarita</option>
                    <input type="submit" value="Visa" />
                </select>
            </form>
        </div>

    )
}


export default SearchArea;