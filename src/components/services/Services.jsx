import React, { useEffect, useRef } from 'react';
import './services.css';
import Service from '../service/Service';

const Services = () => {
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target); // Optional: Unobserve after animation
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (servicesRef.current) {
      const serviceItems = servicesRef.current.querySelectorAll('.cnexus__service');
      serviceItems.forEach(item => observer.observe(item));
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className='cnexus__services' ref={servicesRef} id='services'>
        <div className='cnexus__services-content'>
          <h1>How we'll help you thrive</h1>
          <div className='cnexus__services-cat'>
            <Service header='Platform & UX Optimization' blurb='Improve your product’s engagement and conversion with user experience optimization, platform redesigns, production strategies, and monetization techniques. We’ll help you think deeply about how to sustain platform usage.' />
            <Service header='New Product Building' blurb="We'll help think critically about building new products, making sure you prioritize the features that matter and build the most impactful MVP" />
            <Service header='Business Development' blurb='We help our clients with best-in-class proposals and crafting novel Business and Go-To-Market strategies. We make sure that our partners have what they need to craft a cogent vision and find success in the market.' />        
          </div>
        </div>
    </div>
  );
}

export default Services;
