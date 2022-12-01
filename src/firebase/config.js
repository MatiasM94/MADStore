// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWwi-TBOmPenTJqx-v33qoHNzSp7JGC80",
    authDomain: "proyecto-final-react-js-4ae7a.firebaseapp.com",
    projectId: "proyecto-final-react-js-4ae7a",
    storageBucket: "proyecto-final-react-js-4ae7a.appspot.com",
    messagingSenderId: "752629902371",
    appId: "1:752629902371:web:33df58c304971f70af1596",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);