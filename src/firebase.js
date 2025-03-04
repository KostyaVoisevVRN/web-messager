import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


/*
Login: KostyaLakostya@gmail.com;
Password: Password0000;
*/

const firebaseConfig = {
    apiKey: "AIzaSyDEGBH4nLIs4TNc2wY7NKPAbI-o0xFcp3w",
    authDomain: "messagerdata-ebe8d.firebaseapp.com",
    databaseURL: "https://messagerdata-ebe8d-default-rtdb.firebaseio.com",
    projectId: "messagerdata-ebe8d",
    storageBucket: "messagerdata-ebe8d.firebasestorage.app",
    messagingSenderId: "102188288672",
    appId: "1:102188288672:web:d39c7f8278f13ff14757c5"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
