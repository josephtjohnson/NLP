
const app = require('../server/index.js') ;// Link to your server file
const supertest = require('supertest');
//const request = supertest(app);

const dotenv = require('dotenv');
dotenv.config({path: 'C:\\Users\\Johns\\Desktop\\NLP\\evaluate-news-nlp\\src\\.env'
});

const apiKey = process.env.API_KEY;
const endpoint = process.env.API_ENDPOINT;



describe('Post Endpoints', () => {
  it('should fetch a new set of data', async () => {
    const url = 'https://www.studiobinder.com/blog/best-michael-scott-quotes-the-office/#:~:text=%E2%80%9CWould%20I%20rather%20be%20feared,how%20much%20they%20love%20me.%E2%80%9D';
    const site = endpoint + '?key=' + apiKey + '&of=json&lang=en&url=' + url;
    //await request(site)
    supertest(site)
      .post('/call')
      .send({ url: "paris" })
      .expect((response) => {
   assert.ok(response.text.includes(200));
  })
})});
