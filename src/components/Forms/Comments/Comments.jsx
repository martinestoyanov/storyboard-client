import React, { Component } from "react";
import commentServices from "../../../services/Comment";
import "./Comments.css";

export default class Comments extends Component {
  state = {
    text: "",
  };

  changeHandler = (event) => {
    const input = event.target.name;
    const value = event.target.value;
    this.setState({
      [input]: value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();

    commentServices.createComment(this.state).then((responseFromDB) => {
      console.log(responseFromDB);
      //   "/storytellers" has not been created yet/Redirect somewhere else?
      this.props.push("/storytellers");
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="text"
            placeholder="Insert comment here."
            value={this.state.text}
            onChange={this.changeHandler}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
