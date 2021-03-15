import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCVhCn-Z-q7L8W0HNC9kCWZg6Hq45zj9Jo",
    authDomain: "slack-62091.firebaseapp.com",
    projectId: "slack-62091",
    storageBucket: "slack-62091.appspot.com",
    messagingSenderId: "493725156663",
    appId: "1:493725156663:web:3c35f59189d256623ec6b2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, db, provider };