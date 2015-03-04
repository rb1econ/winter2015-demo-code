var assert = require("assert");
var nextPrime = require('../controllers/api').nextPrime;
var Beer = require('../models/beer.js');
var indexController = require('../controllers/index.js');
var apiController = require('../controllers/api.js');
var request = require('supertest')
  , express = require('express');
// var app = require('')
process.env.NODE_ENV = 'test';

var app = require('../app');
console.log('ENV:::: ', app.settings.env);

var mongoose = require('mongoose');


describe('GET /', function(){
  before(function(done) {

    var budweiser = new Beer({
      name: 'Budweiser',
      ABV: 5.5,
      type: 'pilsner or lager who knows',
      brewer: 'Inbev'
    });
    budweiser.save();
    done();
  });

  after(function(done) {
    Beer.remove({});

    mongoose.disconnect();

    done();
  });

  it('respond with 200', function(done){
    request(app)
      .get('/')
      .expect(200, done)  
      .expect().to.include('Budweiser')
      .expect('content-type', "text/html; charset=utf-8");
  });
});