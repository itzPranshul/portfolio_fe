import React from 'react';
import './projects.css'


const Portfolio = () => {
  return (<>
      <h1 className='headings'>My Projects</h1>
      <ul>
        <li className='headers'><b>Ingredientify : </b><i>my personal project in healthtech in which users can scan the packeged food and get insights for the healthiness of that food</i></li>
        <li className='headers'><b>Ecommerce : </b><i>A back-end project with a authentication systum using JWT and users can add, remove products in the cart</i></li>
        <li className='headers'>yet to come</li>
        <li className='headers'>yet to come</li>
        <li className='headers'>yet to come</li>
      </ul>
      
        </>
  );
};

export default Portfolio;
