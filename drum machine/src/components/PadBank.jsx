import React from "react";
import DrumPad from "./DrumPad";

const PadBank = () => {
  return (
    <>
      <div className='pad-bank'>
        <DrumPad padKey="Q" />
        <DrumPad padKey="W" />
        <DrumPad padKey="E" />
        <DrumPad padKey="A" />
        <DrumPad padKey="S" />
        <DrumPad padKey="D" />
        <DrumPad padKey="Z" />
        <DrumPad padKey="X" />
        <DrumPad padKey="C" />
      </div>
    </>
  )
}

export default PadBank;