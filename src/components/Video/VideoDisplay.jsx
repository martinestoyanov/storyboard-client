import React, { Component } from "react";
import ReactPlayer from "react-player";
import ProfilePic from "../../images/profile-silhouette.png";
import dateFormat from "dateformat";
import * as videoService from "../../services/Video.js";
import "./VideoDisplay.css";

export default class VideoDisplay extends Component {
  state = {
    muted: true,
    isLiked: false,
    video: {},
    user: {},
  };

  componentDidMount = () => {
    this.setState({
      video: this.props.eachVideo,
      user: this.props.eachVideo.user,
    });
  };

  upvoteHandler = () => {
    // Needs to push to proper location.
    console.log(this.props.eachVideo);
    videoService
      .updateVideo(this.props.eachVideo._id, { upvotes: this.props.user._id })
      .then((response) => {
        let likeBtn = document.getElementById("like-video");
        if (this.state.isLiked === false) {
          likeBtn.style.backgroundColor = "#651a1a";
        } else if (this.state.isLiked === true) {
          likeBtn.style.backgroundColor = "#290a0a";
        }
        this.setState({ video: response.data });
        // console.log("DB Response: ", responseFromDB);
        // this.props.history.push(`/video/${responseFromDB.data.upvotes}/update`)
      });
  };

  autoUnMute = (event) => {
    this.setState({ muted: false });
  };

  render() {
    // console.log(this.props);
    const { createdAt, genre, title, upvotes, url } = this.state.video;
    const created = dateFormat(createdAt, "mmmm dS, yyyy");
    return (
      <div>
        <div className="comment-info">
          {/* video author not currently being queried/passed */}
          <div className="user-info">
            <img
              src={this.state.user.pictureURL || ProfilePic}
              alt="Profile Pic"
            />
            <b>
              <p className="username">{this.state.user.username}</p>
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
          {upvotes?.length} Likes
          <b>
            <u>{title}</u>
          </b>
          <div className="button-div">
            {this.props.user ? (
              <>
                <button
                  type="button"
                  id="like-video"
                  className="btn like-btn"
                  onClick={this.upvoteHandler}
                >
                  Like
                </button>
              </>
            ) : (
              <div></div>
            )}
            {this.props.user &&
            this.props.user._id === this.props.eachVideo.user._id ? (
              <>
                <button type="button" className="btn edit-btn">
                  Delete
                </button>
              </>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
