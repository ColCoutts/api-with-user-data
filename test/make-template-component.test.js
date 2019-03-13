// import testData from '../data/test-data.js';
// import makeHtmlTemplate from '../src/template-component.js';
const test = QUnit.test;

QUnit.module('template literal for news articles');

export default function makeHtmlTemplate(exampleObject){
    // clearRows();

    const newsData = exampleObject.articles;
    console.log(newsData);
    // bag of dom
    // newsData.forEach(newsData => {
    const title = newsData[0].title;
    console.log(title);
    const author = newsData[0].author;
    const description = newsData[0].description;
    const url = newsData[0].url;
    const img = newsData[0].urlToImage;
    const published = newsData[0].publishedAt;

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
        
        // newsList.appendChild(dom);
        
    const template = document.createElement('template');
    template.innerHTML = html;
    // testData is good and template.content is good here
    return template.content;
    // });

    // this function doesn't return anything
    
}


test('set up basic template literal', assert => {
    //arrange
    const exampleObject = {
        "articles": [
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Romain Dillet",
                "title": "Coinbase users can now withdraw Bitcoin SV following BCH fork",
                "description": "If you’re a Coinbase user, you may have seen some new tokens on your account. The Bitcoin Cash chain split into two different chains back in November. It means that if you held Bitcoin Cash on November 15, you became the lucky owner of Bitcoin SV and Bitcoin …",
                "url": "http://techcrunch.com/2019/02/15/coinbase-users-can-now-withdraw-bitcoin-sv-following-bch-fork/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2017/08/bitcoin-split-2017a.jpg?w=711",
                "publishedAt": "2019-02-15T14:53:40Z",
                "content": "If youre a Coinbase user, you may have seen some new tokens on your account. The Bitcoin Cash chain split into two different chains back in November. It means that if you held Bitcoin Cash on November 15, you became the lucky owner of Bitcoin SV and Bitcoin A… [+1514 chars]"
            }
        ]
    };
    //act
    const expected = /*html*/`
        <li>
            <h2>Coinbase users can now withdraw Bitcoin SV following BCH fork</h2>
            <h3>Author: Romain Dillet</h3>
            <h4>Published: 2019-02-15T14:53:40Z</h4>
            <img src="https://techcrunch.com/wp-content/uploads/2017/08/bitcoin-split-2017a.jpg?w=711">
            <p>If you’re a Coinbase user, you may have seen some new tokens on your account. The Bitcoin Cash chain split into two different chains back in November. It means that if you held Bitcoin Cash on November 15, you became the lucky owner of Bitcoin SV and Bitcoin …</p>
            <a href="http://techcrunch.com/2019/02/15/coinbase-users-can-now-withdraw-bitcoin-sv-following-bch-fork/">Read More</a>
        </li>
        `;

    const result = makeHtmlTemplate(exampleObject); // returns 'undefined'
    // for some result result is not defined
    //assert
    assert.htmlEqual(result, expected);
});

