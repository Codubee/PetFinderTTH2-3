import React,{useState} from 'react'
import { Container,Collapse,Button } from 'reactstrap'
import DisplayAnimal from '../components/DisplayAnimal'
import AnimalDescription from '../components/AnimalDescription'
import '../styles/Match.css'
import DisplayMatches from '../components/DisplayMatches.js';

function Match(){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  
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
            <div>
                <Button color="info" className="collapse-button" onClick={toggle} >Matches</Button>
                <Collapse isOpen={isOpen}>
                    <DisplayMatches/>
                </Collapse>
            </div>
        </Container>
    )
}

export default Match;