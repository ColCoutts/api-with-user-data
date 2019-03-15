import convertObjectToArray from '../src/convert-object-to-array.js';

const test = QUnit.test;

QUnit.module('convert object to array');

test('object to array function', assert => {
    //arrange
    const object = {
        abc: { 
            'author': 'Romain Dillet',
            'title': 'Coinbase users can now withdraw Bitcoin SV following BCH fork',
            'description': 'If you’re a Coinbase user, you may have seen some new tokens on your account. The Bitcoin Cash chain split into two different chains back in November. It means that if you held Bitcoin Cash on November 15, you became the lucky owner of Bitcoin SV and Bitcoin …',
            'url': 'http://techcrunch.com/2019/02/15/coinbase-users-can-now-withdraw-bitcoin-sv-following-bch-fork/',
            'urlToImage': 'https://techcrunch.com/wp-content/uploads/2017/08/bitcoin-split-2017a.jpg?w=711',
            'publishedAt': '2019-02-15T14:53:40Z',
        },
        def: {
            'author': 'Amy Guthrie',
            'title': 'Anarchy, Bitcoin, and Murder in Acapulco',
            'description': 'The once-thriving resort city of in Mexico has become a somewhat lawless place. It is, in many ways, a perfect yet imperfect place for crypto-loving anarchists to gather each year.',
            'url': 'https://www.wired.com/story/anarchy-bitcoin-and-murder-in-mexico/',
            'urlToImage': 'https://media.wired.com/photos/5c78615d43416573f9b95f07/191:100/pass/anarchy-in-acapulco_topart_red.jpg',
            'publishedAt': '2019-03-01T12:00:00Z',
        },
        hij: {
            'author': 'Nick Summers',
            'title': 'HTC\'s Exodus smartphone is about much more than Bitcoin',
            'description': '\'A blockchain phone? But why?\' That was my first reaction when I read about the HTC Exodus last year. It felt like a wild, foolish bet from a company that\'s struggling for sales and relevancy in the mobile space. But then I spoke with Phil Chen, the company\'s…',
            'url': 'https://www.engadget.com/2019/02/28/htc-exodus-blockchain-smartphone-interview/',
            'urlToImage': 'https://o.aolcdn.com/images/dims?thumbnail=1200%2C630&quality=80&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fresize%3D2000%252C2000%252Cshrink%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-02%252Fbe8cbb60-3b4f-11e9-bfae-17efa98fdb74%26client%3Da1acac3e1b3290917d92%26signature%3D0913d59aafb7a01d2b7136d2ae324049031140b7&client=amp-blogside-v2&signature=3f31e5f3b0fc37dab3d374b1e4ef083ae7f29e0e',
            'publishedAt': '2019-02-28T12:40:00Z',
        }
    };

    //act
    const expected = [object.abc, object.def, object.hij];
    const result = convertObjectToArray(object);

    //assert
    assert.deepEqual(result, expected);
});