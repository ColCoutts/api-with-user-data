import { writePageToQuery, writeSearchToQuery, readFromQuery } from '../src/hash-query.js';
const test = QUnit.test;

QUnit.module('new pathing for url');

test('adds search to empty hash', function(assert) {
//arrange
//the bitcoin in this instance is a stand in for what keyword you can search for
//page is being implemented as well for pagination later on
    const queryOptions = {
        searchTerm: 'bitcoin',
        page: 1
    };
//existingQuery needed so function knows what to build the path from in this case an empty string but could
//be populated by previous search params etc.

    const existingQuery = '';
    //act
    const expected = 'searchTerm=bitcoin&page=1';
//queryoptions.searchTerm is using the dot notation for the test suite but in reality we just will need the searchTerm in the function
    const result = writeSearchToQuery(existingQuery, queryOptions.searchTerm);

//assert
    assert.equal(expected, result);
});

test('new page', assert => {
    //arrange
    const queryOptions = {
        searchTerm: 'bitcoin',
        page: 3
    };
    const existingQuery = 'searchTerm=bitcoin&page=1';
    const expected = 'searchTerm=bitcoin&page=3';
    //act
    const result = writePageToQuery(existingQuery, queryOptions.page);

    //assert
    assert.equal(result, expected);
});

test('create a queryOptions objects', assert => {
    //arrange
    const expected = {
        searchTerm: 'robots',
        page: 3
    };
    const existingQuery = 'searchTerm=robots&page=3';
    //act
    const result = readFromQuery(existingQuery);
    //assert

    assert.deepEqual(result, expected);

});
