import React, { useState } from "react";

const VolumeSlider = () => {
  const [volume, setVolume] = useState(0.5);

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
  };

  return (
    <>
      <div className="volume-slider">
        <input
          max={1}
          min={0}
          step={0.01}
          type="range"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </>
  );
};

export default VolumeSlider;
