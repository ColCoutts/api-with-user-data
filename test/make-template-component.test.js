// import makeHtmlTemplate from '../src/template-component.js';
const test = QUnit.test;

QUnit.module('template literal for news articles');

export default function makeHtmlTemplate(exampleObject){
    // clearRows();
    console.log(exampleObject);
    // bag of dom
    const title = exampleObject[0].title;
    console.log(title);
    const author = exampleObject[0].author;
    const description = exampleObject[0].description;
    const url = exampleObject[0].url;
    const img = exampleObject[0].urlToImage;
    const published = exampleObject[0].publishedAt;

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


test('set up basic template literal', assert => {
    //arrange
    const exampleObject = [
        {
            'source': {
                'id': 'techcrunch',
                'name': 'TechCrunch'
            },
            'author': 'Romain Dillet',
            'title': 'Coinbase users can now withdraw Bitcoin SV following BCH fork',
            'description': 'If you’re a Coinbase user, you may have seen some new tokens on your account. The Bitcoin Cash chain split into two different chains back in November. It means that if you held Bitcoin Cash on November 15, you became the lucky owner of Bitcoin SV and Bitcoin …',
            'url': 'http://techcrunch.com/2019/02/15/coinbase-users-can-now-withdraw-bitcoin-sv-following-bch-fork/',
            'urlToImage': 'https://techcrunch.com/wp-content/uploads/2017/08/bitcoin-split-2017a.jpg?w=711',
            'publishedAt': '2019-02-15T14:53:40Z',
            'content': 'If youre a Coinbase user, you may have seen some new tokens on your account. The Bitcoin Cash chain split into two different chains back in November. It means that if you held Bitcoin Cash on November 15, you became the lucky owner of Bitcoin SV and Bitcoin A… [+1514 chars]'
        }
    ];

    //act
    const expected = /*html*/`
        <li>
            <span class="favorite-star">☆</span>
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

