import "./IngredientList.css";
import React from 'react';

function IngredientList({ingredients}){
    return (
        <>
        <h2>Ingredients</h2>
        <ul>
            {ingredients.map((item, index) => {
                return <li key={index} className={ item.prepared ? "prepared" : ""}>
                    {item.name}
                </li>
            })}
        </ul>
        </>
    )
}

export default IngredientList;