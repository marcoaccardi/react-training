import React from "react";

const Greetings = props => {
  const langCheck = () => {
    if (props.lang === "de") return "Hallo";
    if (props.lang === "fr") return "Bonjour";
    if (props.lang === "es") return "Hola";
    if (props.lang === "en") return "Hello";
  };
  return (
    <div>
      <p>{langCheck() + props.children}</p>
    </div>
  );
};
export default Greetings;
