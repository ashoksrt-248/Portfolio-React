// src/App.js
import React from 'react';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <div>
    <HeroSection />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </div>
);

export default App;
