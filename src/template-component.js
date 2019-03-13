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

function clearRows(){
    if(newsList.firstChild){
        newsList.firstChild.remove();
    }
}