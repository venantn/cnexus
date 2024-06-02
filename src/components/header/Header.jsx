import React from 'react';
import './header.css';
import headerimg from '../../assets/heroimg.avif';
import filler from '../../assets/heroimg.avif';

const Header = () => {
  return (
    <div className='cnexus__header' id='home'>
      <div className='cnexus__header-content'>       
        <div className="cnexus__header-image ">
         <img src={filler} />
        </div>
        <div className='cnexus__header-title'>
          <h2 className='gradient__text'> Transforming Ideas into Digital Masterpieces</h2>
          <p> Elevate Your Products with Exceptional UX, Strategic Innovation, and Flawless Execution</p>
        </div>
      </div>
    </div>
  )
}

export default Header