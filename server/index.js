const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const baseApiUrl = 'https://api.mymemory.translated.net/get';


app.get('/get', async (req, res) => {
  try {
    const word = req.query.word;
    const langpair = req.query.langpair;
    console.log('maki api request')
    const url = `${baseApiUrl}?q=${word}&langpair=${langpair}`;
    console.log(url);
    // const url2 = 'https://api.mymemory.translated.net/get?q=Hello%20World!&langpair=en|it';
    await axios.get(url)
      .then(function (response) {
        console.log(response);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(response.data.responseData));
      })
      .catch(function (error) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify( error ));
      })
  } catch(error) {
    console.error(error.message)
    res.status(500).send('Server error', error)
  }
});

app.get('/api', async (req,res) => {
  res.send('ok alles')
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);