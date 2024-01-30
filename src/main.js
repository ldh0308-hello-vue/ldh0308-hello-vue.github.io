import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQKTlE8LpVdOXGbaO5WwkY2r0M06QkCTc",
  authDomain: "vue-dev-b62d9.firebaseapp.com",
  projectId: "vue-dev-b62d9",
  storageBucket: "vue-dev-b62d9.appspot.com",
  messagingSenderId: "948838314929",
  appId: "1:948838314929:web:1344d7de040dfbc613c390",
  measurementId: "G-J6C5M5DT0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
