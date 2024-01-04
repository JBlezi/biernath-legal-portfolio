import React from 'react';
import { FaChevronDown, FaCloudsmith, FaServer, FaPlay, FaShoppingCart } from 'react-icons/fa';
import Expertise from './expertise';
import { useTranslation } from 'react-i18next';
import sketch from './images/eurasian-lawyer.png'


const HomePage = () => {
  const { t } = useTranslation('');

  return (
    <div className="mx-8 md:mx-16">
      <div className="h-screen md:h-[70vh] relative flex">
        <div className='my-auto'>
          <img src={sketch} alt="eurasian lawyer" className='h-[50vh] xl:h-[70vh] absolute -top-12 right-0 opacity-50 xl:opacity-90'/>
          <h1 className="text-4xl md:text-6xl font-bold mb-2 relative z-20">Biernath Legal</h1>
          <h2 className='text-2xl md:text-3xl font-semibold mb-8 relative'>{t('hero.subheader')}</h2>
          <p className='text-xl md:text-2xl font-medium relative xl:w-3/5'>{t('hero.description')}</p>
        </div>
        <FaChevronDown className='md:hidden text-2xl md:text-4xl absolute bottom-24 left-1/2 left-1/2 transform -translate-x-1/2'/>
      </div>
      <div>
        <div className='lg:flex lg:flex-row'>
          <div className="lg:w-1/2 lg:pr-8">
            <Expertise icon={<FaCloudsmith/>} header={t('expertise.it-law.header')} content={t('expertise.it-law.content')}/>
          </div>
          <div className='lg:w-1/2'>
            <Expertise icon={<FaServer/>} header={t('expertise.data-law.header')} content={t('expertise.data-law.content')}/>
          </div>
        </div>
        <div className='lg:flex lg:flex-row'>
          <div className="lg:w-1/2 lg:pr-8">
            <Expertise icon={<FaPlay/>} header={t('expertise.media-law.header')} content={t('expertise.media-law.content')}/>
          </div>
          <div className='lg:w-1/2'>
            <Expertise icon={<FaShoppingCart/>} header={t('expertise.ecommerce-law.header')} content={t('expertise.ecommerce-law.content')}/>
          </div>
        </div>
      </div>
      <div className='my-24 md:my-48'>
        <h2 className='text-2xl md:text-4xl font-semibold underline mb-8'>Benedikt Biernath, {t('bio.header')}</h2>
        <p className='text-xl md:text-2xl font-medium xl:leading-normal'>{t('bio.description')}</p>
      </div>
      <div class='wrap my-16'>
        <div class='fill-wrap'>
          <a href='mailto:ra@biernath.com' class='btn btn-desert btn-b-t text-2xl md:text-4xl p-4 md:p-6 rounded-full'>{t('navbar.contact')}</a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
