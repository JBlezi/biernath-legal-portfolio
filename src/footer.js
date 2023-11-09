import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <div className='flex flex-row justify-center items-center h-16 text-lg bg-[#C7D9E8]'>
        <Link to="/legal-information" className='mr-4'>Legal Information</Link> | <Link to="/privacy-policy" className='ml-4'>Privacy Policy</Link>
    </div>
  )
}

export default Footer;
