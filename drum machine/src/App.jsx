import {  } from 'react'
import './App.css'
import PadBank from './components/PadBank'
import ControlContainer from './components/Controls'

function App() {


  return (
    <>
      <div className="inner-container" id="drum-machine">
        <PadBank />
        <div className="logo">
          <div className='inner-logo'>FCC</div>
          <i className='inner-logo'></i>
        </div>
        <ControlContainer />
      </div>
    </>
  )
}

export default App
