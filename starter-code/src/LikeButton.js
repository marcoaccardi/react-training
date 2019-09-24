import React from "react";

class LikeButton extends React.Component {
  state = {
    liked: 0,
    strLike: "Like"
  };
  handleClick = () => {
    let counter = this.state.liked;

    counter++;

    if (this.state.strLike === 1) {
      this.setState({ strLike: "Like" });
      this.setState({ liked: counter });
    } else if (this.state.strLike === 0 || this.state.strLike > 1) {
      this.setState({ strLike: "Likes" });
      this.setState({ liked: counter });
    }
  };

  render() {
    const arrColor = ["purple", "blue", "green", "yellow", "orange", "red"];

    return (
      <div>
        <button
          style={{
            backgroundColor: `${
              arrColor[Math.floor(Math.random() * arrColor.length)]
            }`
          }}
          onClick={this.handleClick}
          className="likeBtn"
        >
          {this.state.liked} {this.state.strLike}
        </button>
      </div>
    );
  }
}

export default LikeButton;
