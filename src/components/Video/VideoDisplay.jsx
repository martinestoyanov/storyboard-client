import React, { Component } from "react";
import ReactPlayer from "react-player";

export default class VideoDisplay extends Component {
  state = { muted: true };

  componentDidMount = () => {
    // getStory(this.props.id).then((story) => {
    //   this.setState(story);
    // });
  };

  autoUnMute = (event) => {
    this.setState({ muted: false });
  };

  render() {
    return (
      <div>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          controls
        />
      </div>
    );
  }
}

