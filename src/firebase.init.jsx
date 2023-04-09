// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnKeLcByA9HrgvsoJ1tbToJ7BVMXV2zpg",
  authDomain: "restuarent-app-84b58.firebaseapp.com",
  databaseURL: "https://restuarent-app-84b58-default-rtdb.firebaseio.com",
  projectId: "restuarent-app-84b58",
  storageBucket: "restuarent-app-84b58.appspot.com",
  messagingSenderId: "802846491888",
  appId: "1:802846491888:web:b8897b5cc5ac35921e2e35"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;