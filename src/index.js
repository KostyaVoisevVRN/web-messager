import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration



// const firebaseConfig = {
//   apiKey: "AIzaSyDEGBH4nLIs4TNc2wY7NKPAbI-o0xFcp3w",
//   authDomain: "messagerdata-ebe8d.firebaseapp.com",
//   databaseURL: "https://messagerdata-ebe8d-default-rtdb.firebaseio.com",
//   projectId: "messagerdata-ebe8d",
//   storageBucket: "messagerdata-ebe8d.firebasestorage.app",
//   messagingSenderId: "102188288672",
//   appId: "1:102188288672:web:d39c7f8278f13ff14757c5"
// };




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
