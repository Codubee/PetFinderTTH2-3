const express = require('express')
const app = express()
const axios = require('axios');
app.use(express.json());


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

app.listen(8080, () => console.log('Listening at locahost:8080'))
