import React from 'react'
import axios from 'axios'
import { Container,Collapse,Button } from 'reactstrap'
import DisplayAnimal from '../components/DisplayAnimal'
import AnimalDescription from '../components/AnimalDescription'
import '../styles/Match.css'
import DisplayMatches from '../components/DisplayMatches.js';

class Match extends React.Component{
    constructor(props) {
        super(props)
        this.state = { isOpen: false, data:{}}
        this.setIsOpen = this.setIsOpen.bind(this)
    }

    componentDidMount(){
        axios.get('/getAnimalDescription')
        .then((response) =>{
            this.setState({
                data:response.data
            })
        })
    }

    setIsOpen() {
        var open = !this.state.isOpen;
        this.setState({ isOpen: open })
    }

    render(){
    return(
        <Container className="text-center pt-md">
            <DisplayAnimal image={this.state.data.image}/>
            <AnimalDescription animal={this.state.data} />
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