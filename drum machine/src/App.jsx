import {  } from 'react'
import './App.css'
import PadBank from './components/PadBank'
import ControlContainer from './components/Controls'
import Logo from './components/logo'

function App() {

  return (
    <>
      <div className="inner-container" id="drum-machine">
        <PadBank />
        <Logo />
        <ControlContainer />
      </div>
    </>
  )
}

export default App
