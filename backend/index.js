const express = require('express')
const app = express()
const axios = require('axios');
app.use(express.json());

/* function which receives the animal data in the body or postman and adds it to a specific user */
app.post('/addAnimal', function (req, res) {
    axios.post('https://codubee-projects-api.herokuapp.com/animal/addAnimal') // use axios to call /addAnimal
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

app.listen(8080, () => console.log('Listening at locahost:8080'))
