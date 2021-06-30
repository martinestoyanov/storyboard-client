import React, { Component } from "react";
import ReactPlayer from "react-player";
import ProfilePic from "../../images/profile-silhouette.png";
import dateFormat from "dateformat";
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
    // console.log(this.props);
    const { createdAt, genre, title, upvotes, url, user } =
      this.props.eachVideo;
      const created = dateFormat(createdAt, "mmmm dS, yyyy");
    return (
      <div>
        <div className="comment-info">
          {/* video author not currently being queried/passed */}
          <div className="user-info">
            <img src={ProfilePic} alt="Profile Pic" />
            <b>
              <p className="username">{user}</p>
            </b>
          </div>
          <b>
            <p className="genre">{genre}</p>
          </b>
          <b>
            <p className="date">{created}</p>
          </b>
        </div>
        <ReactPlayer url={url} controls width="100%" height="75vh" />
        <div className="comment-info video-info">
          {!upvotes ? <p>0 Likes</p> : <p># of Likes</p>}
          <b>
            <u>{title}</u>
          </b>
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
