
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBwePZmzcELEBiabL2noGv7ypwI-45pJNg",
    authDomain: "projeto-dio-mundoinvertido.firebaseapp.com",
    projectId: "projeto-dio-mundoinvertido",
    storageBucket: "projeto-dio-mundoinvertido.appspot.com",
    messagingSenderId: "821148679515",
    appId: "1:821148679515:web:8ccc472f86b46d408cee7e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default app