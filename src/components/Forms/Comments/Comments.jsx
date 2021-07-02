import React, { Component } from "react";
import * as commentService from "../../../services/Comment";
import "./Comments.css";
import { getComment } from "../../../services/Comment";
import { QUERY, COMMENT } from "../../../utils/queryConsts";

export default class Comments extends Component {
  state = {
    story: this.props.storyId,
    text: "",
    author: this.props.user._id,
  };

  componentDidMount() {
    // this.setState({ story: this.props._id });
    // console.log(this.props);
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

    commentService.createComment(this.state).then((responseFromDB) => {
      console.log("response: ", responseFromDB);
      getComment(responseFromDB.data.newComment._id, {
        [QUERY.POPULATE]: [COMMENT.AUTHOR],
      }).then((populatedComment) => {
        // console.log("POPULATED COMMENT ",populatedComment);
        this.props.updateComments(populatedComment);
      });

      

    });
  };

  render() {
    // console.log(this.props)
    return (
      <div className="comment-frm">
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="text"
            placeholder="Insert comment here."
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
