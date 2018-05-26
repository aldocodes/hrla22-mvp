const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
  title: String,
  content: String
});

const Word = mongoose.model('Word', listSchema);
module.exports.Word = Word;