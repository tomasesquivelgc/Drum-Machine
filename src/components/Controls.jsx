import React from "react";
import Control from "./Control";
import VolumeSlider from "./VolumeSlider";

const ControlContainer = ({currentPadId}) => {
  return (
    <>
    <div className="controls-container">
      <Control controlName={"Power"} />
      <div id="display">{currentPadId}</div>
      <VolumeSlider />
      <Control controlName={"Bank"} />
    </div>
    </>
  )
}

export default ControlContainer;