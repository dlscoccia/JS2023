// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC0HHWGzCfwJ8H7N3w1B-Y5wvWt8uL39RQ',
  authDomain: 'journal-app-3ee8b.firebaseapp.com',
  projectId: 'journal-app-3ee8b',
  storageBucket: 'journal-app-3ee8b.appspot.com',
  messagingSenderId: '902617555158',
  appId: '1:902617555158:web:b1783d429e8e557894a977',
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(firebaseApp)
export const firebaseDB = getFirestore(firebaseApp)
