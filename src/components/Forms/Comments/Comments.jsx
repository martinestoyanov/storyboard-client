import React, { Component } from "react";
import * as commentService from "../../../services/Comment";
import "./Comments.css";

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
    //-----------------------------BOTH CREATED! -----------------------
    // "service" is not correct/"createComment" has not be created yet
    //------------------------------------------------------------------
    commentService.createComment(this.state).then((responseFromDB) => {
      console.log("response: ", responseFromDB);
      //   "/storytellers" has not been created yet/Redirect somewhere else?
      // this.props.push("/storytellers");
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
