import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCsEUeCO87XYS2cIIYVLg1rAd5aG18RbRk",
    authDomain: "tinder-clone-2cb6d.firebaseapp.com",
    projectId: "tinder-clone-2cb6d",
    storageBucket: "tinder-clone-2cb6d.appspot.com",
    messagingSenderId: "936881592146",
    appId: "1:936881592146:web:9378e82b9fd526e92bcc8b",
    measurementId: "G-BCPBHCB32X"
  };
  // Initialize Firebase
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const database=firebaseApp.firestore();
  export default database; 