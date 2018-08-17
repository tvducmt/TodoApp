import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';


const config = {
    apiKey: "AIzaSyBK1JzXbncMQO6ryfFpmtTWM8ncnXKk6po",
    authDomain: "todo-ce50f.firebaseapp.com",
    databaseURL: "https://todo-ce50f.firebaseio.com",
    projectId: "todo-ce50f",
    storageBucket: "todo-ce50f.appspot.com",
    messagingSenderId: "709139762415"
  };
  firebase.initializeApp(config);
export default firebase;