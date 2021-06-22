import React, { Component } from "react";
import ReactPlayer from "react-player";
import ProfilePic from "../../images/profile-silhouette.png";
import "./VideoDisplay.css";

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
        <div className="comment-info">
          <div className="user-info">
            <img src={ProfilePic} alt="Profile Pic" />
            <b><p className="username">SomeUsername</p></b>
          </div>
          <b><p className="genre">Some genre</p></b>
          <b><p className="date">Date posted</p></b>
        </div>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          controls
          width="100%"
          height="75vh"
        />
        <div className="comment-info">
          <p># of Likes</p>
          <div className="button-div">
            <button type="button" className="btn like-btn">
              Like
            </button>
            <button type="button" className="btn edit-btn">
              Edit
            </button>
            <button type="button" className="btn edit-btn">
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}
