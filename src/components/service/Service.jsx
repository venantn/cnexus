import React from 'react';
import './service.css';

const Service = ({header, blurb}) => {
  return (
    <div className='cnexus__service'>
        <div className='cnexus__service-content'>
            <h2>{header}</h2>
            <p>{blurb}</p>
        </div>
        
    </div>
  )
}

export default Service