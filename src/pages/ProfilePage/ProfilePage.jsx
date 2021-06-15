import React, { Component } from "react";
import dateFormat from "dateformat";
import "./ProfilePage.css";

export default class ProfilePage extends Component {
  render() {
    const {
      username,
      pictureURL: pic,
      email,
      stories,
      videos,
      createdAt,
    } = this.props.user;
    console.log(this.props.user);
    const memberSince = dateFormat(createdAt, "mmmm dS, yyyy");
    return (
      <div>
        <h2>Hi {username}, welcome to your profile page!</h2>
        <div className="profile">
          <div className="profile-pic">
            {/* Image URL does not work */}
            {/* "https://www.pngjoy.com/preview/c2q7b4g4u1u9p2_gray-circle-login-user-icon-png-transparent-png/" */}
            <img
              src="https://cdn3.vectorstock.com/i/1000x1000/97/32/man-silhouette-profile-picture-vector-2139732.jpg"
              alt="Profile pic"
            />
          </div>
          <div className="profile-info">
            <p>Email address: {email}</p>
            <p>Member since: {memberSince}</p>
            <p>Short stories posted: {stories.length}</p>
            <p>Movies posted: {videos.length}</p>
          </div>
        </div>
      </div>
    );
  }
}
