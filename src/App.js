import React from 'react';
import './App.css';
import './index.css';
import HomePage from './HomePage';
import Navbar from './Navbar';
import Footer from './footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
