import React from "react";

const Random = props => {
  const randomInterval = () => {
    return Math.floor(Math.random() * (props.max - props.min + 1) + props.min);
  };
  return (
  <div>
    <p> Random value between {props.min} and {props.max} => {randomInterval()} </p>
  </div>
)
};

export default Random;
