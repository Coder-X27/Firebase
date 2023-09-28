import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyCDOlcMmA5qp0iX3ur4kqdaZsqQ_TcVz4Q",
    authDomain: "first-project-ac524.firebaseapp.com",
    projectId: "first-project-ac524",
    storageBucket: "first-project-ac524.appspot.com",
    messagingSenderId: "724794374323",
    appId: "1:724794374323:web:70a87513464878ecb4d8c6",
    databaseURL:"https://first-project-ac524-default-rtdb.firebaseio.com"
};

export const app = initializeApp(firebaseConfig);