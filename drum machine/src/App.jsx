import React, { useState } from 'react';
import './App.css';
import PadBank from './components/PadBank';
import ControlContainer from './components/Controls';
import Logo from './components/logo';

function App() {
  const [currentPadId, setCurrentPadId] = useState('');

  return (
    <>
      <div className="inner-container" id="drum-machine">
        <PadBank setCurrentPadId={setCurrentPadId} />
        <Logo />
        <ControlContainer currentPadId={currentPadId} />
      </div>
    </>
  );
}

export default App;
