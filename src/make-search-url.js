export default function makeSearchUrl(queryOptions){
    const SEARCH_NEWS_URL = 'https://newsapi.org/v2/everything?';
    const API_KEY = 'fe8feee93ea24618b1e7e7e1a98661e6';
    
    if(!queryOptions.searchTerm){
        return '';
    }

    const url = new URL(SEARCH_NEWS_URL);
    url.searchParams.set('apiKey', API_KEY);
    url.searchParams.set('q', queryOptions.searchTerm);
    url.searchParams.set('page', queryOptions.page);
    url.searchParams.set('size', 20);

    return url.toString();
}