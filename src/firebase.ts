// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6HT1TWuL6rUy8Xi5DCieYPYmzlWfJ7Sw",
  authDomain: "light-my-fire-6cd32.firebaseapp.com",
  projectId: "light-my-fire-6cd32",
  storageBucket: "light-my-fire-6cd32.appspot.com",
  messagingSenderId: "143298392370",
  appId: "1:143298392370:web:a834ce4efca3ce63b1672b",
  databaseURL: "https://light-my-fire-6cd32-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;