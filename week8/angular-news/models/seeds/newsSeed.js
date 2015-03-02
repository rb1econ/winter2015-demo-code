var News = require('../news.js');

News.find({}, function(err, results){
  if(results.length === 0){

    var item1 = new News({
      title: 'Cat breaks internet',
      url: 'http://google.com',
      author: 'Chris',
      votes: 0,
      tags: ['cat', 'internet'],
      date: new Date(),
      content: 'This cat is so funny, lol!',
      imageUrl: 'http://static.fjcdn.com/large/pictures/27/f1/27f1c3_4705638.jpg'
    });
    item1.save();

    var item2 = new News({
      title: 'Dingo Eats Baby!',
      author: 'Mariel',
      votes: 0,
      tags: ['dingo', 'baby'],
      date: new Date(),
      content: 'Yum! Check it out!',
      imageUrl: 'http://i.imgur.com/WcB5H.png'
    });
    item2.save();
  }
});
