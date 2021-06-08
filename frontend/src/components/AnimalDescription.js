import React from 'react'

function AnimalDescription(props) {

    return(
        <div>
            <br></br>
            <p>Name:{props.animal.name}</p> 
            <p>Type: {props.animal.type}</p> 
            <p>Sex: {props.animal.sex}</p>
            <p>Shelter: {props.animal.shelter_name}</p>
            <a href={props.animal.adoption_url}>View Pet</a>
        </div>
    );
}

export default AnimalDescription;