// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  getAuth,
} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3YGTYEwP3dlgotTsNnbH2KhEiLQJiEGU",
  authDomain: "web32-f8ace.firebaseapp.com",
  projectId: "web32-f8ace",
  storageBucket: "web32-f8ace.appspot.com",
  messagingSenderId: "560403974056",
  appId: "1:560403974056:web:79dc0b66ca610064dcbf9d",
  measurementId: "G-2KC2ZR6P98",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const login = () => {
  signInWithPopup(auth, provider).then((res) => {
    localStorage.setItem("token", res.user.accessToken);
    window.location.href = "/home";
  });
};
export const logout = () => {
  signOut(auth).then(() => {
    localStorage.removeItem("token");
    window.location.href = "/";
  });
};

// export const loginLocal = () => {
//   localStorage.setItem("token", token);
//   window.location.href = "/home";
// };
// export const logoutLocal = () => {
//   localStorage.removeItem("token");
//   window.location.href = "/";
// };
