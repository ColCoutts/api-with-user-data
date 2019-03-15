import { updateNews } from './template-component.js';
import updateSearchTerm from '../src/search-component.js';
import { readFromQuery } from '../src/hash-query.js';
import makeSearchUrl from '../src/make-search-url.js';
import loadHeader from '../src/header-component.js';
// import { auth } from './firebase.js';
import { updatePaging } from '../src/paging-component.js';
// import pageArray from '../src/page-array.js';

const buttonsContainer = document.getElementById('paging-buttons-container');

loadHeader();
updateSearchTerm();

// window.addEventListener('hashchange', loadQuery);

// auth.onAuthStateChanged(() => {
//     loadQuery();
// });

// function loadQuery() {
//     const query = window.location.hash.slice(1);
//     const queryOptions = readFromQuery(query);
//     updateSearchTerm(queryOptions.searchTerm);

//     const url = makeSearchUrl(queryOptions);

//     if(!url){
//         buttonsContainer.classList.add('hidden');
//         return;
//     } else {
//         buttonsContainer.classList.remove('hidden');
//     }

//     fetch(url)
//         .then(response => response.json())
//         .then(newsList => {
//             updateNews(newsList.articles);
//             updatePaging(newsList.totalResults, pagingOptions => {
//                 const pagedNews = pageArray(newsList.articles, pagingOptions);
//                 updateNews(pagedNews);
//             });
    
//         });
// }
window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    const Url = makeSearchUrl(queryOptions);

    if(!Url){
        buttonsContainer.classList.add('hidden');
        return;
    } else {
        buttonsContainer.classList.remove('hidden');
    }
        
    fetch(Url)
        .then(response => response.json())
        .then(newsList => {
            updateNews(newsList.articles);
            updatePaging(queryOptions.page, newsList.totalResults);
        });
});


