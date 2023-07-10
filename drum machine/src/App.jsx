import {  } from 'react'
import './App.css'
import PadBank from './components/PadBank'
import Controls from './components/Controls'

function App() {


  return (
    <>
      <div className='inner-container' id="drum-machine">
        <PadBank />
        <div id="logo">
          <div className='inner-logo'>FCC</div>
          <i className='inner-logo'></i>
        </div>
        <Controls />
      </div>
    </>
  )
}

export default App
