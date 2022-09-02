const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const axios = require('axios');

const ID_KEY = 'naver-client-id';
const SECRET_KEY = 'naver-client-secret';

app.use(cors());

app.use(bodyParser.json());

app.use('/search', (req, res) => {
  const word = req.query;
  console.log(word)
  axios.get('https://openapi.naver.com/v1/search/movie.json', {
    params: {
        query : word.query,
        display : Number(word.display),
 
    },
    method: 'GET', // *GET, POST, PUT, DELETE 등
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
     
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        "X-Naver-Client-Id": "dImdFIHBYrOEuOCea4gF",
        "X-Naver-Client-Secret" : "gcbkrS5BSg",
        'Access-Control-Allow-Origin': '*'
      }
  }).then(function(response) {
    const items = response.data.items;
    res.send({items:items});
  }).catch(function(error) {
    console.log(error);
  });

});

app.listen(port, () => {
  console.log(`express is running on ${port}`);
})
