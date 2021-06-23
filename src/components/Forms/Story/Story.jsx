import React, { Component } from "react";
import "./Story.css";
import * as storyService from "../../../services/Story";
import * as PATHS from "../../../utils/paths";

export default class Story extends Component {
  state = {
    title: "",
    genre: "Action/Adventure",
    text: "",
    user: this.props.user._id,
  };

  changeHandler = (event) => {
    const input = event.target.name;
    const value = event.target.value;
    this.setState({
      [input]: value,
    });
  };

  selectionHandler = (event) => {
  };

  submitHandler = (event) => {
    event.preventDefault();


    storyService.createStory(this.state).then((responseFromDB) => {
      console.log(responseFromDB);
      this.props.history.push(PATHS.HOMEPAGE);
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler} className="story-form">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.changeHandler}
            className="story-form-title"
          />
          <select
            name="genre"
            value={this.state.value}
            onChange={this.changeHandler}
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
          <textarea
            name="text"
            id="text"
            placeholder="Start your story here."
            value={this.state.text}
            onChange={this.changeHandler}
            // rows="26"
          ></textarea>
          <div>
            <button type="submit">Post Story</button>
          </div>
        </form>
      </div>
    );
  }
}
