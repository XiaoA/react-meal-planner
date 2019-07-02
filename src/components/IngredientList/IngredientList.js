import React from 'react';
import './IngredientList.css';

const IngredientList = ({ingredients}) => {

  const foodItems = ingredients.map((ingredient, index) =>
                                    <li key={index}>{ingredient}</li>
                                   );
  return (
    <div>
      <article className="pa3 pa5-ns">
        <ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
          <li className="ph3 pv3 bb b--light-silver">{foodItems}</li>
        </ul>
      </article>
    </div>
  );
}

export default IngredientList;

//https://life-in-the-lofthouse.com/wp-content/uploads/2017/08/Sweet-Pork-Nachos.jpg

