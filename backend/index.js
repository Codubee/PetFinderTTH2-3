const express = require('express')
const app = express()
const axios = require('axios');
app.use(express.json());


/* Function that will return a user's matches */
app.get('/getMatches', function (req, res) {

    //log query parameters
    let id = req.query.id; 

    //use axios to call /animal/getMatches
    axios.get('https://codubee-projects-api.herokuapp.com/animal/getMatches?id='+id)
    .then(function (response) {
        // handle success and send back a 200 response with the data
        console.log(response.data);
        res.status(200).json(response.data);
    })
    //catch errors 
    .catch(function (error) {
        console.log(error)
        res.status(400).json({error:"[ERROR] Could not retrieve matches"});
    })
})

app.listen(8080, () => console.log('Listening at locahost:8080'))
