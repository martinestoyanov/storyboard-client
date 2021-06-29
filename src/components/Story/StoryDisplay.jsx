import React, { Component } from "react";
import { getStory } from "../../services/Story";
import ShowMoreText from "react-show-more-text";
import dateFormat from "dateformat";
import VideoDisplay from "../Video/VideoDisplay";
import Video from "../Forms/Video/Video";
import CommentDisplay from "../Comment/CommentDisplay";
import Comments from "../Forms/Comments/Comments";
// import EditComments from "../Forms/Comments/EditComments";
import ProfilePic from "../../images/profile-silhouette.png";
import "./StoryDisplay.css";
import { QUERY, STORY } from "../../utils/queryConsts";

export default class StoryDisplay extends Component {
  state = {};

  componentDidMount = () => {
    if (!this.props.queried) {
      getStory(this.props.id, {
        [QUERY.POPULATE]: [STORY.AUTHOR, STORY.COMMENTS, STORY.VIDEOS],
      }).then((story) => {
        this.setState(story);
      });
    } else if (this.props.fromRandom) {
      this.setState({ data: this.props.data.randomStory, status: true });
    }
  };

  commentHandler = () => {
    let toggle = document.getElementById("comment-form");
    if (toggle.style.display === "none") {
      toggle.style.display = "block";
    } else {
      toggle.style.display = "none";
    }
  };

  videoHandler = () => {
    let toggle = document.getElementById("video-form");
    if (toggle.style.display === "none") {
      toggle.style.display = "block";
    } else {
      toggle.style.display = "none";
    }
  };

  upvoteHandler = () => {
    // this.setState({ upvotes: (this.state.data.upvotes += 1) });
    // Need to push to db
  };

  render() {
    // console.log(this.state.data);

    if (this.state.status) {
      // console.log(this.state.data);
      const { text, title, genre, createdAt } = this.state.data;
      const author = this.state.data.user.username;
      const created = dateFormat(createdAt, "mmmm dS, yyyy");
      return (
        <div className="display-div">
          <div className="story-display">
            <h3 className="story-title">{title}</h3>
            <div className="story-details">
              <div className="user-details">
                <img src={ProfilePic} alt="Profile pic" />
                <b>
                  <p className="story-user">{author}</p>
                </b>
              </div>
              <b>
                <p className="story-genre">{genre}</p>
              </b>
              <b>
                <p className="story-date">{created}</p>
              </b>
            </div>
            <ShowMoreText lines={5} className="story-text">
              <p>{text}</p>
            </ShowMoreText>
            <div className="comment-info story-info">
              <p># of Likes</p>
              <div className="button-div">
                {this.props.user ? (
                  <>
                    <button
                      type="button"
                      className="btn comment-btn"
                      onClick={this.commentHandler}
                    >
                      Comment
                    </button>
                    <button
                      type="button"
                      className="btn movie-btn"
                      onClick={this.videoHandler}
                    >
                      Add Movie
                    </button>
                    <button type="button" className="btn like-btn">
                      Like
                    </button>
                  </>
                ) : (
                  <div></div>
                )}
                {this.props.user &&
                this.props.user._id === this.state.data.user._id ? (
                  <>
                    <button type="button" className="btn edit-btn">
                      Edit
                    </button>
                    <button type="button" className="btn delete-btn">
                      Delete
                    </button>
                  </>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
          <div
            className="comment-form"
            id="comment-form"
            style={{ display: "none" }}
          >
            <Comments {...this.state.data} />
          </div>
          <div id="video-form" style={{ display: "none" }}>
            <Video />
          </div>

          {this.state.data.comments.map((eachComment, index) => (
            <div className="comment-display">
              <CommentDisplay eachComment={eachComment} {...this.props} />
            </div>
          ))}

          {this.state.data.video_contributions.map((eachVideo, index) => (
            <div className="video-display">
              <VideoDisplay eachVideo={eachVideo} {...this.props} className="video" />
            </div>
          ))}
        </div>
      );
    } else return <div></div>;
  }
}
