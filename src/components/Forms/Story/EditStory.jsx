import React, { Component } from "react";
import "./Story.css";

export default class EditStory extends Component {
  state = {};

  render() {
    // console.log(this.props);
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
