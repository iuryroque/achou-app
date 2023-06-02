// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBEGflyMBXdpwPv30br1zkxE4vy_OIECak",
//   authDomain: "achou-app-aula.firebaseapp.com",// faltando alterar
//   projectId: "achou-app-4d241",
//   storageBucket: "achou-app-4d241.appspot.com",
//   messagingSenderId: "147621430615",
//   appId: "1:147621430615:android:fde6c2ed0c5de1138e6a12"
// };

const firebaseConfig = {
  apiKey: "AIzaSyALmMU3Hi6NfkMLN6ALrBgcJqlnFhq7S8o",
  authDomain: "testte-77c32.firebaseapp.com",
  projectId: "testte-77c32",
  storageBucket: "testte-77c32.appspot.com",
  messagingSenderId: "981897125658",
  appId: "1:981897125658:web:c0f015563eee8ebac396a3"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;