import React from 'react'
import { Container } from 'reactstrap'
import DisplayAnimal from '../components/DisplayAnimal'
import AnimalDescription from '../components/AnimalDescription'
import '../styles/Match.css'

function Match(){
    return(
        <Container className="text-center pt-md">
            <DisplayAnimal/>
            <AnimalDescription/>
            <button className="YesButton">
                Yes
            </button>
            <button className="NoButton">
                No
            </button>
        </Container>
    )
}

export default Match;