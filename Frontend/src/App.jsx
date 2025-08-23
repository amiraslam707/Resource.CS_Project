import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
// import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    {/* <Navbar/> */}
    <Routes>
      <Route path='/' element={<LandingPage/>} />
    </Routes>
    </>
  )
}

export default App