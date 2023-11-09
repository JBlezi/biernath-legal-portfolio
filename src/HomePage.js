import React from 'react';
import { FaChevronDown, FaCloudsmith, FaServer, FaPlay, FaShoppingCart } from 'react-icons/fa';
import Expertise from './expertise';
import { useTranslation } from 'react-i18next';


const HomePage = () => {
  const { t } = useTranslation('');

  return (
    <div className="mx-8">
      <div className="h-screen relative flex">
        <div className='my-auto'>
          <h1 className="text-4xl font-bold mb-2">Biernath Legal</h1>
          <h2 className='text-2xl font-semibold mb-8'>{t('hero.subheader')}</h2>
          <p className='text-xl font-medium'>{t('hero.description')}</p>
        </div>
        <FaChevronDown className='text-2xl absolute bottom-20 left-1/2 left-1/2 transform -translate-x-1/2'/>
      </div>
      <Expertise icon={<FaCloudsmith/>} header={t('expertise.it-law.header')} content={t('expertise.it-law.content')}/>
      <Expertise icon={<FaServer/>} header={t('expertise.data-law.header')} content={t('expertise.data-law.content')}/>
      <Expertise icon={<FaPlay/>} header={t('expertise.media-law.header')} content={t('expertise.media-law.content')}/>
      <Expertise icon={<FaShoppingCart/>} header={t('expertise.ecommerce-law.header')} content={t('expertise.ecommerce-law.content')}/>
      <div className='my-24'>
        <h2 className='text-2xl font-semibold underline mb-8'>Benedikt Biernath, {t('bio.header')}</h2>
        <p className='text-xl font-medium'>{t('bio.description')}</p>
      </div>
      <div class='wrap my-16'>
        <div class='fill-wrap'>
          <a href='contact.html' class='btn btn-desert btn-b-t text-2xl lg:text-4xl p-4 md:p-6 rounded-full'>{t('navbar.contact')}</a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
