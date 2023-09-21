import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAmcHYQKIjvaDzMmRFAC5K6H02t-wML1Es",
    authDomain: "image-gallery-b4328.firebaseapp.com",
    projectId: "image-gallery-b4328",
    storageBucket: "image-gallery-b4328.appspot.com",
    messagingSenderId: "1059025977001",
    appId: "1:1059025977001:web:5c9e6eca1eab3c4c6973b8",
    measurementId: "G-ZGVP9LLBGK"
  };


  const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app)

