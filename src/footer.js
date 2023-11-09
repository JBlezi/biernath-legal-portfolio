import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Footer = () => {

  return (
    <div className='flex flex-row justify-center items-center h-16 text-lg bg-[#C7D9E8]'>
      <Router>
        <Link to="/legal-information">Legal Information</Link> | <a href="" className='ml-4'>Privacy Policy</a>
      </Router>
    </div>
  )
}

export default Footer;
