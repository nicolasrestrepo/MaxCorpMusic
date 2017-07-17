import * as firebase from 'firebase'


var config = {
    apiKey: "AIzaSyCwK3FhlVz3CS8RTOhIEqZ7p6mc8pd3JTU",
    authDomain: "maxcorpmusic.firebaseapp.com",
    databaseURL: "https://maxcorpmusic.firebaseio.com",
    projectId: "maxcorpmusic",
    storageBucket: "maxcorpmusic.appspot.com",
    messagingSenderId: "104811422689"
  };

  export const firebaseApp = firebase.initializeApp(config)

