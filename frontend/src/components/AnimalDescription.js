import React from 'react'

function AnimalDescription(props) {
    return(
        <div>
            <br></br>
            <p>Name:{props.name}</p> 
            <p>Type: {props.type}</p> 
            <p>Sex: {props.sex}</p>
            <p>Shelter: {props.shelter_name}</p>
            <a href={props.adoption_url}>Link</a>
        </div>
    );
}

export default AnimalDescription;