var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'A slightly different title' });
});
router.post('/post-data', function(req, res) {
    console.log('request body: ', req.body)
    res.send({title:req.body.title,author:req.body.author})
})

module.exports = router;
