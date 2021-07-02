import React, { Component } from "react";
import { getStory } from "../../services/Story";
import { getComments } from "../../services/Comment";
import { getVideo } from "../../services/Video";
import ShowMoreText from "react-show-more-text";
import dateFormat from "dateformat";
import VideoDisplay from "../Video/VideoDisplay";
import Video from "../Forms/Video/Video";
import CommentDisplay from "../Comment/CommentDisplay";
import Comments from "../Forms/Comments/Comments";
// import EditComments from "../Forms/Comments/EditComments";
import ProfilePic from "../../images/profile-silhouette.png";
import "./StoryDisplay.css";
import { QUERY, STORY, COMMENT, VIDEO } from "../../utils/queryConsts";
import { Link } from "react-router-dom";
import * as PATHS from "../../utils/paths.js"

export default class StoryDisplay extends Component {
  state = {
    upvotes: 0,
    isLiked: false,
  };

  componentDidMount = () => {
    getStory(this.props.id, {
      [QUERY.POPULATE]: [STORY.AUTHOR, STORY.VIDEOS],
    }).then((story) => {
      const fullData = story;
      // console.log("state on 45",this.state);

      const commentsPop = getComments({
        [QUERY.NAME.STORY]: story.data.title,
        [QUERY.NAME.USER]: story.data.author.username,
        [QUERY.POPULATE]: [COMMENT.AUTHOR],
      });

      //This code block is incomplete, left for reference.
      // const videosPop = getVideo({
      //
      //   [QUERY.POPULATE]: [VIDEO.COMMENTS],
      // });

      Promise.all([
        commentsPop,
        // videosPop
      ]).then((pops) => {
        fullData.data.comments = pops[0].data.comments;
        // fullData.videosPop = pops[1];
        this.setState(fullData);
      });
    });
  };

  commentHandler = () => {
    let toggle = document.getElementById("comment-form");
    if (toggle.style.display === "none") {
      toggle.style.display = "block";
    } else {
      toggle.style.display = "none";
    }
  };

  commentUpdateHandler = (newComment) => {
    console.log("new comment",newComment)
    let currentData = {...this.state.data};
    currentData.comments.push(newComment);
    this.setState({ data: currentData });
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
    let likeBtn = document.getElementById("like-story");
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
    // Needs to push to proper location. Story does not track upvotes.
    // this.props.user.push(this.state.upvotes);
  };

  render() {
    console.log(this.state.data);

    if (this.state.status) {
      const { text, title, genre, createdAt, upvotes } = this.state.data;
      const author = this.state.data.author.username;
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
              <p>{upvotes?.length} Likes</p>
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
                    <button type="button" id="like-story" className="btn like-btn" onClick={this.upvoteHandler}>
                      Like
                    </button>
                  </>
                ) : (
                  <></>
                )}
                {this.props.user &&
                this.props.user._id === this.state.data.author._id ? (
                  <>
                    <Link to={{pathname: `${this.state.data._id}/edit`, story: this.state.data}} className="btn edit-btn">Edit</Link>
                    <button type="button" className="btn delete-btn">
                      Delete
                    </button>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div
            className="comment-form"
            id="comment-form"
            style={{ display: "none" }}
          >
            <Comments
              storyId={this.state.data._id}
              user={this.props.user}
              updateComments={this.commentUpdateHandler}
            />
          </div>
          <div id="video-form" style={{ display: "none" }}>
            <Video />
          </div>

          {this.state.data.comments.map((eachComment, index) => (
            <div className="comment-display">
              Comments go here
              <CommentDisplay
                eachComment={eachComment}
                key={eachComment._id}
                {...this.props}
              />
            </div>
          ))}

          {this.state.data.video_contributions.map((eachVideo, index) => (
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
      );
    } else return <></>;
  }
}
