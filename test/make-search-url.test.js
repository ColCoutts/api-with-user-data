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
    
    const expected = 'https://newsapi.org/v2/everything?apiKey=10be6d71ce6743c181958397919787bb&q=bitcoin&page=4&size=20';
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