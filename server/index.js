const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');
require('../db/config/config');

const app = express();
const PORT = 3000;
// const { router } = require('./router');
const { grabDefinition } = require('../helpers')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, '../static')));

// app.use('/api', router);

app.post('/dict', (req, res) => {
  grabDefinition(req.body.word, function(err, data) {
    if (err) {
      return res.send(err);
    }

    // console.log(data)
    const returnedDefinition = JSON.parse(data)
    console.log(returnedDefinition.results[0].lexicalEntries[0])

  })
});

app.listen(PORT, () => console.log('listening port', PORT));