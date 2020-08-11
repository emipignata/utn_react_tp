import * as firebase from 'firebase'


var firebaseConfig = {
  apiKey: "AIzaSyAkplUm3pVI0v1VUju9QszmYFEXGPdvVYM",
  authDomain: "appreact1-a12ea.firebaseapp.com",
  databaseURL: "https://appreact1-a12ea.firebaseio.com",
  projectId: "appreact1-a12ea",
  storageBucket: "appreact1-a12ea.appspot.com",
  messagingSenderId: "492170530039",
  appId: "1:492170530039:web:47c03941d06d687aa697f2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({
    timestampsInSnapshots:true
})
firebase.db = db;

export default firebase;