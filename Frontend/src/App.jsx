import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import CareerPaths from './Components/CareerPaths';
import Roadmaps from './Components/Roadmaps';
import Resources from './Components/Resources';
import Community from './Components/Community';
import Events from './Components/Events'
import SingleCareer from './Components/SingleCareer';
// import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/career-paths' element={<CareerPaths />} />
        <Route path='/roadmaps' element={<Roadmaps />} />
        <Route path={`/career-path/:id`} element={<SingleCareer/>} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/tech-events' element={<Events />} />
        <Route path='/community' element={<Community />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App