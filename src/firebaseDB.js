import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw3FbWeLV9lvtKTb_o1fk6To85Fm0jh9M",
  authDomain: "jcpoli2024.firebaseapp.com",
  databaseURL: "https://jcpoli2024-default-rtdb.firebaseio.com",
  projectId: "jcpoli2024",
  storageBucket: "jcpoli2024.appspot.com",
  messagingSenderId: "156999694476",
  appId: "1:156999694476:web:7f5bb5bf2bd9bc09efa3a9"
};

const app = initializeApp(firebaseConfig); // inicializacao do link com banco de dados a apartir das chaves acima

export { app }; // exportacao do app montado para que possa ser usado a referencia do banco em outros arquivos