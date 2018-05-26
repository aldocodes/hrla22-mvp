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

let sentence = [ { text: 'they are happy to see me doing well' },
{ text: 'Melissa came in looking happy and excited' },
{ text: 'we\'re just happy that he\'s still alive' } ];
// app.use('/api', router);

app.post('/dict', (req, res) => {
  grabDefinition(req.body.word, function(err, data) {
    if (err) {
      return res.send(err);
    }

    // console.log(data)
    const returnedDefinition = JSON.parse(data)
    // console.log(returnedDefinition.results[0].lexicalEntries[0].entries[0].senses[0].examples)
    // res.send(returnedDefinition.results[0].lexicalEntries[0].entries[0].senses[0].examples)
    sentence = returnedDefinition.results[0].lexicalEntries[0].entries[0].senses[0].examples
    console.log(sentence)
  })
});

app.get('/dict', (req, res) => {
  console.log('making a get request')
  return res.send(sentence)
})

app.listen(PORT, () => console.log('listening port', PORT));