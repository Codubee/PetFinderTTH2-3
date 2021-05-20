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
        this.state = { isOpen: false, name: '', type: '', sex: '', shelter_name: '', adoption_url: '', image: ''}
        this.setIsOpen = this.setIsOpen.bind(this)
    }

    componentDidMount(){
        axios.get('/getAnimalDescription')
        .then((response) =>{
            console.log(response.data);
            this.setState({
                name: response.data.name,
                type: response.data.type,
                sex: response.data.sex,
                shelter_name: response.data.shelter_name,
                adoption_url: response.data.adoption_url,
                image: response.data.image
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
            <DisplayAnimal image={this.state.image}/>
            <AnimalDescription name={this.state.name} type={this.state.type} sex={this.state.sex} shelter_name={this.state.shelter_name} adoption_url={this.state.adoption_url} />
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