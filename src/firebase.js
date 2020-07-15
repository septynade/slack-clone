import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: 'AIzaSyB3t9nQRmlGpMpzvu7D9_Z_gswhnDZANsA',
  authDomain: 'react-slack-clo.firebaseapp.com',
  databaseURL: 'https://react-slack-clo.firebaseio.com',
  projectId: 'react-slack-clo',
  storageBucket: 'react-slack-clo.appspot.com',
  messagingSenderId: '522476736494',
  appId: '1:522476736494:web:da4225bd70200f946608ff',
  measurementId: 'G-PVCWES99W1',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

export default firebase
