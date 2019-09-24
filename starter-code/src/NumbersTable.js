import React from "react";

const NumbersTable = props => {
  let grid = () => {
    let result = [];
    for (let i = 1; i <= props.limit; i++) {
      const gridStyle =
        i % 2 === 1 ? { backgroundColor: "red" } : { backgroundColor: "white" };
      result.push(
        <div key={i} style={gridStyle} className="num-table">
          {i}
        </div>
      );
    }
    return result;
  };
  return <div className="grid-table">{grid()}</div>;
};

export default NumbersTable;
