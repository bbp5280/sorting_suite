const sort = require('../scripts/merge_sort.js')
const chai = require('chai');
const assert = chai.assert;

describe('sort', function() {

  it('sort should be a function', () => {
    assert.isFunction(sort);
  });

  it('should sort an array of 2 numbers', () => {

    assert.deepEqual(sort([5, 2]), [2, 5]);
  });

  it('should sort an array of 5 numbers', () => {

    assert.deepEqual(sort([5, 2, 4, 23, 9]), [2, 4, 5, 9, 23]);
  });

  it('should sort an array of letters', ()=> {

    assert.deepEqual(sort(['t', 'o', 'a', 'e', 'h']), ['a', 'e', 'h', 'o', 't']);
  });

  it('should sort an array of 100 numbers', ()=> {
    let array = [];

    for (var i = 0; i < 100; i++) {
      array.push(Math.floor(Math.random() * (100 - 1) + 1));
    }

    assert.deepEqual(sort(array), array.sort((a, b) => a - b));
  });

  it('should sort an array of 10,000 numbers', ()=> {
    let array = [];

    for (var i = 0; i < 10000; i++) {
      array.push(Math.floor(Math.random() * (1000 - 1) + 1));
    }

    assert.deepEqual(sort(array), array.sort((a, b) => a - b));
  });

  it('should sort an array of 100,000 numbers', ()=> {
    let array = [];

    for (var i = 0; i < 100000; i++) {
      array.push(Math.floor(Math.random() * (10000 - 1) + 1));
    }

    assert.deepEqual(sort(array), array.sort((a, b) => a - b));
  });

});
