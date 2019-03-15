import makeSearchUrl from '../src/make-search-url.js';

const test = QUnit.test;

QUnit.module('make search url test');

test('test name', assert => {
//arrange
    const queryOptions = {
        searchTerm: 'bitcoin',
        page: 4
    };

//act
    
    const expected = 'https://newsapi.org/v2/everything?apiKey=fe8feee93ea24618b1e7e7e1a98661e6&q=bitcoin&page=4&size=20';
    const result = makeSearchUrl(queryOptions);

//assert
    assert.equal(result, expected);
});

test('return empty string when no search prompted', assert => {
//arrange
    const queryOptions = {
        searchTerm: '',
        page: 1
    };

    const expected = '';
//act
    const result = makeSearchUrl(queryOptions);
//assert
    assert.equal(result, expected);
});