import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9eNnIru47pBE0TvI7vpuAtD1Q7YW6DXU",
  authDomain: "el-rincon-de-la-naturaleza.firebaseapp.com",
  projectId: "el-rincon-de-la-naturaleza",
  storageBucket: "el-rincon-de-la-naturaleza.appspot.com",
  messagingSenderId: "627806519305",
  appId: "1:627806519305:web:91136c86a92e6988a0f8d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
initializeApp(firebaseConfig);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

