import { useEffect, useState } from 'react';

function CocktailCard({ name, image }) {


    return (
        <div className="ListArea">
            <div>
                <img src={image} width="100" height="100" />
                {name}
            </div>
        </div>

    )
}


export default CocktailCard;