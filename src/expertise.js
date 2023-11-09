import React from 'react';

const Expertise = (props) => {
  const header = props.header;
  const content = props.content;
  const icon = props.icon;

  return (
    <div className="my-12 lg:mb-16 lg:mt-0">
      <div className='flex flex-row'>
        <div className='text-4xl mr-4'>{icon}</div>
        <h2 className='text-2xl md:text-4xl font-semibold mb-4 underline'>{header}</h2>
      </div>
      <p className='text-xl md:text-2xl font-medium'>{content}</p>
    </div>
  );
};

export default Expertise;
