// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD53L6jDBUKWog1lkJ_w-Ro_YNNEsNsels",
  authDomain: "food-delivery-37c59-c9959.firebaseapp.com",
  projectId: "food-delivery-37c59-c9959",
  storageBucket: "food-delivery-37c59-c9959.appspot.com",
  messagingSenderId: "989539161528",
  appId: "1:989539161528:web:86abf57a709294d2326b4d",
  measurementId: "G-FXV5Z3FRF4"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export { auth };