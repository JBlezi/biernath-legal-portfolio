
import React, { Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from './images/biernath.com.favicon.png'; // Adjust the path as necessary

const Navbar = () => {
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem("lng") || 'de');
  const { t, i18n } = useTranslation('');

  const toggleLanguage = (lang) => {
    setCurrentLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("lng", lang)
  };

  return (
    <nav className="p-4 text-black">
      <div className="flex items-center justify-between lg:mx-10 lg:mt-10">
        <a href="index.html" className="flex flex-row">
          <img src={logo} alt="Biernath Legal Logo" className="h-14 rounded-full" />
        </a>
        <div className='wrap flex flex-row'>
          <div className='fill-wrap'>
            <div className="flex flex-row mx-4 text-xl">
              <button onClick={() => toggleLanguage('en')} className={currentLanguage === 'en' ? 'active' : ''}>EN<span style={{color: 'black'}}>/</span></button>
              <button onClick={() => toggleLanguage('de')} className={currentLanguage === 'de' ? 'active' : ''}>DE</button>
              {/* Your other content here */}
            </div>
            <a href='contact.html' className='btn btn-desert btn-b-t md:p-4 p-3 text-xl rounded-full'>{t('navbar.contact')}</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default function App() {
  return (
    <Suspense fallback="loading">
      <Navbar/>
    </Suspense>
  );
}
