import React from "react";

const CreditCard = props => {
  const lastFour = props.number.substr(props.number.length - 4);
  const hiddenChar = "···· ···· ····";

  const lastTwo = JSON.stringify(props.expirationYear).substr(
    props.expirationYear.length - 2
  );
  const twoDigit = () => {
    if (JSON.stringify(props.expirationMonth).length < 2)
      return `0${props.expirationMonth}`;
    else return props.expirationMonth;
  };

  return (
    <div
      style={{ backgroundColor: `${props.bgColor}` }}
      className="credit-card"
    >
      <p>{props.type}</p>
      <p>
        {hiddenChar} {lastFour}
      </p>
      <p>
        Expires: {twoDigit()} / {lastTwo} {props.bank}
      </p>
      <p> {props.owner}</p>
    </div>
  );
};

export default CreditCard;
