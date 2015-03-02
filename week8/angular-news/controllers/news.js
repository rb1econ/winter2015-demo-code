var News = require('../models/news.js');

var newsController = {
  getAll: function(req, res){
    // Go to DB and find all news items
    News.find({}, function(err, results){
      // Send the entire array of results
      // to the client as JSON
      res.send(results);
    });
  },

  createNew: function(req, res){
    var newNews = new News(req.body);
    newNews.save(function(err, result){
      res.send(result);
    });
  }
};

module.exports = newsController;
