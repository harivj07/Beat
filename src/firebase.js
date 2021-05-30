import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyByffo-IibtSHeZmhyae1oFEfJdlOnL7Ew",
    authDomain: "camouflage-70029.firebaseapp.com",
    projectId: "camouflage-70029",
    storageBucket: "camouflage-70029.appspot.com",
    messagingSenderId: "97070594478",
    appId: "1:97070594478:web:10c23ac9999f4e41f8703f"
  };

firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')


// export utils/refs
export {
  db,
  auth,
  usersCollection,
  
}