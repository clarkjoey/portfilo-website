import React from 'react';
import './App.css';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Contact />
    </div>
  );
}

export default App;