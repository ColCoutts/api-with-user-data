export default function makeSearchUrl(queryOptions){
    const SEARCH_NEWS_URL = 'https://newsapi.org/v2/everything?';
    const API_KEY = '10be6d71ce6743c181958397919787bb';
    
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