import * as firebase from 'firebase'


var config = {
    apiKey: "AIzaSyCRkXIzNWbmQ7FtshiD8j7HaiWJrLm4NsM",
    authDomain: "goals-1d066.firebaseapp.com",
    databaseURL: "https://goals-1d066.firebaseio.com",
    projectId: "goals-1d066",
    storageBucket: "goals-1d066.appspot.com",
    messagingSenderId: "704140330283"
  }

  export const firebaseApp = firebase.initializeApp(config)

