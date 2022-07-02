import { useState } from "react";

export function CocktailMore({ cocktail, ingridients }) {
    console.log(cocktail);

    return (
        <div className='cocktail'>
            <img src={cocktail.strDrinkThumb} style={{ height: 200 }} />
            <p><strong>{cocktail.strAlcoholic}. </strong> Category: {cocktail.strCategory} </p>
            <p className='cocktail__instruction'><i>{cocktail.strInstructions}</i></p>
            <p><strong>Ingredients: </strong></p>
            {/* <p> {ingridients} </p> */}
        </div>
    )
}