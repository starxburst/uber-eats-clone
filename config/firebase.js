import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC5a0sUCLq7kOCMyx9G00gPjAfvhdsw6Uw",
    authDomain: "uber-eats-clone-819d1.firebaseapp.com",
    projectId: "uber-eats-clone-819d1",
    storageBucket: "uber-eats-clone-819d1.appspot.com",
    messagingSenderId: "773115279949",
    appId: "1:773115279949:web:e4e72f1d137932b6a7fa04"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };