import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const config = {
  apiKey: 'AIzaSyBecs7aj41YQsobL99_fJq5s4-3zQIbCB4',
  authDomain: 'my-react-project-5c67d.firebaseapp.com',
  databaseURL: 'https://my-react-project-5c67d.firebaseio.com',
  projectId: 'my-react-project-5c67d',
  storageBucket: 'my-react-project-5c67d.appspot.com',
  messagingSenderId: '694169897659',
  appId: '1:694169897659:web:44bc67f7f4e9d26498779e'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const DB = firebase.firestore()
export const storage = firebase.storage()

export default firebase
