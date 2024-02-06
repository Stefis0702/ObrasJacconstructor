// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeTGu6x-460eUZq7N5oA_ClqYRRk4eBDs",
  authDomain: "contructor-web.firebaseapp.com",
  projectId: "contructor-web",
  storageBucket: "contructor-web.appspot.com",
  messagingSenderId: "534572803089",
  appId: "1:534572803089:web:2b523e627e46f47f5ebdb0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { firebaseApp, auth, db }