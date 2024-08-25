import { useState, useEffect } from 'react';

import Navbar from '../src/Components/Navbar/Navbar';
import Hero from '../src/Components/Hero/Hero';
function App () {
  
  return (
    <>
      <div>
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;