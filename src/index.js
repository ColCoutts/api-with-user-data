import makeHtmlTemplate from './template-component.js';
// import testData from '../data/test-data.js';
import updateSearchTerm from '../src/search-component.js';
import { readFromQuery } from '../src/hash-query.js';
import makeSearchUrl from '../src/make-search-url.js';
// console.log(testData);

window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    console.log(queryOptions.searchTerm);
    updateSearchTerm(queryOptions.searchTerm);

    const url = makeSearchUrl(queryOptions);
    
    fetch(url)
        .then(response => response.json())
        .then(newsList => {
            makeHtmlTemplate(newsList);
        });
});

// makeHtmlTemplate(testData);

