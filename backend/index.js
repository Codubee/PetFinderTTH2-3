const express = require('express')
const app = express()
const axios = require('axios');
var cors = require('cors');
const { response } = require('express');
app.use(express.json());
app.use(cors())

/* function which receives the animal data in the body or postman and adds it to a specific user */
app.post('/addAnimal', function (req, res) {
    axios.post('https://codubee-projects-api.herokuapp.com/animal/addAnimal', req.body) // use axios to call /addAnimal
        .then(function (response) {
            // handle success and send back a 200 response with the data
            console.log(response.data);
            res.status(200).json(response.data);
        })
        .catch(function (error) {
            // handle the error and send back the error message that was received from the API call
            console.log(error)
            res.status(400).json({ error: "An error occurred" });
        })
})

//this function will return the animal descriptions
app.get('/getAnimalDescription', function (req, res) {

    axios.get('https://codubee-projects-api.herokuapp.com/animal/getAnimalDescription')
    .then(function (response) {
        console.log(response.data);
        res.status(200).json(response.data);
    })
    //handle errors 
    .catch(function (error) {
        console.log(error)
        res.status(400).json({error:"An error occurred"});
    })
})

//This function will return the weather
app.get('/getWeather', function (req, res){
    axios.get('https://codubee-projects-api.herokuapp.com/translate/getWeather')
    .then(function (response){
        console.log(response.data);
        res.status(200).json(response.data);
    })
    .catch(function(error){
        console.log(error);
        res.status(400).json({error: "An error occured"});
    })
})

// this function will return the weather description
app.get('/getWeatherDescription', function(req, res) {
    axios.get('https://codubee-projects-api.herokuapp.com/translate/getWeatherDescription')
    .then(function(response) {
        console.log(response.data);
        res.status(200).json(response.data)
    })
    .catch(function(error) {
        console.log(error)
        res.status(400).json({error: "An error occurred."});
    }) 
})

app.listen(process.env.PORT || 8080, () => console.log('Listening at locahost:8080'))
