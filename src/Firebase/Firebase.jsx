import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyB2HipHvVRSwHAtI-4HwI4vk25ryF_bNik",
    authDomain: "whamcomics-86b7b.firebaseapp.com",
    projectId: "whamcomics-86b7b",
    storageBucket: "whamcomics-86b7b.appspot.com",
    messagingSenderId: "801267536756",
    appId: "1:801267536756:web:16aa34feeb740136f8d221"
  };


  const fb = firebase.initializeApp(firebaseConfig);

  export const dataBase = fb.firestore();