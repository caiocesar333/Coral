import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAEOLyATjKbjQUxECxWjxGAGx9vdQVavqU",
  authDomain: "coral-55db8.firebaseapp.com",
  projectId: "coral-55db8",
  storageBucket: "coral-55db8.appspot.com",
  messagingSenderId: "403790898208",
  appId: "1:403790898208:web:2be0551b61d782c0280845"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)