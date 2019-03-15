import { writePageToQuery } from '../src/hash-query.js';
const previousButtonNode = document.getElementById('previous-button');
const nextButtonNode = document.getElementById('next-button');
const currentPageNode = document.getElementById('current-page');
const totalPageNode = document.getElementById('total-pages');

// let currentPageNumber = 1;

// const PER_PAGE = 20;

// export default function updatePaging(totalResults, callback) {


//     const totalPageCount = Math.ceil(totalResults / PER_PAGE);
//     totalPageNode.textContent = totalPageCount;


//     function updatePaging() {
//         currentPageNode.textContent = currentPageNumber;

//         const pageOptions = {
//             page: currentPageNumber,
//             perPage: totalPageCount
//         };

//         callback(pageOptions);

//         nextButtonNode.disabled = currentPageNumber === totalPageCount;
//         previousButtonNode.disabled = currentPageNumber === 1;

//     }

//     previousButtonNode.addEventListener('click', () => {
//         currentPageNumber--;
//         updateQuery();
//         updatePaging();
//     });

//     nextButtonNode.addEventListener('click', () => {
//         currentPageNumber++;
//         updateQuery();
//         updatePaging();
//     });
// }

// function updateQuery() {
//     const existingQuery = window.location.hash.slice(1);
//     const newQuery = writePageToQuery(existingQuery, currentPageNumber);
//     window.location.hash = newQuery;
// }

export function updatePaging(page, totalResults) {
    console.log(page);
    const currentPage = page;
    const totalPages = Math.ceil(totalResults / 20);
    currentPageNode.textContent = currentPage;
    totalPageNode.textContent = totalPages;
}

const existingQuery = window.location.hash.slice(1);
const searchParams = new URLSearchParams(existingQuery);
let currentPage = searchParams.get('page');
previousButtonNode.disabled = currentPage <= 1;

previousButtonNode.addEventListener('click', () => {
    const totalPages = totalPageNode.textContent;
    const existingQuery = window.location.hash.slice(1);
    const searchParams = new URLSearchParams(existingQuery);
    let currentPage = searchParams.get('page');
    currentPage--;
    previousButtonNode.disabled = currentPage <= 1;
    nextButtonNode.disabled = currentPage >= totalPages;
    const newUrl = writePageToQuery(existingQuery, currentPage);
    console.log(newUrl);
    window.location.hash = newUrl;
});

nextButtonNode.addEventListener('click', () => {
    const totalPages = totalPageNode.textContent;
    const existingQuery = window.location.hash.slice(1);
    const searchParams = new URLSearchParams(existingQuery);
    let currentPage = searchParams.get('page');
    currentPage++;
    previousButtonNode.disabled = currentPage <= 1;
    nextButtonNode.disabled = currentPage >= totalPages;
    const newUrl = writePageToQuery(existingQuery, currentPage);
    console.log(newUrl);
    window.location.hash = newUrl;
});

