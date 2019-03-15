import { writePageToQuery } from '../src/hash-query.js';
const previousButtonNode = document.getElementById('previous-button');
const nextButtonNode = document.getElementById('next-button');
const currentPageNode = document.getElementById('current-page');
const totalPageNode = document.getElementById('total-pages');

export function updatePaging(page, totalResults) {
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
    window.location.hash = newUrl;
});

