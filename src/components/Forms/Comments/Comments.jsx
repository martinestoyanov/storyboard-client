import React, { Component } from "react";
import * as commentService from "../../../services/Comment";
import "./Comments.css";

export default class Comments extends Component {
  state = {
    storyId:"",
    commentText: "",
  };

  componentDidMount() {
    this.setState({ storyId: this.props._id });
    console.log(this.state);
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
      console.log(responseFromDB);
      //   "/storytellers" has not been created yet/Redirect somewhere else?
      // this.props.push("/storytellers");
    });
  };

  render() {
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
