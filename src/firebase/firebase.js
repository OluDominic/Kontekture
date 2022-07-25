import firebase from "firebase"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvQw-8Rq5zNyKwvsqZCJ3GIQrr2w0H7cA",
    authDomain: "kontekture-25142.firebaseapp.com",
    projectId: "kontekture-25142",
    storageBucket: "kontekture-25142.appspot.com",
    messagingSenderId: "387413828630",
    appId: "1:387413828630:web:d709e397598d3233c0c137"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// export Firebase so it can be used elsewhere 
 const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;