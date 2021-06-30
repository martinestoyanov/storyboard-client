import React, { Component } from "react";
import ProfilePic from "../../images/profile-silhouette.png";
import ShowMoreText from "react-show-more-text";
import dateFormat from "dateformat";
import "./CommentDisplay.css";

export default class CommentDisplay extends Component {
  state = {
    upvotes: 0,
    isLiked: false,
  };

  // componentDidMount() {
  //   this.setState(this.props);
  // }

  upvoteHandler = () => {
    let likeBtn = document.getElementById("like-comment");
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
    // Needs to push to proper location. eachComment does not track upvotes.
    // this.props.user.push(this.state.upvotes);
  };

  render() {
    const { author, createdAt, text, upvotes } = this.props.eachComment;
    const created = dateFormat(createdAt, "mmmm dS, yyyy");
    // console.log(this.props.user);
    return (
      <div className="comments">
        <div className="comment-info">
          <div className="user-info">
            <img src={ProfilePic} alt="Profile Pic" />
            <b>
              <p className="username">{author}</p>
            </b>
          </div>
          <b>
            <p className="date">{created}</p>
          </b>
        </div>
        <ShowMoreText className="text" lines={2}>
          <p className="text">{text}</p>
        </ShowMoreText>
        <div className="comment-info">
          {!upvotes ? <p>0 Likes</p> : <p>{upvotes} Likes</p>}
          <div className="button-div">
            {this.props.user ? (
              <>
                <button
                  type="button"
                  id="like-comment"
                  className="btn like-btn"
                  onClick={this.upvoteHandler}
                >
                  Like
                </button>
              </>
            ) : (
              <div></div>
            )}
            {this.props.user && this.props.user._id === author ? (
              <>
                <button type="button" className="btn edit-btn">
                  Edit
                </button>
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
