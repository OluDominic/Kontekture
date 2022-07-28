import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

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
  //firebase.initializeApp(firebaseConfig);
// export Firebase so it can be used elsewhere 
 // const reference = ref(db, 'blogpost/' + userId)
 // Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);