import React, { useEffect, useState } from "react";

const DrumPad = ({ padKey, id, src }) => {
  const [isActive, setIsActive] = useState(false);

  const playAudio = () => {
    const audioElement = document.getElementById(padKey);
    audioElement.currentTime = 0; // Reset the audio clip to the beginning
    audioElement.play();
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 100); // Change the timeout value to adjust the duration of the active state
  };

  const handleKeyPress = (event) => {
    if (event.key.toLowerCase() === padKey.toLowerCase()) {
      playAudio();
    }
  };

  const handleClick = () => {
    playAudio();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      <div
        className={`drum-pad ${isActive ? "active" : ""}`}
        id={id}
        onClick={handleClick}
        tabIndex="0"
      >
        <audio src={src} className="clip" id={padKey}></audio>
        {padKey}
      </div>
    </>
  );
};

export default DrumPad;
