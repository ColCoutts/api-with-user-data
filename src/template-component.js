import { auth, favoritesByUserRef } from './firebase.js';
const newsList = document.getElementById('news-list');

export default function makeHtmlTemplate(exampleObject){
    clearRows();
    
    const newsData = exampleObject.articles;
    // bag of dom
    newsData.forEach(newsData => {
        const title = newsData.title;
        const author = newsData.author;
        const description = newsData.description;
        const url = newsData.url;
        const img = newsData.urlToImage;
        const published = newsData.publishedAt;
    
        const html = /*html*/`
            <li>
                <span class="favorite">☆</span>
                <h2>${title}</h2>
                <h3>Author: ${author}</h3>
                <h4>Published: ${published}</h4>
                <img src="${img}">
                <p>${description}</p>
                <a href="${url}">Read More</a>
            </li>
            `;
            
        const template = document.createElement('template');
        template.innerHTML = html;
        const dom = template.content;
        newsList.appendChild(dom);
    });
}
//note the userFavoritesArticleRef (line 47 down if render has issues)
export function updateNews(articles) {
    clearRows();

    articles.forEach(article => {
        const dom = makeHtmlTemplate(article);
        const favoriteStar = dom.querySelector('.favorite');

        favoriteStar.addEventListener('click', () => {
            const userId = auth.currentUser.uid;
            const userFavoritesRef = favoritesByUserRef.child(userId);
            const userFavoriteArticleRef = userFavoritesRef.child(article.id);
            userFavoriteArticleRef.set({
                id: article.id,
                title: article.title,
                author: article.author,
                description: article.description,
                url: article.url,
                urlToImage: article.urlToImage,
                publishedAt: article.publishedAt

            });
        });

        newsList.appendChild(dom);
    });
}


function clearRows(){
    if(newsList.firstChild){
        newsList.firstChild.remove();
    }
}