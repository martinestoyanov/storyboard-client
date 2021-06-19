import React, { Component } from "react";
import "./ProfilePage.css";

export default class EditProfile extends Component {
  state = {
    username: "",
    email: "",
    pic: "",
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
  }

  render() {
    console.log(this.state);
    const { username, pictureURL: pic, email } = this.props.user;
    return (
      <div>
        <h2>Edit Profile Page</h2>
        <div className="edit-profile-pic">
          <img
            src="https://cdn3.vectorstock.com/i/1000x1000/97/32/man-silhouette-profile-picture-vector-2139732.jpg"
            alt="Profile pic"
          />
        </div>
        <form className="edit-profile-form" onSubmit={this.submitHandler}>
          <div className="form-input">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder={username}
              value={this.state.username}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder={email}
              value={this.state.email}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-input">
            <label htmlFor="pic">Profile Pic</label>
            <input
              type="text"
              name="pic"
              placeholder={pic}
              value={this.state.pic}
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
