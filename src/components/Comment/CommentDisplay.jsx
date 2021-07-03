import React, { Component } from "react";
import ProfilePic from "../../images/profile-silhouette.png";
import EditComments from "../Forms/Comments/EditComments";
import ShowMoreText from "react-show-more-text";
import dateFormat from "dateformat";
import { updateComment, deleteComment } from "../../services/Comment";
import "./CommentDisplay.css";

export default class CommentDisplay extends Component {
  state = {
    isLiked: false,
    comment: {},
    author: {},
  };

  componentDidMount() {
    this.setState({
      comment: this.props.eachComment,
      author: this.props.eachComment.author,
    });
  }

  upvoteHandler = () => {
    updateComment(this.props.eachComment._id, {
      upvotes: this.props.user._id,
    }).then((response) => {
      let likeBtn = document.getElementById("like-comment");
      if (this.state.isLiked === false) {
        likeBtn.style.backgroundColor = "#651a1a";
      } else if (this.state.isLiked === true) {
        likeBtn.style.backgroundColor = "#290a0a";
      }
      console.log(response.data);
      this.setState({ comment: response.data });
    });
    // Needs to push to proper location. eachComment does not track upvotes.
    // this.props.user.push(this.state.upvotes);
  };

  editCommentHandler = () => {
    let commentDisplay = document.getElementById("comment-display");
    let editCommentDisplay = document.getElementById("edit-comment-display");
    if (editCommentDisplay.style.display === "none") {
      editCommentDisplay.style.display = "block";
      commentDisplay.style.display = "none";
    } else {
      editCommentDisplay.style.display = "none";
      commentDisplay.style.display = "block";
    }
  };

  deleteHandler = (event) => {
    event.preventDefault();
    deleteComment(this.props.eachComment._id).then((responseFromDB) => {
      console.log("DB Response: ", responseFromDB);
      // this.setState({
      //   comments: responseFromDB,
      // });
    });
  };

  render() {
    const { createdAt, text, upvotes } = this.state.comment;
    const created = dateFormat(createdAt, "mmmm dS, yyyy");
    // console.log(this.props.eachComment);
    return (
      <>
        <div className="comments" id="comment-display">
          <div className="comment-info">
            <div className="user-info">
              <img
                src={this.state.author.pictureURL || ProfilePic}
                alt="Profile Pic"
              />
              <b>
                <p className="username">{this.state.author.username}</p>
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
            <p>{upvotes?.length} Likes</p>
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
              {this.props.user &&
              this.props.user._id === this.state.author._id ? (
                <>
                  <button
                    type="button"
                    className="btn edit-btn"
                    onClick={this.editCommentHandler}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn edit-btn"
                    onClick={this.deleteHandler}
                  >
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
          className="edit-comments"
          id="edit-comment-display"
          style={{ display: "none" }}
        >
          <EditComments
            updateComments={this.props.updateHandler}
            visibilityHandler={this.editCommentHandler}
            {...this.props}
          />
        </div>
      </>
    );
  }
}
