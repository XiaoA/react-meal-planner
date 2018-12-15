import React from 'react';
import './IngredientList.css';

const IngredientList = ({ingredients}) => {

  const foodItems = ingredients.map((ingredient, index) =>
                                    <li key={index}>{ingredient}</li>
                                   );
  return (
    <div>
      <ul className='ingredient-list'> {foodItems} </ul>
    </div>
      
  );
}

export default IngredientList;

//https://life-in-the-lofthouse.com/wp-content/uploads/2017/08/Sweet-Pork-Nachos.jpg

