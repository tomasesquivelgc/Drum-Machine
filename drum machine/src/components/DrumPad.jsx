import React from "react";

const DrumPad = ({ padKey, id, src }) => {
  return (
    <>
    <div className="drum-pad" id={id}>
      <audio src={src} className="clip" id={padKey}></audio>
      {padKey}</div>
    </>
  )
}

export default DrumPad;