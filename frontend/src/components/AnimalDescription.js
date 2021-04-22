import React from 'react'

function AnimalDescription(props) {
    return(
        <div>
            <p>{props.name}</p> 
            <p>{props.type}</p> 
            <p>{props.sex}</p>
            <p>{props.shelter_name}</p>
            <p>{props.adoption_url}</p>
        </div>
    );
}

export default AnimalDescription;