import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBYtjONwvYVjzWBi_emNvL7y2xxK5KZ0DE",
  authDomain: "barter-app-65c6c.firebaseapp.com",
  databaseURL: "https://barter-app-65c6c.firebaseio.com",
  projectId: "barter-app-65c6c",
  storageBucket: "barter-app-65c6c.appspot.com",
  messagingSenderId: "110124675787",
  appId: "1:110124675787:web:d554958f45589976aa214e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
