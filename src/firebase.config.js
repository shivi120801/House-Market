import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBIdLAi3iHnO3U2JIybYFBcgA0vXrGqjO4",
  authDomain: "property-market-a3aee.firebaseapp.com",
  projectId: "property-market-a3aee",
  storageBucket: "property-market-a3aee.appspot.com",
  messagingSenderId: "546809522932",
  appId: "1:546809522932:web:4acb092cfa1878c9ce0ca1",
  measurementId: "G-KQ9BKC69XR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore();