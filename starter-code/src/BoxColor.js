import React from "react";

const BoxColor = props => {
  return (
    <div
      style={{
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
      }}
      className="color-box"
    >
      <p>
        rgb({props.r}, {props.g}, {props.b})
      </p>
      <p>#ff0000</p>
    </div>
  );
};

export default BoxColor;
