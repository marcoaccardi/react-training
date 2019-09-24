import React from "react";

/* <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }}
      /> */

const DriverCard = props => {
  let numStar = Math.round(props.rating);
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
    <div className="driverCard">
      <table>
        <tbody>
          <tr>
            <td>
              <img src={props.img} style={{ height: "100px" }} />
            </td>
            <td>
              <p>{props.name}</p>
              <p>{rateStr}</p>
              <p>
                {props.car.model} - {props.car.licencePlate}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DriverCard;
