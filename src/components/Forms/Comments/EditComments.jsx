import React, { Component } from "react";
import "./Comments.css";

export default class EditComments extends Component {
  state = {
    author: "",
    text: "",
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
  };

  render() {
      // console.log(this.props);
    return <div></div>;
  }
}
