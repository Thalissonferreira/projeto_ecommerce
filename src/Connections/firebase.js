import {initializeApp } from "firebase/app";



const firebaseConfig = {
    apiKey: "AIzaSyBZgRo7gfgeZYEudacQ0Seg7CA9pkaNd_I",
    authDomain: "projeto-ecommerce-a19b0.firebaseapp.com",
    projectId: "projeto-ecommerce-a19b0",
    storageBucket: "projeto-ecommerce-a19b0.appspot.com",
    messagingSenderId: "240993996887",
    appId: "1:240993996887:web:f9104c2717f2facdd35312",
    measurementId: "G-1971MGVT4Q"
  };


const fireConnection = !initializeApp.length &&  initializeApp (firebaseConfig);

  export default fireConnection;