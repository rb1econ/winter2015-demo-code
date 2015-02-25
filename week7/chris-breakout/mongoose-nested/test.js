var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose-nested');

var wordSchema = mongoose.Schema({
  word: String
});
var Word = mongoose.model('Word', wordSchema);


var userSchema = mongoose.Schema({
  words: [Word.schema]
});
var User = mongoose.model('User', userSchema);

var apple = new Word({word: 'apple'});
var user = new User({});

user.words.push(apple);

console.log(user);
