import React from "react";

const Control = ({controlName}) => {
  return (
    <>
    <div className="control">
      <p>{controlName}</p>
      <div className="select">
        <div className="inner" style={{float: "right"}} ></div>
      </div>
    </div>
    </>
  )
}

export default Control;