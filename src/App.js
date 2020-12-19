import React, { useEffect, useRef } from 'react';
import '../src/Sass/main.scss';
import Home from './PageComponets/Home';
import Navigation from './UiComponents/Navigation';
function App() {
  return (
    <div className='App'>
      <Navigation />
      <Home />
    </div>
  );
}
export default App;
