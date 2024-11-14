// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => (
  <div>
    <Navbar />
    <HeroSection />
    <About />
    <Projects />
    <Contact />
  </div>
);

export default App;
