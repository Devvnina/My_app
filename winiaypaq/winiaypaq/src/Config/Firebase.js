import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAsCECIb13VDgXpr1EYsRILKSuJYknCjzY",
    authDomain: "login-56504.firebaseapp.com",
    projectId: "login-56504",
    storageBucket: "login-56504.appspot.com",
    messagingSenderId: "224675424921",
    appId: "1:224675424921:web:4da2017f1435d8bf07e608"
  };
  firebase.initializeApp(firebaseConfig)
  firebase.auth= firebase.auth() // solo para evitar el uso de los parentisis
  export default firebase