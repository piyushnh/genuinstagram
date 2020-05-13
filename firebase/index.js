import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'
import 'firebase/functions'
try {
  let firebaseConfig = {
 apiKey: 'AIzaSyD5bPaOO1fukhR4WNMbwyGhWd5D3yjIk3k',
    authDomain: 'journal-dev-253621.firebaseapp.com',
    databaseURL: 'https://journal-dev-253621.firebaseio.com',
    projectId: 'journal-dev-253621',
    storageBucket: 'journal-dev-253621.appspot.com',
    messagingSenderId: '487329390860',
    appId: '1:487329390860:web:744c5ace640af735d46929'
  }


  
  firebase.initializeApp(firebaseConfig)
} catch (error) {
  console.log('=========Firebase firestore initializer==============')
  console.log(error)
  console.log('====================================')
}

// - Storage reference
// export let storageRef = firebase.storage().ref()

// Initialize Cloud Firestore through Firebase
// const db = firebase.firestore()
// const settings = {}
// db.settings(settings)
// export {
//   db
// }
// - Database authorize
export let firebaseAuth = firebase.auth
// export let functions = firebase.functions()
// export let firebaseRef = firebase.database().ref()

// - Firebase default
export default firebase
