import * as firebase from 'firebase';

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: "AIzaSyAU0Swooe4HlNt7B3jaYA0553CXNdD_0v4",
  authDomain: "newtest-7bc2e.firebaseapp.com",
  databaseURL: "https://newtest-7bc2e.firebaseio.com",
  projectId: "newtest-7bc2e",
  storageBucket: "",
  messagingSenderId: "757240074930"
};

export default (!firebase.apps.length ? firebase.initializeApp(config) : firebase.app());



