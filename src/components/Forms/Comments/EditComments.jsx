import React, { Component } from "react";
import * as commentService from "../../../services/Comment.js";
import "./Comments.css";

export default class EditComments extends Component {
  state = {
    id: {}, //this.props.eachComment._id,
    author: {}, //this.props.eachComment.author._id,
    text: {}, //this.props.eachComment.text,
  };

  componentDidMount() {
    console.log(this.props.eachComment);
  }

  changeHandler = (event) => {
    const input = event.target.name;
    const value = event.target.value;
    this.setState({
      [input]: value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    //   more code goes here
    commentService
      .updateComment(this.state.id, this.state)
      .then((responseFromDB) => {
        console.log("DB Response: ", responseFromDB);
        this.props.updateComments(responseFromDB);
        this.props.visibilityHandler();
        // this.props.history.push(`/story/${responseFromDB.data._id}`);
      });
  };

  render() {
    // console.log(this.props);
    return (
      <div className="comment-frm">
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="text"
            // placeholder={text}
            value={this.state.text}
            onChange={this.changeHandler}
          />
          <div className="comment-btn-div">
            <button type="submit" className="btn comment-form-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
