var assert = require("assert");
var nextPrime = require('../routes/index').nextPrime;

describe('testing next Prime', function() {
  it('nextPrime should return the next prime number', function() {
    assert.equal(17, nextPrime(13));
  });

  it('zero and one are not prime numbers', function() {
    assert.equal(2, nextPrime(0));
    assert.equal(2, nextPrime(1));
  });
});