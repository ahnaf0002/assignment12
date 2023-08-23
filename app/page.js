import Link from 'next/link';
import React from 'react';
import Menu from './component/Menu';

const page = () => {
  return (
    <div className='container mx-auto'>
      <Menu/>
      <h1>Well Come to our home page</h1>
      
    </div>
  );
};

export default page;