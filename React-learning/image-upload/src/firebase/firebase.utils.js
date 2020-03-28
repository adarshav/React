import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyDZZ0V3WSKLAm6dbaX99aeZ_imBaNd0p5M",
    authDomain: "image-upload-5c23f.firebaseapp.com",
    databaseURL: "https://image-upload-5c23f.firebaseio.com",
    projectId: "image-upload-5c23f",
    storageBucket: "image-upload-5c23f.appspot.com",
    messagingSenderId: "352953695321",
    appId: "1:352953695321:web:42281c8982907edb170548"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  
export {
    storage, firebase as default
}