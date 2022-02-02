import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBhdGd7k96WJ-R6CB81jXR_5CbuoAIEI7o",
    authDomain: "twitterclone-red.firebaseapp.com",
    projectId: "twitterclone-red",
    storageBucket: "twitterclone-red.appspot.com",
    messagingSenderId: "137848780824",
    appId: "1:137848780824:web:cb0d8ce3fbc4a0bb26ab6d"
  };
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };