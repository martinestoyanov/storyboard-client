import React, { Component } from "react";
import * as commentService from "../../../services/Comment.js";
import "./Comments.css";

export default class EditComments extends Component {
  state = {
    id: this.props.comment._id,
    author: "",
    text: this.props.comment.text,
  };

  componentDidMount() {}

  changeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  submitHandler = (event) => {
    event.preventDefalut();
    //   more code goes here
    commentService.updateComment(this.state.id).then((responseFromDB) => {
      console.log(responseFromDB);
    })
  };

  render() {
    console.log(this.props);
    // const { text } = this.props.comment;
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
