import React from 'react'
 import { initializeApp } from "firebase/app";
 import { getAuth } from "firebase/auth";
//  import { getAnalytics } from "firebase/analytics";

   
const firebaseConfig = {
  apiKey: "AIzaSyDOPdMMeTg41tockRPSYi3X3Mne2_4vlMQ",
  authDomain: "adventure-35bc7.firebaseapp.com",
  projectId: "adventure-35bc7",
  storageBucket: "adventure-35bc7.appspot.com",
  messagingSenderId: "120571141101",
  appId: "1:120571141101:web:f2a2ca2f7f9f9ce23a65e4",
  measurementId: "G-X1P2J6ED3D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth() ;

export {app,auth}
