import React from "react";

const VolumeSlider = () => {
  return (
    <>
      <div className="volume-slider">
        <input max={1} min={0} step={0.01} type="range" value={0.5}></input>
      </div>
    </>
  )
}

export default VolumeSlider;