import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter >
    </>



  );
}

export default App;
