import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYcVCCk--zPOhk5mdSt1XHyG9-VnseIxk",
  authDomain: "sleeve-56409.firebaseapp.com",
  projectId: "sleeve-56409",
  storageBucket: "sleeve-56409.appspot.com",
  messagingSenderId: "487958896422",
  
  appId: "1:487958896422:web:3278192a9a64946303abe7"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

