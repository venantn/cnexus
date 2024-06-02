import React, { useEffect, useRef } from 'react';
import './about.css';

const About = () => {
  const aboutRef = useRef(null);

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

    if (aboutRef.current) {
      const pTags = aboutRef.current.querySelectorAll('p');
      pTags.forEach(p => observer.observe(p));
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className='cnexus__about' ref={aboutRef} id='about'>
        <div className='cnexus__about-content'>
          <h1>Who is Culturenexus?</h1>
          <div className='cnexus__about-cat'>
          <p>At Culturenexus Ventures, we specialize in crafting world-class digital products that transcend industries, ensuring our partners excel through superior user experiences, strategic product planning, and optimized development processes.
           Our commitment to innovation and strategic execution ensures that our clients are always a step ahead.</p>
          <p>Join us at Culturenexus Ventures, where your vision becomes our mission. Let’s build the future together.</p>
          </div>
        </div>

    </div>
  )
}

export default About