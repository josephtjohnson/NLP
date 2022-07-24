//setup for api
const dotenv = require('dotenv');
dotenv.config({path: 'C:\\Users\\Johns\\Desktop\\NLP\\evaluate-news-nlp\\src\\.env'
});
const apiKey = process.env.API_KEY;
const endpoint = process.env.API_ENDPOINT;
console.log(`Your API key is ${process.env.API_KEY}`);

const path = require('path')
const express = require('express')

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

/*mock api for testing
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
*/

const apiCall = async(req, res) => {
    if (Object.keys(req.body).length === 0) res.status(404).send('Please use a valid URL');
    console.log(req.body);
    const response = await fetch ('${endpoint}key=${apiKey}url=${req.body.text}&lang=en');
    try {
        const data = await response.json();
        console.log(data);
        res.send(data);
    }
    catch (e) {
        console.log('Error', e);
    }
}

app.post('/call', apiCall);
