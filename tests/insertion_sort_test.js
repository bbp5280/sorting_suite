const chai = require('chai');
const insertionSort = require('../scripts/insertion_sort.js')
const assert = chai.assert;

describe('insertionSort', function() {

  it('insertionSort should be a function', () => {
    assert.isFunction(insertionSort);
  });

  it('should sort an array of 2 numbers', () => {

    assert.deepEqual(insertionSort([5, 2]), [2, 5]);
  });

  it('should sort an array of 5 numbers', () => {

    assert.deepEqual(insertionSort([5, 2, 4, 23, 9]), [2, 4, 5, 9, 23]);
  });

  it('should sort an array of letters', ()=> {

    assert.deepEqual(insertionSort(['t', 'o', 'a', 'e', 'h']), ['a', 'e', 'h', 'o', 't']);
  });

  it('should sort an array of 100 numbers', ()=> {
    let array = [];

    for (var i = 0; i < 100; i++) {
      array.push(Math.floor(Math.random() * (100 - 1) + 1));
    }

    assert.deepEqual(insertionSort(array), array.sort((a, b) => a - b));
  });

  it('should sort an array of 10,000 numbers', ()=> {
    let array = [];

    for (var i = 0; i < 10000; i++) {
      array.push(Math.floor(Math.random() * (1000 - 1) + 1));
    }

    assert.deepEqual(insertionSort(array), array.sort((a, b) => a - b));
  });

});
