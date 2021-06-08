import React from 'react'
import { Container, Collapse, Button } from 'reactstrap'
import DisplayAnimal from '../components/DisplayAnimal'
import AnimalDescription from '../components/AnimalDescription'
import '../styles/Match.css'
import DisplayMatches from '../components/DisplayMatches.js';
import axios from 'axios'

class Match extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isOpen: false, data: {}, id: 0,matches:[] }
        this.setIsOpen = this.setIsOpen.bind(this)
        this.addAnimal = this.addAnimal.bind(this);
        this.getDescription = this.getDescription.bind(this)
        this.getMatches = this.getMatches.bind(this)
    }

    componentDidMount() {
        this.getDescription();
        this.setState({ id: Math.floor((Math.random() * 1000) + 1) })
    }

    addAnimal() {
        var body = {
            "id": this.state.id,
            "record": this.state.data
        }

        axios.post('/addAnimal', body)
            .then((response) => {
                console.log(response.data);
                this.getDescription();
            });
    }

    getDescription() {
        axios.get('/getAnimalDescription')
            .then((response) => {
                this.setState({
                    data: response.data
                })
            })
    }

    getMatches() {
        axios.get('/getMatches?id='+this.state.id)
            .then((response) => {
                this.setState({
                    matches: response.data
                })
            })
    }

    setIsOpen() {
        var open = !this.state.isOpen;
        this.setState({ isOpen: open })
        this.getMatches()
    }

    render() {
        return (
            <Container className="text-center pt-md">

                <DisplayAnimal image={this.state.data.image} />
                <AnimalDescription animal={this.state.data} />
                <button onClick={this.addAnimal} className="YesButton">

                    Yes
            </button>
                <button className="NoButton" onClick={this.getDescription}>
                    No
                </button>
                <div>
                    <Button color="info" className="collapse-button" onClick={this.setIsOpen} >Matches</Button>
                    <Collapse isOpen={this.state.isOpen}>
                        <DisplayMatches matches={this.state.matches}/>
                    </Collapse>
                </div>
            </Container>
        )
    }
}

export default Match;