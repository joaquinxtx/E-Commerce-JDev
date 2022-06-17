
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2y9JQtBNe5Z6wgV7WNo8CyfkoUC8CzXs",
  authDomain: "e-comerce-toledo.firebaseapp.com",
  projectId: "e-comerce-toledo",
  storageBucket: "e-comerce-toledo.appspot.com",
  messagingSenderId: "67366366468",
  appId: "1:67366366468:web:a0305466c7fd785bd8b451"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
  return app
}