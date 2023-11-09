import React from 'react';
import './App.css';
import './index.css';
import HomePage from './HomePage';
import LegalInformation from './LegalInformation';
import PrivacyPolicy from './PrivacyPolicy';
import Navbar from './Navbar';
import Footer from './footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App mx-auto">
        <Navbar />
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/legal-information" element={<LegalInformation />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
