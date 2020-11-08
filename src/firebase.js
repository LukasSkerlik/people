import firebase from "firebase"

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCufu6wi_PaIc0A2IZGyTSVDMkYti9hiXs",
  authDomain: "code-test-people.firebaseapp.com",
  databaseURL: "https://code-test-people.firebaseio.com",
  projectId: "code-test-people",
  storageBucket: "code-test-people.appspot.com",
  messagingSenderId: "301664650413",
  appId: "1:301664650413:web:69fbdaf87f030681b27224"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;
