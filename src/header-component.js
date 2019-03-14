import { auth } from './firebase';

export function makeHeader(){
    const html = /*html*/ `
        <header>
            <img src="./assets/alchemy-logo.png" alt="alchemy logo">
            <h1 class="header-logo">Favorite News</h1>
        </header>
        `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;

}

export function makeProfile(user) {
    const avatar = user.photoURL || './assets/default-avatar.png';

    const html = /*html*/ ` 
    <div class="profile">
        <img src="${avatar}" alt="avatar image">
        <span>${user.displayName}</span>
        <button>Sign Out</button>
    </div>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const headerContainer = document.getElementById('header-container');

export default function loadHeader(options){
    const dom = makeHeader();
    const header = dom.querySelector('header');
    headerContainer.appendChild(dom);

    if(options && options.skipAuth) {
        return;
    }

    auth.onAuthStateChanged(user => {
        if(user) {
            const userDom = makeProfile(user);
            const signOutButton = userDom.querySelector('button');
            signOutButton.addEventListener('click', ()=> {
                auth.signOut();
                window.location.hash = '';
            });
            header.appendChild(userDom);
        }
        else {
            window.location = './auth.html' + window.location.hash;
        }
    });

}