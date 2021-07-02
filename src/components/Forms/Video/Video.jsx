import React, { Component } from "react";
import * as videoService from "../../../services/Video.js";
import "./Video.css";

export default class Video extends Component {
  state = {
    url: "",
    genre: "",
    title: "",
  };

  changeHandler = (event) => {
    const input = event.target.name;
    const value = event.target.value;
    this.setState({
      [input]: value,
    });
  };

  selectionHandler = (event) => {};

  submitHandler = (event) => {
    event.preventDefault();
    // "service" is not correct/"createVideo" has not be created yet
    videoService.createVideo(this.state).then((responseFromDB) => {
      // console.log(responseFromDB);
      //   "/storytellers" has not been created yet
      this.props.push("/storytellers");
    });
  };

  render() {
    return (
      <div className="video-form">
        <form onSubmit={this.submitHandler}>
          <div className="video-form-info">
            <input
              type="text"
              name="title"
              placeholder="Insert title."
              value={this.state.title}
              onChange={this.changeHandler}
            />
            <select
              name="genre"
              value={this.state.value}
              onChange={this.selectionHandler}
            >
              <option value="Action/Adventure">Action/Adventure</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Horror">Horror</option>
              <option value="Romance">Romance</option>
              <option value="Romantic Comedy">Romantic Comedy</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Thriller/Mystery">Thriller/Mystery</option>
            </select>
            <input
              type="text"
              name="url"
              placeholder="Paste url here."
              value={this.state.url}
              onChange={this.changeHandler}
            />
          </div>
          <div className="video-btn-div">
            <button type="submit" className="btn">Post Your Movie!</button>
          </div>
        </form>
      </div>
    );
  }
}
