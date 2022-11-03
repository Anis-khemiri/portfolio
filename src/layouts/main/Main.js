import React from 'react';

import About from '../../pages/About/About';
import Landing from '../../pages/landing/Landing';
import Skills from '../../pages/Skills/Skills';

export default function Main() {
  return (
    <div className="container">
      <Landing />
      <About />
      <Skills />
      
    </div>
  );
}
