import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/storage'

const config = {
  apiKey: 'AIzaSyApJpWZ-MOuPsBJUGa8EAQmXl97CGOf-0U',
  authDomain: 'earnest-radio-636.firebaseapp.com',
  databaseURL: 'https://earnest-radio-636.firebaseio.com',
  projectId: 'earnest-radio-636',
  storageBucket: 'earnest-radio-636.appspot.com',
  messagingSenderId: '580034373899',
  appId: '1:580034373899:web:2a7d8a1a9bbabb43ebda0e',
  measurementId: 'G-0MY53LZHTJ'
}

if (!firebase.apps.length) {
  console.log('Firebase initializing...')
  firebase.initializeApp(config)
}

export const DB = firebase.firestore()
export const storage = firebase.storage()
export const auth = firebase.auth()

export default firebase
