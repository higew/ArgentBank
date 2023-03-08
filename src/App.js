import React from 'react';
import { Routes, Route } from "react-router-dom"
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import SignIn from './pages/signIn/SignIn';
import Error from './pages/error/Error';
import UserPage from './pages/user/User';
import './assets/css/style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/user" element={<UserPage/>}/>
        <Route path="/*" element={<Error/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
