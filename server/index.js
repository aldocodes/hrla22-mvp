const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('../db/config/config');

const app = express();
const PORT = 3000;
const { router } = require('./router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, '../static')));

app.use('/api', router);

app.listen(PORT, () => console.log('listening port', PORT));