import firebase from 'firebase';

const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyAIj41gCv0GxOqw1HZ_47ojRY4XDQwGCrg",
  authDomain: "instagram-clone-44739.firebaseapp.com",
  databaseURL: "https://instagram-clone-44739-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-44739",
  storageBucket: "instagram-clone-44739.appspot.com",
  messagingSenderId: "14103038001",
  appId: "1:14103038001:web:533f051f5e94871237ed10",
  measurementId: "G-8V1TZ45SDP"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};