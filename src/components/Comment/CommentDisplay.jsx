import React, { Component } from "react";
import ProfilePic from "../../images/profile-silhouette.png";
import "./CommentDisplay.css";

export default class CommentDisplay extends Component {
  render() {
    return (
      <div className="comments">
        <div className="user-info">
          <img src={ProfilePic} alt="Profile Pic" />
          <p className="username">SomeUsername</p>
        </div>
        <p className="text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias,
          laborum! Labore ullam explicabo itaque mollitia culpa quidem
          aspernatur corporis quibusdam.
        </p>
        <p className="date">Date posted</p>
      </div>
    );
  }
}
