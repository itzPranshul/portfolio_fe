import React from 'react';
import './projects.css'


const Portfolio = () => {
  return (<>
      <h1>My Projects</h1>
      <text className='projectclass'><b>Ingredientify : </b><i>A backend project  in which a ingredients of packaged food item stored and a score and rating is determined on the basis on healthiness</i></text>
      <br></br>
      <text className='projectclass'><b>Ecommerce website : </b><i>It has a authentication systum where user can sign up, sign in using JWT, password  encryptes using bcrypt  and multiple functionalities of ecommerce it is deployed on aws ec3 and the data is stored in mongodb atlas </i></text>
        </>
  );
};

export default Portfolio;
