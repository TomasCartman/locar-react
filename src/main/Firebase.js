import * as firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyAG6-GxedqTlDXbfrzuYshxHU9783fgtVQ",
    authDomain: "locar-react.firebaseapp.com",
    databaseURL: "https://locar-react.firebaseio.com",
    projectId: "locar-react",
    storageBucket: "locar-react.appspot.com",
    messagingSenderId: "685612539045",
    appId: "1:685612539045:web:d8ffcddd9058a0e5cd014c",
    measurementId: "G-FK7597B5QF"
}

const FirebaseApp = firebase.initializeApp(firebaseConfig, 'Locar React')

export default FirebaseApp