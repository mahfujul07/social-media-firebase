// firebase 8.8.0 setup for nextjs
//

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCdLCq9caaM-E8OPCAUDrjYwpEp0B-PIXs",
  authDomain: "social-media-firebase-mahfuz.firebaseapp.com",
  databaseURL:
    "https://social-media-firebase-mahfuz-default-rtdb.firebaseio.com",
  projectId: "social-media-firebase-mahfuz",
  storageBucket: "social-media-firebase-mahfuz.appspot.com",
  messagingSenderId: "985012894596",
  appId: "1:985012894596:web:ded4e0ecc00f8f836dfbd1",
  measurementId: "G-C6S7TV9YHV",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };