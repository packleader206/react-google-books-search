

import React from 'react';
import './style.css';

function Jumbotron(props) {
  return (
    <div className="container mt-4 jumbocontainer">
      <div className="jumbotron text-center text-white jumbostyle">
        <h1 className="display-4 title">{props.title}</h1>
        <p className="instructions">{props.instructions}</p>
      </div>
    </div>
  )
};

export default Jumbotron;