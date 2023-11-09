import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="mx-8 h-screen relative">
      <h1 className="text-4xl font-bold pt-64 mb-2">Biernath Legal</h1>
      <h2 className='text-2xl font-semibold mb-8'>Spezialisierte Rechtsberatung</h2>
      <p className='text-xl font-medium'>Ich berate in allen Fragen zum IT-Recht, Datenschutzrecht, Medienrecht und E-Commerce. Der Schwerpunkt meiner Arbeit liegt in der Beratung von Fintech-Unternehmen, Software-Herstellern und Startups.</p>
      {/* Content goes here */}
      <FaChevronDown className='text-2xl absolute bottom-20 left-1/2 left-1/2 transform -translate-x-1/2'/>
    </div>
  );
};

export default HomePage;
