 import firebase from 'firebase';

 const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCu7w2Gd43hrA4A3d5GeoBOsu5gF08eIU4",
    authDomain: "instagram-clone-9f309.firebaseapp.com",
    databaseURL: "https://instagram-clone-9f309.firebaseio.com",
    projectId: "instagram-clone-9f309",
    storageBucket: "instagram-clone-9f309.appspot.com",
    messagingSenderId: "990529285109",
    appId: "1:990529285109:web:ad28ffc650daa4ea0e8ebc",
    measurementId: "G-20CQTSMXVP"

 })

 const db = firebaseApp.firestore();

 const auth= firebase.auth();

 const storage = firebase.storage();

 export {db, auth, storage};