import { auth, favoritesByUserRef } from './firebase.js';
const newsList = document.getElementById('news-list');

// export default function makeHtmlTemplate(exampleObject){
//     clearRows();
//     console.log(exampleObject);
//     const newsData = exampleObject;
//     // bag of dom
//     newsData.forEach(newsData => {
//         const title = newsData.title;
//         const author = newsData.author;
//         const description = newsData.description;
//         const url = newsData.url;
//         const img = newsData.urlToImage;
//         const published = newsData.publishedAt;
    
//         const html = /*html*/`
//             <li>
//                 <span class="favorite-star">☆</span>
//                 <h2>${title}</h2>
//                 <h3>Author: ${author}</h3>
//                 <h4>Published: ${published}</h4>
//                 <img src="${img}">
//                 <p>${description}</p>
//                 <a href="${url}">Read More</a>
//             </li>
//             `;
            
//         const template = document.createElement('template');
//         template.innerHTML = html;
//         const dom = template.content;
//         newsList.appendChild(dom);
//     });
// }

export default function makeHtmlTemplate(exampleObject){
    // clearRows();
    // console.log(exampleObject);
    const title = exampleObject.title;
    // console.log(title);
    const author = exampleObject.author;
    const description = exampleObject.description;
    const url = exampleObject.url;
    const img = exampleObject.urlToImage;
    const published = exampleObject.publishedAt;

    const html = /*html*/`
        <li>
            <span class="favorite-star">☆</span>
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
    return template.content;
    

}

export function updateNews(articles) {
    clearRows();
    
    const articleArray = articles;
    articleArray.forEach(article => {
        const dom = makeHtmlTemplate(article);
        const favoriteStar = dom.querySelector('.favorite-star');
        const userId = auth.currentUser.uid;
        const userFavoritesRef = favoritesByUserRef.child(userId);
        const userFavoriteArticleRef = userFavoritesRef.child(article.publishedAt);
        userFavoriteArticleRef.once('value')
            .then(snapshot => {
                const value = snapshot.val();
                let isFavorite = false;
                if(value) {
                    addFavorite();
                }
                else {
                    removeFavorite();
                }

                function addFavorite() {
                    isFavorite = true;
                    favoriteStar.textContent = '★';
                    favoriteStar.classList.add('favorite');
                }

                function removeFavorite() {
                    isFavorite = false;
                    favoriteStar.textContent = '☆';
                    favoriteStar.classList.remove('favorite');
                }

                favoriteStar.addEventListener('click', () => {
                    if(isFavorite) {
                        userFavoriteArticleRef.remove();
                        removeFavorite();
                    }
                    else {
                        userFavoriteArticleRef.set({
                            title: article.title,
                            author: article.author,
                            description: article.description,
                            url: article.url,
                            urlToImage: article.urlToImage,
                            publishedAt: article.publishedAt
            
                        });
                        addFavorite();
                    }
                });

            });

        newsList.appendChild(dom);
    });
}


function clearRows(){
    while(newsList.children.length > 0){
        newsList.lastElementChild.remove();
    }
}