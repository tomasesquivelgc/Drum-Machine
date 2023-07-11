import React from "react";
import DrumPad from "./DrumPad";

const PadBank = ({setCurrentPadId}) => {
  return (
    <>
      <div className='pad-bank'>
        <DrumPad padKey="Q" id={"Heater-1"} src={"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"} setCurrentPadId={setCurrentPadId} />
        <DrumPad padKey="W" id={"Heater-2"} src={"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"} setCurrentPadId={setCurrentPadId} />
        <DrumPad padKey="E" id={"Heater-3"} src={"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"} setCurrentPadId={setCurrentPadId} />
        <DrumPad padKey="A" id={"Heater-4"} src={"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"} setCurrentPadId={setCurrentPadId} />
        <DrumPad padKey="S" id={"Clap"} src={"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"} setCurrentPadId={setCurrentPadId} />
        <DrumPad padKey="D" id={"Open-HH"} src={"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"} setCurrentPadId={setCurrentPadId} />
        <DrumPad padKey="Z" id={"Kick-n'-Hat"} src={"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"} setCurrentPadId={setCurrentPadId} />
        <DrumPad padKey="X" id={"Kick"} src={"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"} setCurrentPadId={setCurrentPadId} />
        <DrumPad padKey="C" id={"Closed-HH"} src={"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"} setCurrentPadId={setCurrentPadId} />
      </div>
    </>
  )
}

export default PadBank;