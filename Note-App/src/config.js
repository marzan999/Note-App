import * as  firebase from 'firebase'
import '@firebase/auth'
import '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAptMKd9UwGjKueQ4QK3SDSQKQw9Wpm1tA",
    authDomain: "note-app-429bc.firebaseapp.com",
    projectId: "note-app-429bc",
    storageBucket: "note-app-429bc.appspot.com",
    messagingSenderId: "497307070120",
    appId: "1:497307070120:web:0f9b9751d0373f965a5c9d"
  };

  if(!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  }

  export {firebase}