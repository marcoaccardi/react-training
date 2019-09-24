import React from "react";

class ClickablePicture extends React.Component {
  state = {
    img: false
  }
  handleClick = () => {
    if(!this.state.img) return 
  };
  render() {
    return (
      <div>
        <div onClick={this.handleClick}>
          {/* <img src=/> */}
        </div>
      </div>
    );
  }
}
export default ClickablePicture;
