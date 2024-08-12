import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import ListaTemas from './components/temas/listaTemas/ListaTemas';
import { AuthProvider } from './contexts/AuthContext';


function App() {
  return (
    <>
      <AuthProvider>
      <BrowserRouter>
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup  />} />
            <Route path="/home" element={<Home />} />
            <Route path="/temas" element={<ListaTemas />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter >
      </AuthProvider>
   
    </>



  );
}

export default App;
