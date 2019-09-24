import React from "react";

const Rating = props => {
  let numStar = Math.round(props.children);
  let rateStr = "";

  const createRating = () => {
    for (let i = 0; i <= numStar; i++) {
      rateStr += "★";
    }
    for (let i = rateStr.length; i <= 5; i++) {
      rateStr += "☆";
    }
    return rateStr;
  };

  createRating();

  return (
    <div>
      <p>{rateStr}</p>
    </div>
  );
};
export default Rating;
