import firebase from "firebase/app"
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC1YuNWULV9ClqHmdW8_hg2GAF9Efw3pms",
    authDomain: "fireblogs-e78f3.firebaseapp.com",
    projectId: "fireblogs-e78f3",
    storageBucket: "fireblogs-e78f3.appspot.com",
    messagingSenderId: "1087242994093",
    appId: "1:1087242994093:web:f55628b70fc2f1abade124"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp.firestore();