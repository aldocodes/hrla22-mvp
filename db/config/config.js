const mongoose = require('mongoose');
const URI = 'mongodb://mvp:mvp@ds235840.mlab.com:35840/mvpdictionary';

const connection = mongoose.connect(URI, {}).then(()=>{
  console.log('connected successfuly')
});

module.exports.connection = connection;