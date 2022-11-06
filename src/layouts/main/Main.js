import React from 'react';

import About from '../../pages/About/About';
import Landing from '../../pages/landing/Landing';
import Portfolio from '../../pages/Portfolio/Portfolio';
import Service from '../../pages/Service/Service';
import Skills from '../../pages/Skills/Skills';

export default function Main() {
  return (
    <div className="container">
      <Landing />
      <About />
      <Skills />
      <Service />
      <Portfolio />
      
    </div>
  );
}
