const config = {
    apiKey: 'AIzaSyBynvBMapHHf3BZGCpW5_02gjRCtZNVhGA',
    authDomain: 'apie-with-user-data.firebaseapp.com',
    databaseURL: 'https://apie-with-user-data.firebaseio.com',
    projectId: 'apie-with-user-data'
};

firebase.initializeApp(config);

export const auth = firebase.auth();

const db = firebase.database();
export const usersRef = db.ref('users');
export const favoritesByUserRef = db.ref('favorites-by-user');