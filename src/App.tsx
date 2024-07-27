import React from 'react';
import './App.css';
import Header from './pages/Header';
import Body from './pages/Body';
import Footer from './pages/Footer';
import RegistrationPage from './pages/RegisterPage/RegisterPage'; // Import the registration page
import Login from './pages/Login/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import CursosOnline from './pages/CourseOn';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDJFOeSB-NeH_2kbjdSgC9T08UJ3QejdqQ",
  authDomain: "projetonati-282da.firebaseapp.com",
  projectId: "projetonati-282da",
  storageBucket: "projetonati-282da.appspot.com",
  messagingSenderId: "902810762990",
  appId: "1:902810762990:web:bfe5d5acd8cfc7bb457dff",
  measurementId: "G-B8JR6VEZ5B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/cursos-online" element={<CursosOnline />} />
        <Route path="/inscricao" element={<RegistrationPage />} /> {/* Add the new route */}
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
