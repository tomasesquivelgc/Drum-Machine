import React from "react";

const DrumPad = ({ padKey, id }) => {
  return (
    <>
    <div className="drum-pad" id={id}>{padKey}</div>
    </>
  )
}

export default DrumPad;