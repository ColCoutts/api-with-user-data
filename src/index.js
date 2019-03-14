import makeHtmlTemplate from './template-component.js';
import updateSearchTerm from '../src/search-component.js';
import { readFromQuery } from '../src/hash-query.js';
import makeSearchUrl from '../src/make-search-url.js';

const buttonsContainer = document.getElementById('paging-buttons-container');
console.log(buttonsContainer);
window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    updateSearchTerm(queryOptions.searchTerm);

    const url = makeSearchUrl(queryOptions);
    console.log(url);    
    if(!url){
        buttonsContainer.classList.add('hidden');
        return;
    } else {
        buttonsContainer.classList.remove('hidden');
    }

    fetch(url)
        .then(response => response.json())
        .then(newsList => {
            makeHtmlTemplate(newsList);
        });
});


