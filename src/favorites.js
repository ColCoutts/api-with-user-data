import loadHeader from '../src/header-component.js';
import { auth, favoritesByUserRef } from './firebase.js';
import convertObjectToArray from './convert-object-to-array.js';
import { updateNews } from './template-component.js';

loadHeader();
//update news' const articles.articles likely what is breaking this array 
//as it seems to turn the 
auth.onAuthStateChanged(user => {
    const userFavoritesRef = favoritesByUserRef.child(user.uid);
    userFavoritesRef.on('value', snapshot => {
        const value = snapshot.val();
        const newsArticle = convertObjectToArray(value);
        updateNews(newsArticle);
    });
});