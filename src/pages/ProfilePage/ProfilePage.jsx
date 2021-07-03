import React, { Component } from "react";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import * as PATHS from "../../utils/paths.js";
import "./ProfilePage.css";
import ProfilePic from "../../images/profile-silhouette.png";
import { QUERY, USER } from "../../utils/queryConsts";
import { getStories } from "../../services/Story";
import ShowMoreText from "react-show-more-text";
import VideoDisplay from "../../components/Video/VideoDisplay";
import { getVideos } from "../../services/Video.js";

export default class ProfilePage extends Component {
  state = {};

  componentDidMount = () => {
    this.setState(this.props.user);
    const userStories = getStories({
      [QUERY.NAME.USER]: this.props.user.username,
      [QUERY.POPULATE]: [USER.STORIES, USER.COMMENTS, USER.VIDEOS],
    });
    const userVideos = getVideos({
      [QUERY.NAME.USER]: this.props.user.username,
      [QUERY.POPULATE]: [USER.STORIES, USER.COMMENTS, USER.VIDEOS],
    });
    Promise.all([userStories, userVideos]).then((promises) => {
      this.setState({
        stories: promises[0].data.stories,
        videos: promises[1].data.videos,
        status: true,
      });
    });
  };

  render() {
    const { username, pictureURL, email, stories, videos, createdAt } =
      this.state;
    console.log("videos", videos);
    const memberSince = dateFormat(createdAt, "mmmm dS, yyyy");
    if (
      this.state.status &&
      this.state.stories.length > 0 &&
      this.state.videos.length > 0
    ) {
      return (
        <div>
          <h2>Hi {username}, welcome to your profile page!</h2>
          <div className="profile">
            <div className="profile-pic">
              <img src={pictureURL || ProfilePic} alt="Profile pic" />
              <Link to={PATHS.EDITPROFILE}>
                <p>Edit</p>
              </Link>
            </div>
            <div className="profile-info">
              <p>Email address: {email}</p>
              <p>Member since: {memberSince}</p>
              <p>Short stories posted: {stories.length}</p>
              <p>Movies posted: {videos.length}</p>
            </div>
          </div>
          <div className="user-content">
            <div className="user-stories">
              <h3>{username}'s Recent Short Stories</h3>

              {this.state.stories.map((eachStory, index) => (
                <div className="story-preview">
                  <Link to={`/story/${eachStory._id}`}>
                    <div>
                      <h3 className="preview-title">{eachStory.title}</h3>
                      <div className="preview-details">
                        <div className="preview-user-details">
                          <img
                            src={eachStory.author.pictureURL || ProfilePic}
                            alt="Profile pic."
                          />
                          <b>
                            <p className="preview-user">
                              {eachStory.author.username}
                            </p>
                          </b>
                        </div>
                        <b>
                          <p className="preview-date">
                            {dateFormat(eachStory.createdAt, "mmmm dS, yyyy")}
                          </p>
                        </b>
                      </div>
                      <ShowMoreText className="preview-text" more="" lines={5}>
                        <p>{eachStory.text}</p>
                      </ShowMoreText>
                      <div className="preview-info">
                        <p className="preview-likes"># of Likes</p>
                        <p className="preview-videos">
                          {eachStory.video_contributions.length} Movies
                        </p>
                        <p className="preview-comments">
                          {eachStory.comments.length} Comments
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="user-movies">
              <h3>{username}'s Recent Movies</h3>

              {this.state.videos.map((eachVideo, index) => (
                <div className="video-display">
                  <VideoDisplay
                    eachVideo={eachVideo}
                    key={eachVideo._id}
                    {...this.props}
                    className="video"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    } else if (
      this.state.status &&
      this.state.stories.length > 0 &&
      this.state.videos.length === 0
    ) {
      return (
        <div>
          <h2>Hi {username}, welcome to your profile page!</h2>
          <div className="profile">
            <div className="profile-pic">
              <img src={pictureURL || ProfilePic} alt="Profile pic" />
              <Link to={PATHS.EDITPROFILE}>
                <p>Edit</p>
              </Link>
            </div>
            <div className="profile-info">
              <p>Email address: {email}</p>
              <p>Member since: {memberSince}</p>
              <p>Short stories posted: {stories.length}</p>
              <p>Movies posted: {videos.length}</p>
            </div>
          </div>
          <div className="user-content">
            <div className="user-stories">
              <h3>{username}'s Recent Short Stories</h3>

              {this.state.stories.map((eachStory, index) => (
                <div className="story-preview">
                  <Link to={`/story/${eachStory._id}`}>
                    <div>
                      <h3 className="preview-title">{eachStory.title}</h3>
                      <div className="preview-details">
                        <div className="preview-user-details">
                          <img
                            src={eachStory.author.pictureURL || ProfilePic}
                            alt="Profile pic."
                          />
                          <b>
                            <p className="preview-user">
                              {eachStory.author.username}
                            </p>
                          </b>
                        </div>
                        <b>
                          <p className="preview-date">
                            {dateFormat(eachStory.createdAt, "mmmm dS, yyyy")}
                          </p>
                        </b>
                      </div>
                      <ShowMoreText className="preview-text" more="" lines={5}>
                        <p>{eachStory.text}</p>
                      </ShowMoreText>
                      <div className="preview-info">
                        <p className="preview-likes"># of Likes</p>
                        <p className="preview-videos">
                          {eachStory.video_contributions.length} Movies
                        </p>
                        <p className="preview-comments">
                          {eachStory.comments.length} Comments
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="user-movies">
              <h3>{username}'s Recent Movies</h3>
              <h4>Hmmm, maybe you should create some video content!</h4>
            </div>
          </div>
        </div>
      );
    } else if (
      this.state.status &&
      this.state.stories.length === 0 &&
      this.state.videos.length === 0
    ) {
      return (
        <div>
          <h2>Hi {username}, welcome to your profile page!</h2>
          <div className="profile">
            <div className="profile-pic">
              <img src={pictureURL || ProfilePic} alt="Profile pic" />
              <Link to={PATHS.EDITPROFILE}>
                <p>Edit</p>
              </Link>
            </div>
            <div className="profile-info">
              <p>Email address: {email}</p>
              <p>Member since: {memberSince}</p>
              <p>Short stories posted: {stories.length}</p>
              <p>Movies posted: {videos.length}</p>
            </div>
          </div>
          <div className="user-content">
            <div className="user-stories">
              <h3>{username}'s Recent Short Stories</h3>
              <h4>Hmmm, maybe you should submit some stories!</h4>
            </div>
            <div className="user-movies">
              <h3>{username}'s Recent Movies</h3>
              <h4>Hmmm, maybe you should create some video content!</h4>
            </div>
          </div>
        </div>
      );
    } else if (
      this.state.status &&
      this.state.stories.length === 0 &&
      this.state.videos.length > 0
    ) {
      return (
        <div>
          <h2>Hi {username}, welcome to your profile page!</h2>
          <div className="profile">
            <div className="profile-pic">
              <img src={pictureURL || ProfilePic} alt="Profile pic" />
              <Link to={PATHS.EDITPROFILE}>
                <p>Edit</p>
              </Link>
            </div>
            <div className="profile-info">
              <p>Email address: {email}</p>
              <p>Member since: {memberSince}</p>
              <p>Short stories posted: {stories.length}</p>
              <p>Movies posted: {videos.length}</p>
            </div>
          </div>
          <div className="user-content">
            <div className="user-stories">
              <h3>{username}'s Recent Short Stories</h3>
              <h4>Hmmm, maybe you should submit some stories!</h4>
            </div>
            <div className="user-movies">
              <h3>{username}'s Recent Movies</h3>
              {this.state.videos.map((eachVideo, index) => (
                <div className="video-display">
                  <VideoDisplay
                    eachVideo={eachVideo}
                    key={eachVideo._id}
                    {...this.props}
                    className="video"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    } else return null;
  }
}
