// const { Word } = require('../../db/models/models');

// const wordCtrl = {
//   get: function (req, res) {
//     Word.find ({}, function(err, data) {
//       if (err) {
//         console.log('error in GET /api/word');
//         res.status(404);
//       } else {
//         console.log('GET / api/word successful');
//         res.status(200).send(data);
//       }
//     })
//   }, 
//   post: function(req, res) {
//     const newWord = new Word(req.body);
//     newWord.save(err => {
//       if (err) {
//         console.log('Error POST /api/word');
//       } else {
//         console.log('POST /api/word successful')
//         res.status(201).send(newWord);
//       }
//     });
//   }
// };

// module.exports.wordCtrl = wordCtrl;
