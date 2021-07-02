import React, { Component } from "react";
import ReactPlayer from "react-player";
import ProfilePic from "../../images/profile-silhouette.png";
import dateFormat from "dateformat";
import * as videoService from "../../services/Video.js";
import "./VideoDisplay.css";

export default class VideoDisplay extends Component {
  state = {
    muted: true,
    upvotes: 0,
    isLiked: false,
  };

  componentDidMount = () => {
    // getStory(this.props.id).then((story) => {
    //   this.setState(story);
    // });
  };

  upvoteHandler = () => {
    let likeBtn = document.getElementById("like-video");
    if (this.state.isLiked === false) {
      likeBtn.style.backgroundColor = "#651a1a";
      this.setState({
        upvotes: this.state.upvotes + 1,
        isLiked: true,
      });
    } else if (this.state.isLiked === true) {
      likeBtn.style.backgroundColor = "#290a0a";
      this.setState({
        upvotes: this.state.upvotes - 1,
        isLiked: false,
      });
    }
    // Needs to push to proper location.
    videoService.updateVideo(this.props.eachVideo._id, {upvotes: this.props.user._id}).then((responseFromDB) => {
      console.log("DB Response: ", responseFromDB);
        this.props.eachVideo.upvotes = responseFromDB.data.upvotes;
      // this.props.history.push(`/video/${responseFromDB.data.upvotes}/update`)
    });
  };

  autoUnMute = (event) => {
    this.setState({ muted: false });
  };

  render() {
    console.log(this.props);
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
          {upvotes?.length} Likes
          <b>
            <u>{title}</u>
          </b>
          <div className="button-div">
            <button
              type="button"
              id="like-video"
              className="btn like-btn"
              onClick={this.upvoteHandler}
            >
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
