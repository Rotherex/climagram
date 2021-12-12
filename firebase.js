// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7GmUzwhzJqGROzcyU27-UeuKNdJFvN_o",
  authDomain: "climagram-15ca2.firebaseapp.com",
  projectId: "climagram-15ca2",
  storageBucket: "climagram-15ca2.appspot.com",
  messagingSenderId: "318495089499",
  appId: "1:318495089499:web:9d9c0a923149c6cce5307e"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export {app, db, storage}