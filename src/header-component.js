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
    const html = /*html*/ ` 
    <div class="profile">
        <img src="${user.photoURL}" alt="avatar image">
        <span>${user.displayName}</span>
        <button>Sign Out</button>
    </div>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const headerContainer = document.getElementById('header-container');

export default function loadHeader(){
    const dom = makeHeader();
    headerContainer.appendChild(dom);

}