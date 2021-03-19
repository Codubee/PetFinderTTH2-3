// This is where the explanation component will be created
import React from 'react';
import { Jumbotron } from 'reactstrap';

function Explanation() {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-4">Pet Finder</h1>
        <p className="lead">A mobile app that matches potential pet owners to shelter animals in need of a home.</p>
        <hr className="my-4" />
        <p>
          This project was created during the Spring 2021 session of Codubee by the T/TH 2-3 group. The app hopes to help shelter animals 
          connect with potential owners by letting users swipe left/right based on their preferences. 
        </p>
      </Jumbotron>
    </div>
  );
};

export default Explanation;