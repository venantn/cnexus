import React from 'react';
import Contactform from '../contactform/Contactform';
import './contact.css';

const email = 'whatsup@culturenexusventures.com';

const Contact = () => {
  return (
    <div className="cnexus__contact"id='contact'>
    <div className="cnexus__contact-content">
      <h2>Get in Touch</h2>      
      <a href={`mailto:${email}`}><p>Ready to shift your product’s destiny? Let’s define your next chapter together</p> </a>
    </div>
    <div className="cnexus__contact-btn">
      <button type="button">
        <a href={`mailto:${email}`}>Email Us</a>
      </button>
      
    </div>
  </div>
  )
}

export default Contact