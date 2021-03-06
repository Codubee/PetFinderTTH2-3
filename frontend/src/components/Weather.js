/*
    This example uses the componentDidMount lifecycle method to trigger
    an API call. It also uses the constructor and render lifecycle methods.
    The order that these lifecycle methods get called is 
    1. constructor
    2. render
    3. componentDidMount
Import Axios to make the http request. Make sure to install it using NPM
*/
import React from 'react';
import axios from 'axios'

// Extend React.Component
class Api extends React.Component {

    // A constructor is a good place to setup inital state object
    // It is the first called method during a components lifecycle
    constructor(props) {
        super(props);
        // Creating a state object with empty weather
        this.state = { weather: '' };
    }

    // Using the componentDidMount lifecycle method to trigger the API call.
    // This method gets called third after the render method.
    componentDidMount() {

        // Sending a GET http request
        axios.get("/getWeather")
        
        // After the request is complete we get a response. This method handles the response.
            .then((response) => {

                // Print the data to the console located in your web browser
                console.log(response.data);

                // Change the value of weather in your state object
                this.setState({
                    
                    // Response.data has the data that came back from the GET http request
                    weather: response.data.weather
                })
            })
    }

    // Render shows the user the HTML
    // It gets called second after the constructor during a components lifecycle
    render() {

        return (
            // Display the weather to the user that comes back from the API request
            <div>
                <h3>Weather: {this.state.weather}</h3>
            </div>

        )
    }
}

// Export the component so that you can use it in other places
export default Api;