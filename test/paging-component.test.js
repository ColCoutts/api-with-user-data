import pageArray from '../src/page-array.js';

const test = QUnit.test;

QUnit.module('page through news sources');

const testArray = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven'
];

test('page 1 of 4 per page', assert => {
    //arrange
    const pagingOptions = {
        page: 1,
        perPage: 4
    };
    //act
    const expected = ['one', 'two', 'three', 'four'];
    const result = pageArray(testArray, pagingOptions);


    //assert
    assert.deepEqual(expected, result);
});