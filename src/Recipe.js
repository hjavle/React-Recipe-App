import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,calories,image,ingredients}) => {
    return (
        <div className = {style.recipe}>
            <h1 className= {style.title}>{title}</h1>
            <ol className={style.text}>
                {ingredients.map(ingredient => (
                    <li className={style.text}>{ingredient.text}</li>
                ))}
            </ol>
            <p className={style.calories}>Total Calories : {Math.round(calories)}</p>
            <img className= {style.image} src={image} alt=""/>
        </div>
    );
};
export default Recipe;