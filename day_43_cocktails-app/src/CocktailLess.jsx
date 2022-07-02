import { CocktailMore } from "./CocktailMore";
import { useState } from "react";

export function CocktailLess({ cocktail }) {
    console.log(cocktail);
    const [isActive, setIsActive] = useState(true);
    // const [ingridients, setIngredients] = useState('');

    // let list = ""

    // for (let i = 1; i <= 15; i++) {
    //     // console.log(cocktail['strIngredient' + i])
    //     const ing = cocktail['strIngredient' + i]
    //     if (ing != null) {
    //         list += ing + ", "
    //     }
    // }
    // setIngredients(list.slice(0, -2));
    // console.log(ingridients);


    const handleClick = () => {
        setIsActive(current => !current);
    }

    return (
        <div className='cocktail'>
            <h2>{cocktail.strDrink}</h2>
            <button onClick={handleClick}>MORE INFO</button>
            <div className="cocktail--more" style={{
                display: isActive ? 'none' : 'block',
            }} >
                <br />
                <img src={cocktail.strDrinkThumb} style={{ height: 200 }} />
                <p><strong>{cocktail.strAlcoholic}. </strong> Category: {cocktail.strCategory} </p>
                <p className='cocktail__instruction'><i>{cocktail.strInstructions}</i></p>
                {/* <p><strong>Ingredients: </strong></p> */}
                {/* <p> {ingridients} </p> */}
            </div>

        </div>
    )
}