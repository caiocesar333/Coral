import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAEOLyATjKbjQUxECxWjxGAGx9vdQVavqU",
    authDomain: "coral-55db8.firebaseapp.com",
    projectId: "coral-55db8",
    storageBucket: "coral-55db8.appspot.com",
    messagingSenderId: "403790898208",
    appId: "1:403790898208:web:7b390e9a36a1b8c2280845"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;