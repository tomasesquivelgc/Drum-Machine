import React from "react";
import DrumPad from "./DrumPad";

const PadBank = () => {
  return (
    <>
      <div className='pad-bank'>
        <DrumPad padKey="Q" id={"Chord-1"} />
        <DrumPad padKey="W" id={"Chord-2"} />
        <DrumPad padKey="E" id={"Chord-3"} />
        <DrumPad padKey="A" id={"Shaker"} />
        <DrumPad padKey="S" id={"Open-HH"} />
        <DrumPad padKey="D" id={"Closed-HH"} />
        <DrumPad padKey="Z" id={"Punchy-Kick"} />
        <DrumPad padKey="X" id={"Side-Stick"} />
        <DrumPad padKey="C" id={"Snare"} />
      </div>
    </>
  )
}

export default PadBank;