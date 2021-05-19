import React from 'react'
import { Container,Collapse,Button } from 'reactstrap'
import DisplayAnimal from '../components/DisplayAnimal'
import AnimalDescription from '../components/AnimalDescription'
import '../styles/Match.css'
import DisplayMatches from '../components/DisplayMatches.js';
import axios from 'axios'

class Match extends React.Component{
    constructor(props) {
        super(props)
        this.state = { isOpen: false}
        this.setIsOpen = this.setIsOpen.bind(this)
        this.triggerApi = this.triggerApi.bind(this);
    }
    triggerApi() {
        var body = {
            "id":1,
            "record": {
                "name": "Muffin",
                "type": "Shepherd / Mix",
                "sex": "Male",
                "shelter_name": "Austin Pets Alive",
                "adoption_url": "https://www.austinpetsalive.org/adopt/dogs/apa-a-56615",
                "image": "https://www.austinpetsalive.org/assets/animals/_largeThumb/20190606003943.jpeg"
            }
        }
        axios.post('/addAnimal', body)
             .then((response) => {
                console.log(response.data);
            });
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
            <button onClick={this.triggerApi} className="YesButton">
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