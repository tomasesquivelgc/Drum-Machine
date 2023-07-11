import React, { useState } from 'react';
import './App.css';
import PadBank from './components/PadBank';
import ControlContainer from './components/Controls';
import Logo from './components/Logo';

function App() {
  const [currentPadId, setCurrentPadId] = useState('');

  return (
    <>
      <div className="inner-container" id="drum-machine">
        <PadBank setCurrentPadId={setCurrentPadId} />
        <Logo />
        <ControlContainer currentPadId={currentPadId} />
      </div>
      <footer className="Footer">
      <p>
        View the code on{' '}
        <a href="https://github.com/tomasesquivelgc/Drum-Machine" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>
    </footer>
    </>
  );
}

export default App;
