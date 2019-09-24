import React from "react";

const IdCard = props => {
  return (
    <div>
      <table className="border">
        <tbody>
          <tr>
            <td>
              <img src={props.picture} />
            </td>
            <td>
              <p> First Name: {props.firstName} </p>
              <p> Last Name: {props.lastName} </p>
              <p> Gender: {props.gender} </p>
              <p> Height: {props.height} </p>
              <p> Birth: {props.birth.toLocalDateString} </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IdCard;
