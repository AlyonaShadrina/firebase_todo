import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyCj1UJ7iGJ7Qzp4PffrSPjYZcc_YN5adPo',
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "fir-todo-8a5dc.firebaseapp.com",
    databaseURL: "https://fir-todo-8a5dc.firebaseio.com",
    projectId: "fir-todo-8a5dc",
    storageBucket: "fir-todo-8a5dc.appspot.com",
    messagingSenderId: "218839191961",
    appId: "1:218839191961:web:167d0a97e4ab3ecc130308",
    measurementId: "G-JL8RXFMJ57"
};
firebase.initializeApp(config);

export default firebase;
