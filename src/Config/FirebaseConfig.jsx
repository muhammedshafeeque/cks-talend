import * as firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyB-BUA4zSGAsfbdmixcxG5dD2ygUpYpUII",
  authDomain: "skssf-158ed.firebaseapp.com",
  projectId: "skssf-158ed",
  storageBucket: "skssf-158ed.appspot.com",
  messagingSenderId: "570323624371",
  appId: "1:570323624371:web:d042aa94f623d76effebc6",
  measurementId: "G-CHTDNMMC3K"
};
// firebase.initializeApp(firebaseConfig)
// Initialize Firebase
// export const Firebase =firebase.initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
// export default firebase;
export const Firebase = firebase.initializeApp(firebaseConfig)
export const db=Firebase.database().ref()
// export const db=firebase.firestore()

// const Firebase =firebase.initializeApp(firebaseConfig);
// export default Firebase;

