import React from "react";
import profiles from "./data/berlin.json";

class Facebook extends React.Component {
  render() {
    const profilesList = profiles.map(profile => {
      const type = profile.isStudent === false ? "Teacher" : "Student";
      return (
        <div key={profile.firstName}>
          <div>
            <img src={profile.img} />
          </div>
          <div>
            <p>
              <strong>First Name: </strong>
              {profile.firstName}
            </p>
            <p>
              <strong>Last Name: </strong>
              {profile.lastName}
            </p>
            <p>
              <strong>Country: </strong>
              {profile.country}
            </p>
            <p>
              <strong>Type:</strong>
              {type}
            </p>
          </div>
        </div>
      );
    });
    return <div className="">{profilesList}</div>;
  }
}

export default Facebook;
