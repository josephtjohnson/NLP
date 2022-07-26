//setup for api
const dotenv = require('dotenv');
dotenv.config({path: 'C:\\Users\\Johns\\Desktop\\NLP\\evaluate-news-nlp\\src\\.env'
});

const apiKey = process.env.API_KEY;
const endpoint = process.env.API_ENDPOINT;
console.log('Your api key is ' + apiKey);

const path = require('path');
const express = require('express');
const fetch = require('node-fetch');

//mockAPI for testing
//const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

console.log(__dirname)

//GET response for homepage
app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

//designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

/*
mock api for testing
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
*/

/*
async function apiCall(input) {
    //if (Object.keys(req.body).length === 0) res.status(404).send('Please use a valid URL');
    const site = endpoint + '?key=' + apiKey + '&of=json&lang=en&url=' + input;
    const data = await fetch(site);
    try {
        const api_data = await data.json();
        return api_data;
    }
    catch (e) {
        console.log('Error', e);
    }
}
*/

app.post('/call', async (req, res) => {
    const site = endpoint + '?key=' + apiKey + '&of=json&lang=en&url=' + req.body.url;
    const data = await fetch(site);
    try {
        const api_data = await data.json();
        //console.log(api_data);
        const analysisData = {
            Agreement: api_data.agreement,
            Subjectivity: api_data.subjectivity,
            Confidence: api_data.confidence,
            Irony: api_data.irony
        }
        //console.log(analysisData);
        res.send(analysisData);
    }
    catch (e) {
        console.log('Error', e);
    }
});

//async function callBack (req, res) {
    //res.send(await apiCall(req.body.url));
