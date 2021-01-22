import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBuO8TUIfiqw3N91vjQcLCoEdYVyeJdD3U',
  authDomain: 'react-course-ea8d4.firebaseapp.com',
  projectId: 'react-course-ea8d4',
  storageBucket: 'react-course-ea8d4.appspot.com',
  messagingSenderId: '401306055368',
  appId: '1:401306055368:web:96762a5325bc747debebfd',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const db = firebase.firestore();

export { firebase, googleAuthProvider, db };
