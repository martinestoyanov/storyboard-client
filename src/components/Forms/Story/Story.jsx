import React, { Component } from "react";
import "./Story.css";

export default class Story extends Component {
  state = {
    title: "",
    genre: "",
    text: "",
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
    // "service" is not correct/"createStory" has not be created yet
    service.createStory(this.state).then((responseFromDB) => {
      console.log(responseFromDB);
      //   "/storytellers" has not been created yet
      this.props.push("/storytellers");
    });
  };

  render() {
    return (
      <div>
        <p>
          Feel free to select a genre for your short story, give it a title, and
          let the magic happen!
        </p>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="title"
            placeholder="Title"
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
          <textarea
            name="text"
            id="text"
            placeholder="Start your story here."
            value={this.state.text}
            onChange={this.changeHandler}
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">Post Your Story!</button>
        </form>
      </div>
    );
  }
}
