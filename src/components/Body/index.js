import React from 'react';
import EachCategory from './EachCategory';
import './styles.css';

const Main = () => {
  return (
    <div className='main'>
        <EachCategory />
        <EachCategory />
        <EachCategory />
        <EachCategory />
        <EachCategory />
    </div>
  )
}

export default Main;