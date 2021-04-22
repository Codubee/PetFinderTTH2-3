import React from 'react'

/* this function takes a prop as a parameter which will be the image url */

function DisplayAnimal(props) {
    return <img src={props.image} alt="animal" />;
}

export default DisplayAnimal;