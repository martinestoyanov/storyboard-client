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
    const { eachVideo } = this.props;
    return (
      <div>
        <div className="comment-info">
          {/* video author not currently being queried/passed */}
          <div className="user-info">
            <img src={ProfilePic} alt="Profile Pic" />
            <b><p className="username">SomeUsername</p></b>
          </div>
          <b><p className="genre">{eachVideo.genre}</p></b>
          <b><p className="date">{eachVideo.createdAt}</p></b>
        </div>
        <ReactPlayer
          url={eachVideo.url}
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
