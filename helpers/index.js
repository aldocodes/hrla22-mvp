const mongoose = require('mongoose');
const request = require('request');
const token = '51e5e035d8ef88467718a47ff1371778';

const grabDefinition = function(type, callback) {
  const options = {
    url: `https://od-api.oxforddictionaries.com/api/v1/entries/en/${type}`,
    headers: {
      'User-Agent': 'request',
      'app_id': '9ceeb8b0',
      'app_key': token
      // Authorization: `token ${token}`,
    }
  };

  request(options, function(error, response, body) {
    if (error) {
      return callback(error, null)
    }

    callback(null, body);
  });
}

module.exports.grabDefinition = grabDefinition