
import React from 'react';
import Aboutme from './components/AboutMe';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './App.css';

  export default function App() {
    return (
      <main className="background-image">
        <Navbar />
        <Home />
        <Projects />
        <Aboutme />
        <Contact />
      </main>
    );
  }