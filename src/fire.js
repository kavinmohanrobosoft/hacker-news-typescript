import firebase from 'firebase'

//web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAv4rPfceU7a84MYFk14hEvOxEdYYJf7JU",
    authDomain: "react-firebase-exercise-10113.firebaseapp.com",
    databaseURL: "https://react-firebase-exercise-10113.firebaseio.com",
    projectId: "react-firebase-exercise-10113",
    storageBucket: "react-firebase-exercise-10113.appspot.com",
    messagingSenderId: "42464414091",
    appId: "1:42464414091:web:b9a534d5c7506f8e60878e",
    measurementId: "G-3C095VQHTM"
  };

  var fire = firebase.initializeApp(firebaseConfig)

  export default fire;