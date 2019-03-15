import { makeHeader, makeProfile } from '../src/header-component.js';
const test = QUnit.test;

QUnit.module('make template literal function for header');


test('template literal for header', assert => {
    //arrange

    //act
    const expected = /*html*/ `
        <header>
            <img src="./assets/alchemy-logo.png" alt="alchemy logo">
            <h1 class="header-logo">Culture Vulture</h1>
        </header>
    `;

    const result = makeHeader();
    //assert
    assert.htmlEqual(result, expected);

});

test('temp literal for profile display', assert => {
    //arrange
    const user = {
        displayName: 'Colin Coutts',
        photoURL: 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png'
    };

    //act
    const expected = /*html*/ ` 
    <div class="profile">
        <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="avatar image">
        <span>Colin Coutts</span>
        <button>Sign Out</button>
    </div>
    `;

    const result = makeProfile(user);
    //assert
    assert.htmlEqual(result, expected);
});