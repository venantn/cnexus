import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='cnexus__footer'>
      <div className='cnexus__footer-content'>
        
        <div className='left-column'>
        <a href={`mailto:${'whatsup@culturenexusventures.com'}`}><p>whatsup@culturenexusventures.com</p> </a>
        </div>
        <div className='right-column'> 
          <p>© Copyright 2024 Culturenexus Ventures, LLC. Atlanta</p>
        </div>

      </div>
        
    </div>
  )
}

export default Footer