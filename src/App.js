import React from 'react';
import './App.css';
import './index.css';
import HomePage from './HomePage';
import LegalInformation from './LegalInformation';
import Navbar from './Navbar';
import Footer from './footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
        <Router>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/legal-information" element={<LegalInformation />} />
          </Routes>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
