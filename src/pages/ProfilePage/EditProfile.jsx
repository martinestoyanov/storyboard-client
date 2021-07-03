import React, { Component } from "react";
import "./ProfilePage.css";
import { updateUser } from "../../services/User";
import { avatarUpload } from "../../services/image-upload";
import cleanDeep from "clean-deep";

export default class EditProfile extends Component {
  state = {
    username: "",
    email: "",
    pictureURL: "",
    password: "",
    fileRef: React.createRef(),
  };

  componentDidMount() {}

  changeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFileUpload = (event) => {
    avatarUpload(this.state.fileRef.current.files[0])
      .then((response) => {
        this.setState({ pictureURL: response.data.secure_url });
      })
      .catch((error) => {
        console.log("error uploding the file: ", error);
      });
  };

  submitHandler = (event) => {
    event.preventDefault();
    const sanitizedState = cleanDeep(this.state);
    if (this.state.fileRef.current.files) {
      avatarUpload(this.state.fileRef.current.files[0]).then((response) => {
        const url = response.data.secure_url;
        delete sanitizedState.fileRef;
        sanitizedState.pictureURL = url;
        updateUser(this.props.user._id, sanitizedState).then((res) => {
          alert(
            ` Information updated. You will be logged out. Please log in again using your new information.`
          );
          this.props.handleLogout();
        });
      });
    } else {
      updateUser(this.props.user._id, sanitizedState).then((res) => {
        alert(
          ` Information updated. You will be logged out. Please log in again using your new information.`
        );
        this.props.handleLogout();
      });
    }
  };

  render() {
    const { username, pictureURL: pic, email } = this.props.user;
    return (
      <div>
        <h2>Edit Profile Page</h2>
        <div className="edit-profile-pic">
          <img src={pic} alt="Profile pic" />
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
            <label htmlFor="pictureURL">Profile Pic</label>
            <input type="file" ref={this.state.fileRef} />
          </div>

          <div className="form-input">
            <label htmlFor="password">Password</label>
            <input
              id="input-password"
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.changeHandler}
              minLength="8"
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
