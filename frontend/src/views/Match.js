import React from 'react'
import { Container,Collapse,Button } from 'reactstrap'
import DisplayAnimal from '../components/DisplayAnimal'
import AnimalDescription from '../components/AnimalDescription'
import '../styles/Match.css'
import DisplayMatches from '../components/DisplayMatches.js';

class Match extends React.Component{
    constructor(props) {
        super(props)
        this.state = { isOpen: false }
        this.setIsOpen = this.setIsOpen.bind(this)
    }

    setIsOpen() {
        var open = !this.state.isOpen;
        this.setState({ isOpen: open })
    }

    render(){
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
                <Button color="info" className="collapse-button" onClick={this.setIsOpen} >Matches</Button>
                <Collapse isOpen={this.state.isOpen}>
                    <DisplayMatches/>
                </Collapse>
            </div>
        </Container>
    )
}
}

export default Match;